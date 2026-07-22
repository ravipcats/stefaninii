import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#clients", label: "Clients" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "https://www.crm.p.p-cats.co.in", label: "All-In-One Portal" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* Accent Strip */}
      <div className="h-1 bg-blue-600" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between border-b border-gray-200">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/favicon.png" alt="PCATS" className="h-9" />
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-gray-900">

          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="ripple px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 border border-gray-300 rounded-md flex flex-col items-center justify-center gap-1"
          aria-label="Menu"
        >
          <span className={`w-5 h-[2px] bg-gray-900 transition ${open && "rotate-45 translate-y-1.5"}`} />
          <span className={`w-5 h-[2px] bg-gray-900 transition ${open && "opacity-0"}`} />
          <span className={`w-5 h-[2px] bg-gray-900 transition ${open && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80 border-b border-gray-200" : "max-h-0"
          }`}
      >
        <nav className="px-6 py-4 space-y-4 bg-gray-50">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-800"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-center mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ripple"
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
