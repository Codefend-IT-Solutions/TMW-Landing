import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'

const DISCORD_LINK = 'https://discord.gg/RpZdhq2Tn5' 

const DiscordIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.15.1 18.15.11 18.176a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Performance', href: '#performance' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Who Is It For', href: '#who-is-this-for' },
  { label: 'Join', href: '#join' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    // Smooth scroll to section
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      {/* Main bar */}
      <div className="max-w-6xl mx-auto glass backdrop-blur-xl rounded-2xl px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg flex items-center justify-center glow-emerald-sm flex-shrink-0" />
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">TMW</span>
            <span className="text-gray-300"> Discord</span>
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-join-btn"
            className="btn-emerald text-white font-semibold text-sm px-5 py-2.5 rounded-xl hidden sm:flex items-center gap-2"
          >
            <DiscordIcon className="w-4 h-4" />
            Join Free
          </a>

          {/* Hamburger — mobile only */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl glass text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
          >
            {menuOpen ? (
              /* X icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden max-w-6xl mx-auto mt-2 glass rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-join-btn"
            onClick={() => setMenuOpen(false)}
            className="btn-emerald text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 mt-2"
          >
            <DiscordIcon className="w-4 h-4" />
            Join Free Discord
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
export { DISCORD_LINK }
