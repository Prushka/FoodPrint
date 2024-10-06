"use client"

import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {useMemo} from "react";

const nutrition = [
    {"name": "Protein", "short": "Prot"},
    {"name": "Carbohydrates", "short": "Carbs"},
    {"name": "Fat", "short": "Fat"},
    {"name": "Fiber", "short": "Fiber"},
    {"name": "Vitamin A", "short": "Vit A"},
    {"name": "Vitamin C", "short": "Vit C"},
    {"name": "Vitamin D", "short": "Vit D"},
    {"name": "Vitamin E", "short": "Vit E"},
    {"name": "Vitamin K", "short": "Vit K"},
    {"name": "Calcium", "short": "Ca"},
    {"name": "Iron", "short": "Fe"},
    {"name": "Potassium", "short": "K"},
    {"name": "Sodium", "short": "Na"},
    {"name": "Magnesium", "short": "Mg"},
    {"name": "Zinc", "short": "Zn"},
    {"name": "Omega-3", "short": "Omg3"},
    {"name": "Folate", "short": "Fol"},
    {"name": "Vitamin B12", "short": "B12"},
    {"name": "Phosphorus", "short": "P"},
    {"name": "Calories", "short": "Cal"}
]

const sample = nutrition.map((n, i) => {
    return {nutrition: n.short, intake: Math.floor(Math.random() * 150)}
})

const chartConfig = {
    intake: {
        label: "Intake",
        color: "#334365",
    },
    missing: {
        label: "Missing",
        color: "#ec9f49",
    },
    excess: {
        label: "Excess",
        color: "#db5679",
    },
} satisfies ChartConfig

export function Nutrition({cd = sample}: { cd?: any }) {
    const chartData = useMemo(() => {
        return cd.map((data: any) => {
            return {
                nutrition: data.nutrition,
                intake: data.intake,
                missing: data.intake < 85 ? 85 - data.intake : 0,
                excess: data.intake > 100 ? data.intake - 100 : 0,
            }
        })
    }, [cd])
    return (
        <ChartContainer config={chartConfig} className={"h-[17rem] w-full col-span-8"}>
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey="nutrition"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => nutrition.find(n => n.name === value)?.short || value.slice(0,5)}
                />
                <YAxis unit="%"/>
                <ChartTooltip content={<ChartTooltipContent hideLabel/>}/>
                <ChartLegend content={<ChartLegendContent/>}/>
                <Bar
                    dataKey="intake"
                    stackId="a"
                    fill="var(--color-intake)"
                    radius={[0, 0, 4, 4]}
                />
                <Bar
                    dataKey="missing"
                    stackId="a"
                    fill="var(--color-missing)"
                    radius={[4, 4, 0, 0]}
                />
                <Bar
                    dataKey="excess"
                    stackId="a"
                    fill="var(--color-excess)"
                    radius={[4, 4, 0, 0]}/>
            </BarChart>
        </ChartContainer>
    )
}
