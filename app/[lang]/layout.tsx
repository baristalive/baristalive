import '../globals.css'
import type { Metadata } from 'next'
import dictionaries from '../dictionaries/all'
import { inter } from '../fonts';



export async function generateStaticParams() {
  return Object
    .keys(dictionaries)
    .map((lang: string) => ({ lang }));
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang : string}
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
