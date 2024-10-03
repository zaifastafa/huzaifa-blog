import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Theme from './theme-provider'
import SideNavigation from '@/components/ui/side-navigation'
import Header from '@/components/ui/header'
import Footer from "@/components/ui/footer";
import HeroImage from '@/public/images/kaleidoscope.webp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Aspekta-650.woff2',
      weight: '650',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

export const metadata = {
  title: 'Huzaifa\'s Kaleidoscope',
  description: 'Welcome to \'Huzaifa\'s Kaleidoscope\', an intimate exploration of ideas, experiences, and reflections. Just as a kaleidoscope reveals a constantly changing pattern of shapes and colors, here you\'ll find a vibrant mix of topics – from personal anecdotes to deep dives into technology, culture, and beyond. Each post offers a fresh perspective, representing the ever-evolving landscape of Huzaifa\'s mind. Join us on this journey through a world as diverse, engaging, and unpredictable as a kaleidoscope\'s view.',
  alternates: {
    canonical: 'https://blog.huzaifamustafa.com',
  },
  openGraph: {
    title: 'Huzaifa\'s Kaleidoscope',
    description: 'An intimate exploration of ideas, experiences, and reflections.',
    url: 'https://blog.huzaifamustafa.com',
    siteName: 'Huzaifa\'s Kaleidoscope',
    images: [
      {
        url: HeroImage.src,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huzaifa\'s Kaleidoscope',
    description: 'An intimate exploration of ideas, experiences, and reflections.',
    creator: '@_huzaifamustafa',
    images: [HeroImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}>
        <Theme>
          <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex">

              <SideNavigation />

              { /* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">

                  <Header />

                  {children}

                  <Footer/>
                </div>
              </main>

            </div>
          </div>
        </Theme>
      </body>
    </html>
  )
}
