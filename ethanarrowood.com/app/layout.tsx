import "./globals.css";
import Navbar from "./navbar";
import Providers from "./providers";
import Footer from "./footer";
import { Analytics } from './components/Analytics';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethan Arrowood",
  description: "Personal website for Ethan Arrowood. Avid adventurer. Open source maintainer. Vercel Senior Software Engineer. Node.js Contributor. ECMA TC39 Delegate. Breckenridge Ski Instructor.",
  icons: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏔️</text></svg>"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-200">
      <body>
        <Providers>
          <div className="mx-auto max-w-screen-md h-screen flex flex-col px-2">
            <Navbar />
            <div className="mb-auto pt-8">{children}</div>
            <Footer />
          </div>
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
