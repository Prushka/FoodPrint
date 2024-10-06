import "./globals.css";
import RecoilRootWrapper from "@/app/RecoilRootWrapper";
import {Toaster} from "@/components/ui/toaster";


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
            <Toaster />
        </RecoilRootWrapper>
        </body>
        </html>
    );
}
