import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/20/solid';
import GitHubIcon from './github.svg'

export default function Footer () {
    return (
        <div className='my-4 mb-7 py-4 border-t-2 border-emerald-700'>
        <p className='float-left'><Link className="underline" href="https://github.com/ethan-arrowood"><Image src={GitHubIcon} alt="GitHub Logo icon"></Image></Link></p>
        <p className='float-right inline-flex items-center'>Made with <HeartIcon className='inline-block w-5 h-5 mx-1'/> by Ethan</p>
      </div>
    )
}