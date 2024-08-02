import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface AnimatedEmojiProps {
  emoji: string;
  delay?: number;
}

interface GradientSectionProps {
  children: React.ReactNode;
  colors: string[];
}

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({ emoji, delay = 0 }) => (
  <motion.span
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.5, delay, type: 'spring', stiffness: 260, damping: 20 }}
    className="text-6xl inline-block mr-2"
  >
    {emoji}
  </motion.span>
);

const GradientSection: React.FC<GradientSectionProps> = ({ children, colors }) => (
  <div
    className="p-6 rounded-lg shadow-lg mb-8"
    style={{
      background: `linear-gradient(45deg, ${colors.join(', ')})`,
    }}
  >
    {children}
  </div>
);

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Redbull Consumed',
      data: [200, 450, 300, 500, 700, 900],
      fill: false,
      borderColor: '#FF6B6B',
      backgroundColor: '#FF6B6B',
    },
    {
      label: 'Lines of Code Written',
      data: [15, 67, 134, 268, 556, 667],
      fill: false,
      borderColor: '#4ECDC4',
      backgroundColor: '#4ECDC4',
    },
          {
      label: 'Hoes Delivered',
      data: [850, 720, 640, 500, 300, 150],
      fill: false,
      borderColor: '#704ecd',
      backgroundColor: '#704ecd',
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const Info: React.FC = () => (
  <div className="flex flex-col space-y-12 p-8 max-w-4xl mx-auto">
    <motion.h1
      className="text-4xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      L'Histoire de Moebius Coordination
    </motion.h1>

    <GradientSection colors={['#FF6B6B', '#4ECDC4']}>
      <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
        <AnimatedEmoji emoji="💡" />
        La Conception du Projet
      </h2>
      <p className="text-lg text-white">
        Tout a commencé par une discussion passionnée entre Zachari et Tristan, deux esprits entrepreneuriaux animés par une vision commune. Autour d'un café, ils ont imaginé une entreprise qui allierait technologie de pointe et coordination de projets innovants. Moebius Coordination est née de cette synergie, symbolisant leur volonté de créer des solutions sans fin, à l'image du ruban de Möbius.
      </p>
    </GradientSection>

    <GradientSection colors={['#45B7D1', '#F2C94C']}>
      <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
        <AnimatedEmoji emoji="🎢" delay={0.2} />
        La Prise de Risque
      </h2>
      <p className="text-lg text-white">
        Bien qu'ils n'aient pas quitté leurs emplois respectifs, Zachari et Tristan ont consacré leur temps libre à développer Moebius Coordination. Leur persévérance et leur foi inébranlable dans le projet ont été les moteurs de leur succès.
      </p>
    </GradientSection>

    <GradientSection colors={['#9D50BB', '#6E48AA']}>
      <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
        <AnimatedEmoji emoji="🌐" delay={0.4} />
        Expansion Globale
      </h2>
      <p className="text-lg text-white">
        Grâce à des partenariats stratégiques et à une innovation constante, Moebius Coordination s'est rapidement étendue à l'international. Tristan et Zachari ont su attirer les meilleurs talents et établir des collaborations fructueuses avec des leaders de l'industrie.
      </p>
    </GradientSection>

    <GradientSection colors={['#FF6F61', '#DE1A1A']}>
      <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
        <AnimatedEmoji emoji="🚀" delay={0.6} />
        L'Avenir
      </h2>
      <p className="text-lg text-white">
        Aujourd'hui, Moebius Coordination continue de se développer et d'innover, avec de nombreux projets prometteurs en cours. Tristan Salles et Zachari Pinson-Tilche restent à la tête de l'entreprise, guidés par leur passion et leur détermination à repousser les limites de ce qui est possible.
      </p>
    </GradientSection>

    <GradientSection colors={['#00C9FF', '#92FE9D']}>
      <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
        <AnimatedEmoji emoji="🏆" delay={0.8} />
        Récompenses et Reconnaissances
      </h2>
      <p className="text-lg text-white">
        Sous la direction de Tristan Salles et Zachari Pinson-Tilche, Moebius Coordination a reçu de nombreuses récompenses et distinctions pour son excellence en innovation et en gestion de projet. Leur vision et leur leadership ont été largement reconnus par leurs pairs et par les institutions du secteur.
      </p>
    </GradientSection>

    <div className="relative h-64 w-full">
      <Line data={lineChartData} options={lineChartOptions} />
    </div>

    <div className="text-center mt-12">
      <button
onClick={() => alert('🎉 Merci d\'avoir visité notre site! 🎉\n\nSi on se voit IRL, dit moi "Oulala il est beau le lutin" et je t\'offre un verre ! 🍾\n\n- Zach')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Cliquez-moi pour un secret!
      </button>
    </div>
  </div>
);

export default Info;
