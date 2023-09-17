import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Header from './components/Layout/Header'
import Preloader from './components/Preloader'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Alper Koşay - Blog App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                {children}
            </body>
        </html>
    )
}
