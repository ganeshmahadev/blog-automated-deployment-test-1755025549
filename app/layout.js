import './globals.css'

export const metadata = {
  title: 'Automated Deployment Test',
  description: '**Automated Deployment Testing: Streamlining Your Release Pipeline**',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
