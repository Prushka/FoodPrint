"use client"

import { TrendingUp } from "lucide-react"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import {Badge} from "@/components/ui/badge";

export const description = "A radial chart with text"


const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export default function Score({score = 70}: { score: number }) {

    const chartData = [
        { browser: "safari", visitors: score, fill: "var(--color-safari)" },
    ]
    return (
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] w-full"
                >
                    <RadialBarChart
                        data={chartData}
                        innerRadius={100}
                        outerRadius={130}
                        startAngle={270 - 360*score/100}
                        endAngle={270}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[105, 94]}
                            limitingConeAngle={10}
                        />
                        <RadialBar

                            isAnimationActive={false}
                            dataKey="visitors" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 5}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {chartData[0].visitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 19}
                                                    className={score < 35 ? 'fill-[#FB6591]' : score < 60 ? 'fill-[#CBC160]' : 'fill-[#5CC8C3]'}
                                                >
                                                    {score < 35 ? 'Pay Attention' : score < 60 ? 'Fair' : 'Good'}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
    )
}
