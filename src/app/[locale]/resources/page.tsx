import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import SpiritualResources from '@/components/SpiritualResources';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type Props = {
  params: Promise<{locale: string}>;
};

export default async function Resources({params}: Props) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return <SpiritualResources />;
}
