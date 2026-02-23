import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Расписание", href: "#schedule" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Секции", href: "#sections" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sport-dark/95 backdrop-blur-sm border-b border-sport-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-sport-green text-2xl font-oswald font-bold tracking-wider">КОМСО<span className="text-white">МОЛЕЦ</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-sport-green transition-colors text-sm font-medium tracking-wide">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#schedule" className="hidden md:inline-flex items-center gap-2 bg-sport-green hover:bg-sport-green-light text-white px-5 py-2 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-green-500/30">
            Забронировать
          </a>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-sport-dark border-t border-sport-green/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-sport-green py-1 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#schedule" className="bg-sport-green text-white text-center px-4 py-2 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            Забронировать
          </a>
        </div>
      )}
    </nav>
  );
}