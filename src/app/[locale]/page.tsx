import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import MessageOfHope from '@/components/MessageOfHope';
import CatholicChurchCameroon from '@/components/CatholicChurchCameroon';
import PhotoGallery from '@/components/PhotoGallery';
import StayConnected from '@/components/StayConnected';
import AlternateHero from '@/components/AlternateHero';

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
    <AlternateHero/>
      {/* <HeroSection /> */}
      <MessageOfHope />
      <CatholicChurchCameroon />
      <PhotoGallery />
      <StayConnected />
    </>
  );
}
