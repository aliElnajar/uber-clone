import "./globals.css";
import { Inter } from "next/font/google";
import "mapbox-gl/dist/mapbox-gl.css";
import Provider from "../store&providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "uber clone",
  description: "uber clone by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
