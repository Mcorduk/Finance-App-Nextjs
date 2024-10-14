"use client"

import { FearGreedIndex } from '@/components/FearGreedIndex'

export default function Home() {
  // You would typically fetch this value from an API
  const fearGreedValue = 65

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Market Overview</h1>
      <FearGreedIndex value={fearGreedValue} />
    </div>
  )
}
