import './globals.css'
import { ApolloWrapper } from '../lib/apollo-wrapper'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Eventik | ${process.env.NEXT_PUBLIC_EVENT_NAME}`,
  description: 'Gestioná tus eventos en Eventik la plataforma que ayuda a los organizadores a crear, promocionar y vender entradas para sus eventos.',
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
