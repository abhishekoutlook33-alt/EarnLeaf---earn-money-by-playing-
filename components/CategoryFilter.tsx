import React from 'react';
import { LayoutGrid, FileText, Target } from 'lucide-react';
import { Category } from '../types';

interface Props {
  activeCategory: Category;
  setCategory: (c: Category) => void;
}

const CategoryFilter: React.FC<Props> = ({ activeCategory, setCategory }) => {
  const tabs: { id: Category; icon: any; label: string }[] = [
    { id: 'All', icon: LayoutGrid, label: 'All' },
    { id: 'Surveys', icon: FileText, label: 'Surveys' },
    { id: 'Games', icon: Target, label: 'Games' },
  ];

  return (
    <div className="w-full mb-8 sticky top-16 z-40 bg-background/95 backdrop-blur-xl py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:static sm:bg-transparent">
      <div className="overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex space-x-2 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id)}
                className={`
                  relative py-2.5 px-5 rounded-xl flex items-center justify-center transition-all duration-300 font-medium text-sm sm:text-base border
                  ${isActive 
                    ? 'bg-primary-600/10 border-primary-500/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                    : 'bg-background-lighter/50 border-gray-800 text-gray-400 hover:text-gray-200 hover:bg-background-lighter hover:border-gray-700'}
                `}
              >
                <div className="flex items-center space-x-2 relative z-10">
                  <tab.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-primary-400' : ''}`} />
                  <span>{tab.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;