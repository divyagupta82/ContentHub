import React from 'react'

const Headlines = () => {
  const headlines = [
    {
      title: 'AI Revolutionizes Tech Industry',
      description: 'Discover how AI is transforming the way we interact with technology...',
    },
    {
      title: 'Global Efforts to Combat Climate Change',
      description: 'Nations unite to address climate change challenges...',
    },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Top Headlines</h2>
      <div className="space-y-4">
        {headlines.map((headline) => (
          <div
            key={headline.title}
            className="p-4 bg-[#d9964b] rounded-lg cursor-pointer hover:bg-[#d9964b]"
          >
            <h3 className="font-bold mb-2">{headline.title}</h3>
            <p className="text-gray-600">{headline.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Headlines