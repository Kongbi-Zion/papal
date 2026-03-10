import { Crimson_Text, Open_Sans } from "next/font/google";

const crimsonText = Crimson_Text({subsets:['latin'],variable:'--font-crimson-text',weight:['400','600','700']});
const openSans = Open_Sans({subsets:['latin'],variable:'--font-open-sans',weight:['300','400','500','600','700']});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
