import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Francisco Veiras",
  description: "www fveiras",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ThemeProvider
        disableTransitionOnChange
        enableSystem
        attribute="class"
        defaultTheme="system"
      >
        <body>
          <Navbar />
          <div className="container">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
