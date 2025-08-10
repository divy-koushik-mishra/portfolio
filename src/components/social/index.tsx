import React from 'react'
import SocialCardsContainer from './socialCardsContainer'
import DiagonalLineGradientBgFull from '../hero/diagonalLineGradientBgFull'

const SocialSection = () => {
    const socialItems = [
        {
            id: 1,
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/divy-koushik-mishra",
            userId: "divy-koushik-mishra",
            icon: "/linkedin.webp"
        },
        {
            id: 2,
            platform: "X",
            url: "https://x.com/divy_koushik",
            userId: "divy-koushik",
            icon: "/x.webp"
        },
        {
            id: 3,
            platform: "Instagram",
            userId: "divy.koushik.mishra",
            url: "https://www.instagram.com/divy.koushik.mishra/",
            icon: "/x.webp"
        },
        {
            id: 4,
            platform: "Github",
            url: "https://github.com/divy-koushik-mishra/",
            userId: "divy-koushik-mishra",
            icon: "/github.webp"
        },
    ]
  return (
    <section className="w-full flex justify-center flex-col items-center overflow-x-hidden">
        <SocialCardsContainer socialItems={socialItems} />
        <DiagonalLineGradientBgFull />
    </section>
  )
}

export default SocialSection