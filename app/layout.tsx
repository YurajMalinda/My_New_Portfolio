import './globals.css';
import type { Metadata } from 'next';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Yuraj Malinda - Full-Stack Developer & Creative Technologist',
  description: 'Curious builder. Quiet experimenter. I build things that feel alive - from AI/ML systems to mobile apps and 3D experiences.',
  openGraph: {
    title: 'Yuraj Malinda - Full-Stack Developer & Creative Technologist',
    description: 'Curious builder. Quiet experimenter. I build things that feel alive.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yuraj Malinda Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuraj Malinda - Full-Stack Developer & Creative Technologist',
    description: 'Curious builder. Quiet experimenter. I build things that feel alive.',
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
