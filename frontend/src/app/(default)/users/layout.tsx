import AccountProfile from "./AccountProfile"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:divide-x-[1px]">
            {children}
            <AccountProfile />
        </div>
    )
}
