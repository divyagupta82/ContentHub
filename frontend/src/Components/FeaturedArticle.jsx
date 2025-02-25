import React from 'react'
import image1 from '/src/assets/images/homeImg.png'
const FeaturedArticle = () => {
  return (
    <div className="bg-[#d9964b] rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Featured Article</h2>
      <div className="relative h-48 mb-4">
        <img
          src={image1}
          alt="Urban cityscape"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">The Future of Pop Music</h3>
      <p className="text-gray-700">
      She has a lot of different gifts as a songwriter, both at the macro level, how the song tells a story or presents an attitude, and at the micro level, how the vowels and consonants fit together, and she’s able to exercise that range, along with quite a lot of melodic gifts, and in a way that does not make her seem highbrow or alienate potential audience members. I would not be surprised to discover that her body of songwriting altogether had a larger number of words than any body of comparable hit songs by a comparable songwriter, except for someone like Bob Dylan.
      </p>
    </div>
  )
}

export default FeaturedArticle