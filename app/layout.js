import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SSH Manager",
  description:
    "SSH Manager panel that lets you easily create, manage, and monitor SSH, VPN, and WebSocket accounts. Built with a clean and powerful interface, it's perfect for both beginners and network admins.",
  keywords: [
    "ssh",
    "vpn",
    "hosting murah",
    "panel ssh",
    "ssh manager",
    "free vpn",
  ],
  metadataBase: new URL("https://cryptzx.cloud"),
  openGraph: {
    title: "SSH Manager",
    description: "Join WhatsApp Channel for more information",
    url: "https://whatsapp.com/channel/0029VbAqd6xCXC3BeRmEfz0Z",
    siteName: "SSH Manager",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}