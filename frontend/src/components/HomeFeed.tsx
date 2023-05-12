import Center from './Center';
import Hero from './Hero';
import PostList from './PostList';
import Tags from './Tags';
import Trending from './Trending';

const HomeFeed = (): JSX.Element => {
    return (
        <>
            <Hero />
            <Center>
                <Trending />
                <div className="relative flex flex-col lg:flex-row px-9 lg:px-20 lg:gap-x-[187px] my-16">
                    <div className="w-full lg:w-[65%] lg:max-w-[710px]">
                        <PostList />
                    </div>
                    <div className="flex flex-col w-full lg:w-[35%] order-first lg:order-last mt-12">
                        <div className="sticky top-20">
                            <Tags />
                        </div>
                    </div>
                </div>
            </Center>
        </>
    );
};

export default HomeFeed;
