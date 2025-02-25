import TrendingTopics from './TrendingTopic';
import Headlines from './Headlines';
import FeaturedArticle from './FeaturedArticle';
import { useState } from 'react';

export default function Trending() {
  const [activeTab, setActiveTab] = useState('Trending');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-15">
          <div className="lg:col-span-2">
            
            <TrendingTopics />
            <Headlines />
            <button className="w-full py-2 text-gray-600 hover:text-gray-800 bg-[#d9964b]">
              Load More
            </button>
          </div>
          <div className="lg:col-span-1">
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === 'Trending' ? 'bg-[#d9964b]' : ''
                }`}
                onClick={() => setActiveTab('Trending')}
              >
                Trending
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === 'Personalized' ? 'bg-[#d9964b]' : ''
                }`}
                onClick={() => setActiveTab('Personalized')}
              >
                Personalized
              </button>
            </div>
            <FeaturedArticle />
          </div>
        </div>
       

    )
        
}
