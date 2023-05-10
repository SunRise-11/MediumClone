import Image from 'next/image';
import Link from 'next/link';
import { trendingIcon } from '../../../public/icons/icons';
import { trendUsers } from '../store/index';

const Trending = () => {
  return (
    <div className={'w-full h-auto pt-[2.5rem] pb-[1rem]'}>
      <div className="content w-[80%] mx-auto">
        <div
          className={
            'font-Helvetica flex h-[1.9rem] leading-4 items-center mb-[1rem] flex-row'
          }
        >
          <p className="flex space-x-3 items-center">
            {trendingIcon}
            <span className="text-trend font-Helvetica font-semibold">
              Trending on Medium
            </span>
          </p>
        </div>
        <div className="posts grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {trendUsers.map((user, index) => {
            const { postName, time } = user;
            let i = index < 10 ? '0'.concat(index + 1) : index;
            return (
              <>
                <div className="trending-post leading-relaxed h-auto w-full mb-[1rem] space-x-2 flex content-start">
                  <div className="left h-full">
                    <span
                      span
                      className="text-4xl text-slate-300"
                    >
                      {i}
                    </span>
                  </div>
                  <div className="right flex w-full flex-col mt-3 gap-2">
                    <Link href="/users/schauf-bammer">
                      <div className="flex gap-3 items-center">
                        <Image
                          width={25}
                          height={30}
                          src="/images/Schauf-Bammer.jpg"
                          alt=""
                          className="rounded-full"
                        />
                        <p className="text-sm">Schauf Bammer</p>
                      </div>
                    </Link>
                    <div className="post-name w-full line-clamp-2 overflow-hidden text-trend ont-Helvetica font-Helvetica font-semibold">
                      {postName}
                    </div>
                    <span className="space-y-2 text-brefing text-xs font-normal">
                      {time}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Trending;
