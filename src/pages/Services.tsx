import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users, MessageCircle } from 'lucide-react';
import ServiceCarousel from '../components/ServiceCarousel';
import ChatAI from '../components/ChatAI';
import { Contact, Partnership } from '../components/ContactPartnership';

const GlassBox: React.FC<{ children: React.ReactNode; icon: React.ElementType; title: string }> = ({ children, icon: Icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-xl"
    >
      <div className="absolute inset-0 bg-white bg-opacity-20 rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-50 rounded-xl" />
      <div className="relative p-6 z-10">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 mr-3 text-gray-800" />
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.h1
          className="text-5xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Services Innovants 🚀
        </motion.h1>

        <GlassBox icon={Sparkles} title="Explorez Nos Solutions">
          <ServiceCarousel />
        </GlassBox>

        <GlassBox icon={MessageCircle} title="Assistant IA à Votre Service 🤖">
          <ChatAI />
        </GlassBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassBox icon={Zap} title="Contactez-nous 📞">
            <Contact />
          </GlassBox>

          <GlassBox icon={Users} title="Devenez Partenaire 🤝">
            <Partnership />
          </GlassBox>
        </div>
      </div>
    </div>
  );
};

export default Services;
