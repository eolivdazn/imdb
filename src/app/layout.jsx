import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            {/* Header */}
            <Header/>

            <Navbar></Navbar>

            <SearchBox></SearchBox>
            {/* SearchBox */}

            {children}
        </Providers>
        </body>
        </html>
    );
}
