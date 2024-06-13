import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitchFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"
import { Input } from './ui/input'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-12 xl:pt24 bg-primary text-white text-center'>
      <div className="container mx-auto mb-10">
        <div className="flex flex-col gap-8">
          <div className="">
          <h2 className="capitalize leading-tight mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/60">
            Be the first to get the latest news about trends, promotions, and much more!
          </p>
          </div>
          <form action="" className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your email address" className="h-[60px] rounded-none text-primary text-lg" />
            <button className="w-full xl:max-w-[150px] h-[60px] btn btn-accent">Subscribe</button>
          </form>
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-10">
            <Link href={""}>
              <RiYoutubeFill />
            </Link>
            <Link href={""}>
              <RiTwitterFill />
            </Link>
            <Link href={""}>
              <RiFacebookFill />
            </Link>
            <Link href={""}>
              <RiInstagramFill />
            </Link>
            <Link href={""}>
              <RiPinterestFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60">Copyright &copy; 2024 BIKER-NATION. All rights reserved.</div>
    </footer>
  )
}

export default Footer