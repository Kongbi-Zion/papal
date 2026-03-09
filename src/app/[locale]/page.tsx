import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import HeroSection from '@/components/HeroSection';
import MessageOfHope from '@/components/MessageOfHope';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type Props = {
  params: Promise<{locale: string}>;
};

export default async function Home({params}: Props) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <>
      <HeroSection />
      <MessageOfHope />
    </>
  );
}
