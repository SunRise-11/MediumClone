import AuthNavbar from "@/components/AuthNavbar"
import AccountProfile from "./AccountProfile"


export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="md:divide-x-[1px]">
            <AuthNavbar />
            {children}
            <AccountProfile />
        </div>
    )
}
