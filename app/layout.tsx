import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Barista Live, z.s.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
