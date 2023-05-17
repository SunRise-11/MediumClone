"use strict";
import React, { useState } from "react";
import { mediumLogo, searchIcon } from "../../public/icons/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Search: React.FC<Props> = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query) {
            const q = query;
            setQuery("");
            router.push(`search/${q}`);
        }
    };

    return (
        <div className="flex space-x-3">
            <Link href={"/"}  >{mediumLogo}</Link>
            <div className="flex items-center space-x-2 relative bg-gray-100 rounded-3xl px-2 py-1 text-sm text-gray-500 ">
                <div className="cursor-pointer">{searchIcon}</div>
                <input
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Medium"
                    className="bg-gray-100 py-2 px-2 flex focus:outline-none"
                >
                </input>
            </div>
        </div>
    );
};

export default Search;
