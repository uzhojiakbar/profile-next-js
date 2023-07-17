"use client"
import React, { useState } from 'react'
import sty from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { profileInformation } from '@Mock/profile'

const Navbar = () => {
    return (
        <div className={sty.NavCon}>
            <div className={sty.links}>
                <Link className='link' href={'/settings'}>Settings</Link>
                <Link className='link' href={'/account'}>Account</Link>
                <Link className='link' href={'/message'}>Message</Link>
                <Link className='link' href={'/favourite'}>Favourite</Link>
            </div>
            <div className={sty.options} >
                <Image className='image' src={profileInformation.profile} />
            </div>
        </div>
    )
}

export default Navbar