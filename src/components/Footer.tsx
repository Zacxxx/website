import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileText, Info, Clock, LucideIcon } from 'lucide-react';
import UserStatistics from './UserStatistics';
import AnimationEasterEgg from './AnimationEasterEgg';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  tooltip: string;
}

const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com", tooltip: "Suivez-nous sur GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/moebius-coordination/", tooltip: "Connectez-nous sur LinkedIn" },
  { icon: Twitter, href: "https://x.com/adrianachechik?lang=fr", tooltip: "Suivez-nous sur Twitter" },
  { icon: FileText, href: "/whitepaper.pdf", tooltip: "Téléchargez notre Whitepaper" },
];

interface AnimatedIconProps {
  icon: LucideIcon;
  href: string;
  tooltip: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon: Icon, href, tooltip }) => (
  <motion.div className="relative group">
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
    >
      <Icon size={16} />
    </motion.a>
    <motion.span
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ fontSize: '0.6rem' }}
    >
      {tooltip}
    </motion.span>
  </motion.div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center text-xs">
          <UserStatistics />

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">© 2024 Moebius Coordination</span>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <AnimatedIcon key={index} {...link} />
              ))}
            </div>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <Info size={14} className="mr-1" />
              <span style={{ fontSize: '0.7rem' }}>En savoir plus</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <Clock size={14} className="mr-1" />
              <span style={{ fontSize: '0.7rem' }}>Temps restant</span>
            </a>
          </div>

          <AnimationEasterEgg />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
