import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Brain, Code, Rocket, BarChart2, Users, BookOpen, LucideIcon } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  cta: string;
}

interface ServiceCategory {
  title: string;
  icon: LucideIcon;
  services: ServiceFeature[];
}

const ServiceCard: React.FC<ServiceFeature> = ({ title, description, icon: Icon, features, cta }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between transition-all duration-300"
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <Icon className="w-12 h-12 text-blue-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300"
        whileHover={{ backgroundColor: "#2c5282" }}
        animate={{ width: isHovered ? "100%" : "auto" }}
      >
        {cta} <ArrowRight className="ml-2" />
      </motion.button>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Intelligence Artificielle",
      icon: Brain,
      services: [
        {
          title: "Consulting en IA",
          description: "Nous offrons des conseils spécialisés en intelligence artificielle.",
          icon: Zap,
          features: ["Analyse des besoins", "Développement sur mesure", "Support continu"],
          cta: "Commander",
        },
        // Ajoutez d'autres services ici
      ],
    },
    // Ajoutez d'autres catégories ici
  ];

  return (
    <div className="flex flex-col space-y-8 p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            {serviceCategories.map((category, index) => (
              <div key={index} className="mb-4">
                <category.icon className="w-8 h-8 text-blue-500 mb-2" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            ))}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
              Commander
            </button>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCategories.flatMap((category) =>
            category.services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Décrire votre besoin à l'IA :</h2>
        <p className="text-gray-600 mb-4">
          Ici on fait une interface de chat avec une IA qui sera connectée au backend et qui permettra de faire la recherche des besoins des clients.
        </p>
        <textarea className="w-full h-32 p-4 border border-gray-300 rounded-lg" placeholder="Décrivez votre besoin ici..."></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Prendre contact</h3>
          <p className="text-gray-600 mb-4">
            Avec des boutons pour ouvrir des formulaires de prise de contact.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Contactez-nous
          </button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Demande de partenariat</h3>
          <p className="text-gray-600 mb-4">
            Moebius est toujours heureux d'étendre son réseau de partenaires. Ouvre un formulaire de demande de partenariat.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Demande de partenariat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
