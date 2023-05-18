'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import defaultImage from '../../public/images/profile.png';
import { titleToUrl } from '@/util/titleToUrl';
import Link from 'next/link';

interface AvatarProps {
  username: string;
  image?: string | null;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
  hasBorder?: boolean;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  username,
  image,
  isLarge,
  hasBorder,
  isMedium,
  isSmall,
  width,
  height,
}) => {
  const [hasImageError, setHasImageError] = useState<boolean>(false);
  const name = titleToUrl(username);

  const handleImageSize = () => {
    if (isLarge) {
      return { w: 90, h: 90 };
    } else if (isMedium) {
      return { w: 40, h: 40 };
    } else if (isSmall) {
      return { w: 25, h: 25 };
    }
    return { w: 30, h: 30 };
  };

  return (
    <div
      className={`
        ${hasBorder ? 'border-2 border-black' : ''}
        ${isLarge ? 'h-28' : 'h-12'}
        ${isMedium ? 'h-20' : 'h-12'}
        ${isLarge ? 'w-28' : 'w-fit'}
        ${isSmall ? 'w-8' : 'h-8'}
        hover:opacity-90 
        transition 
        cursor-pointer
        flex
        items-center
      `}
    >
      <Link href={`/users/${name}`}>
        <Image
          className="rounded-full"
          width={width ? width : handleImageSize().w}
          height={height ? height : handleImageSize().h}
          alt="Avatar"
          src={hasImageError ? defaultImage.src : image || defaultImage.src}
          onError={() => setHasImageError(true)}
        />
      </Link>
    </div>
  );
};

export default Avatar;
