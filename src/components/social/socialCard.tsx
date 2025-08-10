import Image from 'next/image'
import React, { FC } from 'react'
import { socialCard } from './socialCardsContainer'
import Link from 'next/link'

const SocialCard: FC<socialCard>= ({icon, platform, url, userId}) => {
  return (
    <div className="w-full  border-neutral-200 p-4 flex items-center mt-4">
        <Image src={icon} width={48} height={48} alt="" />
        <div className="ml-4 flex flex-1 flex-col">
            <h3 className="font-medium hover:underline-offset-4 hover:underline cursor-pointer">{platform}</h3>
            <p className="text-sm text-mute-foreground">{userId}</p>
        </div>
        <Link href={url}>
            <Image height={16} width={16} src={"/upRightArrow.svg"} className="" alt=""/>
        </Link>
    </div>
  )
}

export default SocialCard