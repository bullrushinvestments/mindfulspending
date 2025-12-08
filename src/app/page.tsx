import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulSpending',
  description: 'MindfulSpending is an AI-powered financial wellness platform that combines personal finance tracking with mental health support to help users manage their money better while reducing stress and anxiety related to finances.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulSpending</h1>
      <p className="mt-4 text-lg">MindfulSpending is an AI-powered financial wellness platform that combines personal finance tracking with mental health support to help users manage their money better while reducing stress and anxiety related to finances.</p>
    </main>
  )
}
