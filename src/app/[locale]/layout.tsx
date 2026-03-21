import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTimer from "@/components/FloatingTimer";
import LiveStreamModal from "@/components/LiveStreamModal";
import { LiveStreamProvider } from "@/contexts/LiveStreamContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Papal Visit Africa 2026",
  description: "Papal Visit Africa 2026",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LiveStreamProvider>
          <NextIntlClientProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingTimer />
            {/* <div className="fixed bottom-4 right-4 z-40"> */}
              <LiveStreamModal />
            {/* </div> */}
          </NextIntlClientProvider>
        </LiveStreamProvider>
      </body>
    </html>
  );
}

