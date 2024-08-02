import React from 'react';

export const Contact: React.FC = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Nom</label>
      <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Message</label>
      <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows={4}></textarea>
    </div>
    <div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Envoyer
      </button>
    </div>
  </form>
);

export const Partnership: React.FC = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
      <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Proposition de partenariat</label>
      <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows={4}></textarea>
    </div>
    <div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Envoyer
      </button>
    </div>
  </form>
);
