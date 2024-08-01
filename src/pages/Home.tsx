import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GradientBox = ({ children }) => {
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-6 rounded-lg shadow-lg mb-6"
      style={{
        background: `linear-gradient(${gradientAngle}deg, #4a9fd8, #83d0cb, #48bb78)`,
        transition: 'background 0.5s ease'
      }}
    >
      {children}
    </div>
  );
};

const AnimatedEmoji = ({ emoji, delay = 0 }) => (
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.2, 1] }}
    transition={{ duration: 0.5, delay }}
    className="text-4xl inline-block mr-2"
  >
    {emoji}
  </motion.span>
);

const TurtleAnimation = () => {
  const [frame, setFrame] = useState(0);
  const frames = [
    '🐢    🐢',
    '🐢   🐢',
    '🐢  🐢',
    '🐢 🐢',
    '🐢🐢',
    '💕',
    '🐢🐢',
    '🐢 🐢',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-6xl flex items-center justify-center h-40 border-4 border-green-500 rounded-lg p-4 bg-gradient-to-r from-blue-100 to-green-100">
      {frames[frame]}
    </div>
  );
};

const SliderAnimation = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden mt-4">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
        style={{ width: `${position}%`, transition: 'width 0.5s ease-in-out' }}
      />
    </div>
  );
};

const Home = () => (
  <div className="flex flex-col space-y-8 p-8">
    <motion.h1
      className="text-4xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Bienvenue chez Moebius Coordination
    </motion.h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <GradientBox>
        <h2 className="text-2xl font-semibold mb-4 text-white">Notre Expertise</h2>
        <p className="text-lg text-white mb-4">
          Moebius Coordination, fondée le 26 juin 2024, est une SAS innovante spécialisée dans :
        </p>
        <ul className="list-disc list-inside text-white space-y-2">
          <li><AnimatedEmoji emoji="🤖" /> Consulting en Intelligence Artificielle</li>
          <li><AnimatedEmoji emoji="🎓" delay={0.1} /> Formation et Éducation</li>
          <li><AnimatedEmoji emoji="💻" delay={0.2} /> Développement de Solutions Technologiques</li>
          <li><AnimatedEmoji emoji="🚀" delay={0.3} /> Production de Produits Innovants</li>
          <li><AnimatedEmoji emoji="🔬" delay={0.4} /> Participation à des Initiatives de Recherche</li>
          <li><AnimatedEmoji emoji="📊" delay={0.5} /> Gestion et Coordination de Projets</li>
        </ul>
      </GradientBox>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Notre Approche Collaborative</h2>
        <TurtleAnimation />
        <p className="text-lg mt-4 text-center">
          Comme ces tortues amicales, chez Moebius Coordination, nous croyons en la puissance de la collaboration et de l'harmonie.
        </p>
      </div>

      <GradientBox>
        <h2 className="text-2xl font-semibold mb-4 text-white">Notre Philosophie</h2>
        <p className="text-lg text-white">
          Nommée d'après le ruban de Möbius, notre approche de résolution de problèmes est multidimensionnelle et continue. Nous trouvons des solutions uniques là où d'autres voient des impasses. Notre équipe d'experts allie des compétences diverses en technologie, logistique et planification stratégique pour assurer une coordination sans faille, même pour les projets les plus complexes.
        </p>
        <SliderAnimation />
      </GradientBox>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Nos Fondateurs</h2>
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Zachari Pinson-Tilche</h3>
            <p>Président, né le 26 décembre 1997 à Rennes</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Tristan Salles</h3>
            <p>Directeur Général, né le 23 mai 2002 à St-Jean</p>
          </div>
        </div>
      </div>
    </div>

    <GradientBox>
      <h2 className="text-2xl font-semibold mb-4 text-white">Notre Vision</h2>
      <p className="text-lg text-white">
        Chez Moebius Coordination, nous croyons que chaque problème a une solution - ce n'est qu'une question de perspective. Notre objectif est de révolutionner la façon dont les entreprises abordent les défis complexes, en utilisant l'IA et des méthodologies innovantes pour créer des solutions sur mesure qui propulsent nos clients vers l'avant.
      </p>
    </GradientBox>

    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <p className="text-xl font-semibold">Rejoignez-nous dans cette aventure passionnante !</p>
      <p className="text-lg mt-2">Siège social : 148 Allée de Barcelone, 31000, Toulouse</p>
      <p className="text-lg">Capital social : 2€ (en cours d'augmentation)</p>
    </motion.div>
  </div>
);

export default Home;