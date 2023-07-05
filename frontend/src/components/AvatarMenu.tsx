"use client"
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { carrotIcon, writeSmallIcon, profileIcon, librabryIcon } from "../../public/icons/icons";
import defaultImage from "../../public/images/profile.png"
import Image from "next/image";
import User from "@/types/user/User";
import Avatar from "./Avatar";
import { titleToUrl } from "@/util/titleToUrl";
import { signOut, useSession } from "next-auth/react";


export default async function AvatarMenu() {

    const currentUser = useSession().data?.user

    if (currentUser)
        var user: User = await fetch(`http://localhost:8080/api/v1/users/${currentUser?.userId}`).then(res => res.json())

    return user ? (
        <AuthMenu avatar={user?.image} username={user.username} email={user.email} userId={user.userId} logout={signOut} />
    ) : (
        <UnAuthMenu />
    )
}
function UnAuthMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (
        event: MouseEvent<HTMLImageElement | HTMLSpanElement>
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="flex items-center gap-3">
            <Image
                onClick={handleClick}
                width={40}
                height={40}
                className="rounded-full border border-gray-300 cursor-pointer"
                src={defaultImage}
                alt="resim"
            />
            <span
                onClick={handleClick}
                className="text-gray-500 cursor-pointer"
            >
                {carrotIcon}
            </span>
            <Menu
                PaperProps={{
                    className: "w-64 py-2 px-4 rounded-md mt-2",
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <GetStarted />
            </Menu>
        </div>


    );
}

function AuthMenu({
    avatar,
    email,
    username,
    userId,
    logout,
}: {
    avatar: string;
    username: string
    email: string;
    userId: number;
    logout(): void;
}) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLImageElement | HTMLSpanElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="avatar flex flex-row items-center">
            <Avatar userId={userId} username={username} image={avatar} />
            <span
                onClick={handleClick}
                className="text-gray-500 cursor-pointer"
            >
                {carrotIcon}
            </span>

            <Menu
                PaperProps={{
                    style: {
                        width: 240,
                        padding: "10px 0",
                        borderRadius: "4px",
                        marginTop: "10px",
                    },
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Link href={`/users/${userId}`}>
                    <MenuItem
                        onClick={handleClose}
                        className="flex flex-row items-center px-4 py-2 hover:bg-transparent"
                    >
                        <span className="text-gray-400">{profileIcon}</span>
                        <p className="ml-2 text-gray-600 text-sm">Profile</p>
                    </MenuItem>
                </Link>
                <Link href="/posts/write">
                    <MenuItem
                        onClick={handleClose}
                        className="flex flex-row items-center px-4 py-2 hover:bg-transparent"
                    >
                        <span className="text-gray-400">{writeSmallIcon}</span>
                        <p className="ml-2 text-gray-600 text-sm">Write Story</p>
                    </MenuItem>
                </Link>
                <Link href={"/"}>
                    <MenuItem
                        onClick={handleClose}
                        className="flex flex-row items-center px-4 py-2 hover:bg-transparent"
                    >
                        <span className="text-gray-400">{librabryIcon}</span>
                        <p className="ml-2 text-gray-600 text-sm">Library</p>
                    </MenuItem>
                </Link>
                <Divider sx={{ margin: "10px 0" }} />
                <MenuItem
                    onClick={() => {
                        handleClose();
                        logout();
                    }}
                    className="flex flex-col items-start px-6"
                >
                    <p className="text-gray-600 text-sm mt-2 mb-1">Sign out</p>
                    <span className="text-gray-400 text-xs">{email}</span>
                </MenuItem>
            </Menu>
        </div>
    );
}




export function GetStarted({
    style,
    topStyle,
}: {
    style?: object;
    topStyle?: object;
}) {
    return (
        <div className="flex flex-col items-center gap-4 pb-4 pt-3" style={style}>
            <p className="mb-5" style={topStyle}>
                Get started on Medium
            </p>
            <Link
                href="/auth/register"
                className="bg-green-600 text-white rounded-lg py-2 px-3 text-sm w-44 text-center"
            >
                Sign up
            </Link>
            <Link
                href="/auth/login"
                className="border-gray-300 border rounded-lg py-2 px-3 text-gray-500 text-sm w-44 text-center"
            >
                Sign In
            </Link>
        </div>
    );
}