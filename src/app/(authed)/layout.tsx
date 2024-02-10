interface ILayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: ILayoutProps) {
    return (
        <>
            {/* logic to load auth component or load the authed routes */}
            <div className="">{children}</div>
        </>
    );
}
