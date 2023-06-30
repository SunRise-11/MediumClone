import React from 'react'

type Props = {
    label: string,
}

export default function Chip({ label }: Props) {
    return (
        <button className='bg-gray-200 px-5 py-1 rounded-3xl hover:bg-gray-200 transition-transform ease-linear duration-200'>
            {label}
        </button>
    )
}