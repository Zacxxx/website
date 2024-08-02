import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeftCircle, ArrowRightCircle, Brain, Book, Code, Rocket, BarChart2, Cloud, Shield, Cpu, Globe, Smartphone, Database } from 'lucide-react';
import SearchBar from './SearchBar';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  category?: string;
  details: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA sur mesure pour votre entreprise",
    features: ["Analyse prédictive", "Chatbots intelligents", "Optimisation des processus"],
    category: "IA",
    details: "Découvrez nos solutions d'intelligence artificielle, conçues pour optimiser vos processus et prendre des décisions plus éclairées. Nous offrons des services de pointe en matière d'analyse prédictive, de chatbots intelligents et d'automatisation des tâches."
  },
  {
    icon: Book,
    title: "Formation Avancée",
    description: "Programmes de formation en technologies de pointe",
    features: ["Cours en ligne interactifs", "Ateliers pratiques", "Certifications reconnues"],
    category: "Formation",
    details: "Développez vos compétences avec nos programmes de formation de pointe. Nous proposons des cours en ligne interactifs, des ateliers pratiques et des certifications reconnues par l'industrie. Améliorez vos connaissances et votre expertise dans les domaines clés de la technologie."
  },
  {
    icon: Code,
    title: "Développement Agile",
    description: "Création d'applications web et mobiles innovantes",
    features: ["Développement full-stack", "Applications réactives", "Intégrations API avancées"],
    category: "Développement",
    details: "Confiez-nous vos projets de développement web et mobile. Notre équipe d'experts utilise les méthodologies agiles pour créer des applications innovantes, performantes et intuitives. Nous vous accompagnons à chaque étape, de la conception à la mise en production."
  },
  {
    icon: Rocket,
    title: "Gestion de Projets Innovants",
    description: "Pilotage efficace de projets technologiques complexes",
    features: ["Méthodologies agiles", "Outils collaboratifs", "Suivi en temps réel"],
    category: "Gestion",
    details: "Optimisez la gestion de vos projets technologiques avec nos solutions de pointe. Nous mettons en œuvre des méthodologies agiles, des outils collaboratifs et un suivi en temps réel pour assurer le succès de vos projets. Faites confiance à notre expertise pour une gestion de projet efficace."
  },
  {
    icon: BarChart2,
    title: "Analyse de Données Avancée",
    description: "Insights puissants à partir de vos Big Data",
    features: ["Machine Learning", "Visualisation interactive", "Prédictions précises"],
    category: "Analyse",
    details: "Extrayez des insights précieux de vos données avec nos solutions d'analyse de données avancées. Nous utilisons le machine learning, la visualisation interactive et des algorithmes prédictifs pour vous aider à prendre des décisions éclairées et à optimiser vos stratégies."
  },
  {
    icon: Cloud,
    title: "Solutions Cloud",
    description: "Infrastructure cloud évolutive et sécurisée",
    features: ["Migration cloud", "Architectures serverless", "Optimisation des coûts"],
    category: "Infrastructure",
    details: "Profitez de l'agilité et de la flexibilité du cloud avec nos solutions d'infrastructure cloud. Nous vous aidons à migrer vos applications, à concevoir des architectures serverless et à optimiser vos coûts. Faites confiance à notre expertise pour une infrastructure cloud performante et sécurisée."
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection avancée contre les menaces numériques",
    features: ["Audit de sécurité", "Cryptage de données", "Gestion des accès"],
    category: "Sécurité",
    details: "Protégez vos données et vos systèmes contre les menaces numériques avec nos solutions de cybersécurité. Nous effectuons des audits de sécurité, mettons en place des systèmes de cryptage robustes et gérons les accès pour garantir la sécurité de votre infrastructure."
  },
  {
    icon: Cpu,
    title: "IoT & Edge Computing",
    description: "Solutions innovantes pour l'Internet des Objets",
    features: ["Capteurs intelligents", "Analyse en temps réel", "Automatisation avancée"],
    category: "IoT",
    details: "Exploitez le potentiel de l'Internet des Objets avec nos solutions IoT et Edge Computing. Nous intégrons des capteurs intelligents, effectuons des analyses en temps réel et automatisons les processus pour vous aider à optimiser vos opérations et à développer de nouvelles opportunités."
  },
  {
    icon: Globe,
    title: "Transformation Digitale",
    description: "Accompagnement global pour votre transition numérique",
    features: ["Stratégie digitale", "Refonte des processus", "Culture d'innovation"],
    category: "Stratégie",
    details: "Faites évoluer votre entreprise vers le numérique avec notre accompagnement global en transformation digitale. Nous développons des stratégies digitales personnalisées, refondons vos processus et promouvons une culture d'innovation pour vous aider à réussir dans l'ère numérique."
  },
  {
    icon: Smartphone,
    title: "Expérience Utilisateur (UX)",
    description: "Création d'interfaces intuitives et engageantes",
    features: ["Design centré utilisateur", "Tests d'utilisabilité", "Prototypage rapide"],
    category: "Design",
    details: "Offrez à vos utilisateurs une expérience digitale exceptionnelle avec nos services UX. Nous créons des interfaces intuitives et engageantes en appliquant des méthodes de design centré utilisateur, des tests d'utilisabilité et un prototypage rapide. Améliorez la satisfaction de vos utilisateurs et la performance de vos produits."
  },
  {
    icon: Database,
    title: "Gestion de Données",
    description: "Solutions de gestion et d'analyse de données massives",
    features: ["Data Warehousing", "ETL avancé", "Gouvernance des données"],
    category: "Données",
    details: "Gérez et exploitez vos données de manière efficace avec nos solutions de gestion de données. Nous mettons en place des infrastructures de Data Warehousing, des processus ETL avancés et des solutions de gouvernance des données pour vous aider à extraire des insights précieux et à prendre des décisions éclairées."
  }
];

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, description, features, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 w-60 h-64 flex flex-col justify-between overflow-hidden"
      whileHover={{ scale: 1.0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-500 mb-2" />
        <h3 className="text-sm font-bold mb-1">{title}</h3>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
      </div>
      <ul className="space-y-1 text-xs overflow-auto no-scrollbar flex-grow">
        {features.slice(0, 2).map((feature, index) => (
          <li key={index} className="flex items-center">
            <ArrowRight className="w-3 h-3 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-2 bg-blue-500 text-white px-2 py-1 text-xs rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center" onClick={toggleDetails}>
        {showDetails ? 'Masquer les détails' : 'En savoir plus'} <ArrowRight className="ml-1 w-3 h-3" />
      </button>
      {showDetails && (
        <div className="mt-2 text-xs text-gray-600 overflow-auto no-scrollbar">{details}</div>
      )}
    </motion.div>
  );
};

const ServiceCarousel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : services;

  const scrollContainer = React.createRef<HTMLDivElement>();

  const handleScrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -scrollContainer.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: scrollContainer.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-12 relative">
      <div className="flex items-center mb-4 justify-center">
        <SearchBar />
        <div className="relative ml-4">
          <button
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-600"
            onClick={() => setSelectedCategory(null)}
          >
            Tous
          </button>
          <div className="absolute top-full left-0 w-48 bg-white shadow-md rounded-md mt-1 z-10 hidden" id="categoryDropdown">
            {['IA', 'Formation', 'Développement', 'Gestion', 'Analyse', 'Infrastructure', 'Sécurité', 'IoT', 'Stratégie', 'Design', 'Données'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md w-full hover:bg-gray-100`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <button
          onClick={handleScrollLeft}
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          <ArrowLeftCircle className="w-8 h-8" />
        </button>
        <div ref={scrollContainer} className="flex space-x-6 overflow-x-auto pb-6 no-scrollbar">
          {filteredServices.slice(0, 5).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          <ArrowRightCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;