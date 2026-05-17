import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCORD_LINK, GOOGLE_SHEET_URL } from "../constants";

const WhatsAppModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    tradingLevel: "Beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // 1. Trigger whatsapp_form_submit GTM event right away
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_form_submit" });

    try {
      // 2. Fetch POST to GOOGLE_SHEET_URL
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script redirects usually cause CORS, no-cors ensures execution succeeds without CORS error blocking code
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // 3. Immediately after fetch completes (or fails), trigger discord_redirect_click GTM event and redirect with a slight delay
      window.dataLayer.push({ event: "discord_redirect_click" });
      setIsSubmitting(false);
      onClose();

      setTimeout(() => {
        window.location.href = DISCORD_LINK;
      }, 100);
    }
  };

  const handleSkip = () => {
    // 1. Trigger skip_whatsapp_click GTM event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "skip_whatsapp_click" });

    // 2. Trigger discord_redirect_click GTM event
    window.dataLayer.push({ event: "discord_redirect_click" });

    onClose();

    // 3. Redirect to DISCORD_LINK after 100ms to allow GTM to capture the events
    setTimeout(() => {
      window.location.href = DISCORD_LINK;
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glassmorphic Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0b1528]/95 border border-white/10 p-6 md:p-8 text-white shadow-2xl shadow-emerald-500/5 backdrop-blur-2xl z-10"
          >
            {/* Glowing top effect */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

            {/* Header / Icon */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.117-2.887-6.983C16.58 1.89 14.103.863 11.47.863c-5.437 0-9.86 4.421-9.864 9.866 0 1.637.452 3.236 1.309 4.673l-.999 3.65 3.741-.981.4-.237zm11.336-7.7c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                  Stay Updated on WhatsApp
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Enter your WhatsApp number to receive important market updates,
              free lessons, and Discord announcements. You can also skip this
              step and join Discord directly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder-gray-500 text-sm"
                />
              </div>

              {/* WhatsApp Number Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  required
                  placeholder="e.g. +1 234 567 8900"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder-gray-500 text-sm"
                />
              </div>

              {/* Trading Level Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Trading Level
                </label>
                <select
                  name="tradingLevel"
                  value={formData.tradingLevel}
                  onChange={handleChange}
                  className="bg-[#0b1528] border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white rounded-xl px-4 py-3 outline-none transition-all duration-200 text-sm cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.25rem",
                    backgroundRepeat: "no-repeat",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                {/* Submit & Join Discord */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-emerald text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-base shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 disabled:opacity-55 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Submit & Join Discord"
                  )}
                </button>

                {/* Skip and Join Discord */}
                <button
                  type="button"
                  onClick={handleSkip}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm"
                >
                  Skip and Join Discord
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;
