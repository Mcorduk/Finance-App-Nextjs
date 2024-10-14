"use client"

import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FearGreedIndexProps {
  value: number // 0-100
}

const getFearGreedLabel = (value: number) => {
  if (value <= 25) return 'Extreme Fear'
  if (value <= 45) return 'Fear'
  if (value <= 55) return 'Neutral'
  if (value <= 75) return 'Greed'
  return 'Extreme Greed'
}

const getColor = (value: number) => {
  if (value <= 25) return '#F03E3E'
  if (value <= 45) return '#FFA94D'
  if (value <= 55) return '#FAB005'
  if (value <= 75) return '#82C91E'
  return '#40C057'
}

export function FearGreedIndex({ value }: FearGreedIndexProps) {
  const data = [{ value: value }]

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Fear & Greed Index</CardTitle>
        <CardDescription>Current market sentiment</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-[200px] h-[100px]">
          <RadialBarChart
            width={200}
            height={100}
            cx={100}
            cy={100}
            innerRadius={80}
            outerRadius={90}
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              angleAxisId={0}
              fill={getColor(value)}
            />
          </RadialBarChart>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm">{getFearGreedLabel(value)}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-center text-sm text-muted-foreground">
        Updated daily based on market indicators
      </CardFooter>
    </Card>
  )
}
