import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
        CheckBadgeIcon,
        RectangleStackIcon,
        HomeIcon,
        BoltIcon,
        MagnifyingGlassIcon,
        UserIcon,
} from '@heroicons/react/24/outline'
function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='Home' Icon={HomeIcon} />
            <HeaderItem title='Trending' Icon={BoltIcon} />
            <HeaderItem title='Verified' Icon={CheckBadgeIcon} />
            <HeaderItem title='Collection' Icon={RectangleStackIcon} />
            <HeaderItem title='Search' Icon={ MagnifyingGlassIcon} />
            <HeaderItem title='Account' Icon={UserIcon} />
        </div>
        <Image className='object-contain'
        src='https://logolook.net/wp-content/uploads/2021/08/Hulu-Logo.svg' width={100} height={100}
        />
    </header>
  )
}

export default Header