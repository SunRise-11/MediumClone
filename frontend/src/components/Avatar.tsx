import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import defaultImage from "../../../frontend/public/images/profile.png"

interface AvatarProps {
    username: string;
    image?: string
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean
    hasBorder?: boolean;

}

const Avatar: React.FC<AvatarProps> = ({ username, image, isLarge, hasBorder, isMedium, isSmall }) => {
    const router = useRouter();

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${username}`;

        router.push(url);
    }, [router, username]);


    const handleImageSize = () => {
        if (isLarge && !isMedium) {
            return { w: 90, h: 90 }
        } else if (isMedium && !isLarge) {
            return { w: 40, h: 40 }
        } else if (isSmall) {
            return { w: 25, h: 25 }
        }
        return { w: 30, h: 30 }
    }

    return (
        <div
            className={`
        ${hasBorder ? 'border-2 border-black' : ''}
        ${isLarge ? 'h-28' : 'h-12'}
        ${!isLarge && isMedium ? 'h-20' : 'h-12'}
        ${isLarge ? 'w-28' : 'w-12'}
        ${isSmall ? "w-20" : "h-5"}
        hover:opacity-90 
        transition 
        cursor-pointer
        flex justify-center items-center
      `}
        >
            <Image
                className="rounded-full"
                width={handleImageSize().w}
                height={handleImageSize().h}
                alt="Avatar"
                onClick={onClick}
                src={image || defaultImage.src}
            />
        </div>
    );
}

export default Avatar;