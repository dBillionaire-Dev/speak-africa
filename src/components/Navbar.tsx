
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-poppins font-bold">
            Let's <span className="text-lsa-green">Speak</span> <span className="text-lsa-gold">Africa</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/get-involved">Get Involved</NavLink>
        </div>

        {/* Mobile Navigation Button */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/programs" onClick={toggleMenu}>Programs</MobileNavLink>
            <MobileNavLink to="/impact" onClick={toggleMenu}>Impact</MobileNavLink>
            <MobileNavLink to="/get-involved" onClick={toggleMenu}>Get Involved</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="font-medium text-gray-800 hover:text-lsa-green transition-colors py-2"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  onClick, 
  children 
}: { 
  to: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="font-medium text-gray-800 hover:text-lsa-green transition-colors py-2 border-b border-gray-100 w-full block"
    >
      {children}
    </Link>
  );
};

export default Navbar;
