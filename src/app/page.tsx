import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenConnect',
  description: 'GreenConnect is a micro-SaaS platform that connects small businesses with eco-friendly supply chains and sustainability solutions, helping them reduce their carbon footprint while enhancing brand reputation.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenConnect</h1>
      <p className="mt-4 text-lg">GreenConnect is a micro-SaaS platform that connects small businesses with eco-friendly supply chains and sustainability solutions, helping them reduce their carbon footprint while enhancing brand reputation.</p>
    </main>
  )
}
