import { Inter, Advent_Pro } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import 'remixicon/fonts/remixicon.css';
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalContext";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: "swap",
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent-pro",
  display: "swap",
});

export const metadata = {
  title: "Home - Ghostwriting Agency",
  description: "Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${adventPro.variable}`}>
        <ModalProvider>
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
