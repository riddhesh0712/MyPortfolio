import React from 'react'
// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Description for project 1.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 2',
      description: 'Description for project 2.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 3',
      description: 'Description for project 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 4',
      description: 'Description for project 4.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    
  ];

export const PortfolioCards = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 bg-">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-secondaryColor p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img className="w-full h-32 object-cover rounded-t-lg" src={item.imageUrl} alt={item.title} />
            <div className="p-2">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{truncateText(item.description, 10)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
