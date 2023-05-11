"use client"
const TagFooter: React.FC = () => {
    let links = ["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Terms", "About", "Text to speech"];

    return (
        <div className="hidden md:block h-full md:w-[400px]">
            <div className="content mt-4">
                <ul className="texts flex text-zinc-400 items-center flex-wrap">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="text-sm px-2 py-1 text-gray-500">
                                {link}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TagFooter;
