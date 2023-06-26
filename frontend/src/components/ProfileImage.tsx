"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import defaultImage from "../../public/images/profile.png";

const ProfileImage: React.FC = () => {
    const [newImage, setNewImage] = useState<string | undefined>();
    let imageSource: string = defaultImage.src.toString();

    const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const fileReader = new FileReader();
       
        fileReader.onloadend = () => {
            setNewImage(fileReader.result?.toString());
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    const deleteProfileImage = () => {
        setNewImage(undefined);
    };

    imageSource = newImage || defaultImage.src.toString();
    return (
        <div className="header flex justify-between">
            <div className="left flex flex-col">
                <span className="text-[13px] md:text-sm text-gray-400 font-medium">Photo</span>
                <Image
                    src={imageSource}
                    width={100}
                    height={100}
                    unoptimized
                    alt="profile Image"
                    className="rounded-full cursor-pointer"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => (e.currentTarget.src = defaultImage.src)}
                    onClick={() => ((document.querySelector('input[type="file"]')) as HTMLElement)?.click()}
                />
                <input
                    type="file"
                    key={newImage}
                    onChange={(e) => onChangeFile(e)}
                    hidden
                />
            </div>
            <div className="right flex flex-col ml-8">
                <div className="top">
                    <button
                        className="text-[13px] md:text-sm text-[#1A8917]  mr-1"
                        onClick={() =>
                            ((document.querySelector('input[type="file"]')) as HTMLElement)?.click()
                        }
                    >
                        Update
                    </button>
                    <button
                        className="text-[13px] md:text-sm text-red-500 ml-1"
                        onClick={() => deleteProfileImage()}
                    >
                        Remove
                    </button>
                </div>
                <div className="bottom mt-6">
                    <span className="text-[13px] md:text-sm text-gray-500 font-medium">
                        Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                        side.
                    </span>
                </div>
            </div>
        </div >
    );
};

export default ProfileImage;
