
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Speak Africa</h3>
            <p className="text-gray-300 mb-4">
              Youth-led advocacy through storytelling, public speaking, and art to promote climate action, gender equity, and social justice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-lsa-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-lsa-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-lsa-gold transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-lsa-gold transition-colors">Our Impact</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-lsa-gold transition-colors">Get Involved</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-lsa-gold transition-colors">Visit Our Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs#storytelling-clubs" className="text-gray-300 hover:text-lsa-gold transition-colors">Environmental Storytelling Clubs</Link></li>
              <li><Link to="/programs#seven-days" className="text-gray-300 hover:text-lsa-gold transition-colors">7 Days of Environmental Action</Link></li>
              <li><Link to="/programs#voices" className="text-gray-300 hover:text-lsa-gold transition-colors">Voices for Her</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@letsspeakafrica.org</li>
              <li>Phone: +123 456 7890</li>
              <li>Lagos, Nigeria</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Facebook size={20} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Instagram size={20} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Let's Speak Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
