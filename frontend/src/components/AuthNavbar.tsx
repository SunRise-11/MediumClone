"use client"
import React from 'react'
import Link from "next/link"
import { writeBlogIcon, searchIcon, mediumLogo } from '../../public/icons/icons'
import Search from './Search'
import AvatarMenu from './AvatarMenu'
type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className="h-14 border-b border-solid border-gray-200 flex flex-row items-center justify-between">
            <div className="left flex flex-row items-center gap-4 ml-4">
                <Search />
            </div>
            <div className="right flex flex-row items-center gap-8 h-full mr-6">
                <Link href="/write" className="writeBtn hidden md:flex  flex-row items-center gap-2 text-gray-500 no-underline">
                    <span className="text-gray-500">{writeBlogIcon}</span>
                    <p className="text-sm">Write</p>
                </Link>
                <AvatarMenu />
            </div>
        </nav>
    )
}