import { Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/bss-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BSS Logo" className="h-10 w-10" />
              <div>
                <div className="font-bold text-lg">Business Speaker Series</div>
                <div className="text-sm opacity-90">University of Alberta</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Connecting students with industry leaders to inspire and educate the next generation of business professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="/team" className="opacity-80 hover:opacity-100 transition-opacity">Team</a></li>
              <li><a href="/events" className="opacity-80 hover:opacity-100 transition-opacity">Events</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@bss.com"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-80">
              Email: contact@bss.ualberta.ca
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Business Speaker Series. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
