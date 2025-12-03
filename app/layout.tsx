import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Архітектура Львова',
  description: 'Відкрийте красу архітектурних пам\'яток Львова',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

