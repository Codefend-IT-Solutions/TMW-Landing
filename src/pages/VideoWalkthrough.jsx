import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Inline SVG Icons ──────────────────────────────────────────────────────────
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

const FullscreenEnterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

const FullscreenExitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
  </svg>
);

// ─── Helpers ───────────────────────────────────────────────────────────────────
const formatTime = (sec) => {
  if (!sec || isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

// ─── Component ─────────────────────────────────────────────────────────────────
const VideoWalkthrough = () => {
  const videoRef      = useRef(null);
  const containerRef  = useRef(null);
  const progressRef   = useRef(null);
  const hideTimer     = useRef(null);

  const [isPlaying,     setIsPlaying]     = useState(false);
  const [currentTime,   setCurrentTime]   = useState(0);
  const [duration,      setDuration]      = useState(0);
  const [isMuted,       setIsMuted]       = useState(false);
  const [volume,        setVolume]        = useState(1);
  const [isBuffering,   setIsBuffering]   = useState(false);
  const [showControls,  setShowControls]  = useState(true);
  const [isFullscreen,  setIsFullscreen]  = useState(false);
  const [hasStarted,    setHasStarted]    = useState(false);
  const [flashIcon,     setFlashIcon]     = useState(false);
  const [isDragging,    setIsDragging]    = useState(false);

  // ── Auto-hide controls ────────────────────────────────────────────────────
  const scheduleHide = useCallback(() => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 3000);
  }, []);

  const revealControls = useCallback(() => {
    setShowControls(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  // ── Play / Pause ─────────────────────────────────────────────────────────
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setHasStarted(true);
    } else {
      v.pause();
    }
    setFlashIcon(true);
    setTimeout(() => setFlashIcon(false), 500);
    revealControls();
  };

  // ── Progress scrubbing ────────────────────────────────────────────────────
  const seek = (clientX) => {
    if (!progressRef.current || !duration) return;
    const rect  = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const onProgressClick   = (e) => { e.stopPropagation(); seek(e.clientX); };
  const onProgressTouch   = (e) => { e.stopPropagation(); seek(e.touches[0].clientX); };

  // ── Volume ────────────────────────────────────────────────────────────────
  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const onVolumeChange = (e) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value);
    if (videoRef.current) videoRef.current.volume = val;
    setVolume(val);
    setIsMuted(val === 0);
  };

  // ── Fullscreen ────────────────────────────────────────────────────────────
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
            New to Discord? Watch This Quick 1-Minute Guide
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See exactly how to register, access the free courses, and navigate our training steps.
          </p>
        </div>

        {/* ── Player shell ───────────────────────────────────────────────── */}
        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl shadow-emerald-500/10 cursor-pointer select-none group"
          onMouseMove={revealControls}
          onTouchStart={revealControls}
          onClick={togglePlay}
        >
          {/* Emerald ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src="https://docs.google.com/uc?export=download&confirm=t&id=1fo45-7J4F0L-4pi0P4Vct-3XsoWf6heb"
            playsInline
            preload="metadata"
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
            onPlay={() => { setIsPlaying(true); scheduleHide(); }}
            onPause={() => { setIsPlaying(false); setShowControls(true); }}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onEnded={() => { setIsPlaying(false); setShowControls(true); setHasStarted(false); }}
          />

          {/* Initial big play button */}
          <AnimatePresence>
            {!hasStarted && (
              <motion.div
                key="big-play"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/90 shadow-xl shadow-emerald-500/40 backdrop-blur-sm ring-4 ring-white/10">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-0.5">
                    <PlayIcon />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play/Pause flash overlay */}
          <AnimatePresence>
            {flashIcon && hasStarted && (
              <motion.div
                key="flash"
                initial={{ opacity: 0.9, scale: 0.75 }}
                animate={{ opacity: 0, scale: 1.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div className="bg-black/60 rounded-full p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 text-white">
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buffering spinner */}
          <AnimatePresence>
            {isBuffering && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-emerald-400 animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Controls bar ─────────────────────────────────────────────── */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-0 left-0 right-0 z-30 px-3 pb-2.5 pt-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress bar */}
                <div
                  ref={progressRef}
                  className="w-full h-1 mb-2.5 bg-white/20 rounded-full cursor-pointer group/bar relative"
                  onClick={onProgressClick}
                  onTouchMove={onProgressTouch}
                >
                  {/* Filled track */}
                  <div
                    className="h-full bg-emerald-400 rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                  >
                    {/* Scrub handle */}
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md shadow-emerald-500/30 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Buttons row */}
                <div className="flex items-center gap-2.5">
                  {/* Play / Pause */}
                  <button
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white hover:text-emerald-400 transition-colors flex-shrink-0"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>

                  {/* Timestamp */}
                  <span className="text-[11px] sm:text-xs text-white/60 font-mono tabular-nums flex-shrink-0">
                    {formatTime(currentTime)}&nbsp;/&nbsp;{formatTime(duration)}
                  </span>

                  <div className="flex-1" />

                  {/* Volume slider — desktop only */}
                  <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                    <button
                      aria-label={isMuted ? "Unmute" : "Mute"}
                      className="w-5 h-5 text-white/60 hover:text-white transition-colors"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={onVolumeChange}
                      className="w-20 h-1 accent-emerald-400 cursor-pointer"
                    />
                  </div>

                  {/* Mute-only on mobile */}
                  <button
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="sm:hidden w-6 h-6 text-white/60 hover:text-white transition-colors flex-shrink-0"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
                  </button>

                  {/* Fullscreen */}
                  <button
                    aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                    className="w-6 h-6 text-white/60 hover:text-white transition-colors flex-shrink-0"
                    onClick={toggleFullscreen}
                  >
                    {isFullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoWalkthrough;
