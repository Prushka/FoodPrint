import "./globals.css";
import RecoilRootWrapper from "@/app/RecoilRootWrapper";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={"flex flex-col dark"}>
        <RecoilRootWrapper>
            {children}
        </RecoilRootWrapper>
        </body>
        </html>
    );
}
