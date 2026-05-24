import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SWARNAKARA | Finance & Gold Loan - Kollam, Kerala',
  description: 'Trusted gold loan services in Kollam, Kerala. Instant approvals, lowest interest rates, and transparent process.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=Noto+Sans+Malayalam:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0e1a] text-white antialiased">{children}</body>
    </html>
  )
}
