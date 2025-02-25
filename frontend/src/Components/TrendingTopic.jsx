import React from 'react'

const TrendingTopics = () => {
  const topics = ['AI', 'ClimateChange', 'Olympics']

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Trending Topics</h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="px-4 py-1 bg-[#d9964b] rounded-full text-sm"
          >
            #{topic}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrendingTopics