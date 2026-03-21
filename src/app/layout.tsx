import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Papal Visit Africa 2026",
  description: "Papal Visit Africa 2026",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
