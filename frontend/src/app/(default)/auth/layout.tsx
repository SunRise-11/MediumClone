import UnAuthNavbar from "@/components/UnAuthNavbar"



export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div>
            <UnAuthNavbar />
            {children}
        </div>
    )
}
