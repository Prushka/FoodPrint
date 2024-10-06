'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ImageClassifier from "@/app/upload";
import Header from "@/app/header";
import {
    AppleIcon, BetweenHorizonalStartIcon,
    ChevronRight,
    CloudUploadIcon,
    CookieIcon, LeafyGreenIcon,
    SaladIcon,
    UsersRoundIcon,
    VeganIcon
} from "lucide-react";
import Score, {ScoreSmall} from "@/app/score";
import Block, {BlockMetrics, Row} from "@/app/block";
import {Nutrition} from "@/app/nutrition";
import {Sparkle} from "@/app/sparkle";
import React, {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {dateStore, Food, foodStore, type FoodTag} from "@/app/states";
import {formatToCamelCase, getTodayFormatted, unixToDateFormat} from "@/app/utils";
import Tag from "@/app/tag";

export default function Home() {
    const [foods, setFoods] = useRecoilState(foodStore);
    useEffect(() => {
        if (foods.length === 0) {
            fetch('/food').then(response => response.json()).then(data => {
                setFoods(data)
            })
        }
    }, [setFoods, foods]);
    return (
        <main className={"flex flex-col gap-1 w-full h-full"}>
            <Header/>
            <div className={"grid grid-cols-2 w-full h-full justify-center mt-[6.5rem]"}>
                <Calender/>
                <UploadPanel/>
                <SummaryPanel/>
                <DetailsPanel/>
            </div>
        </main>
    );
}

function getLast7Days() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const result = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        const dayLetter = days[date.getDay()];
        const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD

        result.push({
            day: dayLetter,
            date: formattedDate
        });
    }

    return result;
}

function Calender() {
    const days = getLast7Days();
    const [foods] = useRecoilState(foodStore);
    const [selectedDate, setSelectedDate] = useRecoilState(dateStore);
    return (
        <div className={"flex gap-2 col-span-2 w-full justify-center items-center mb-5"}
        >
            {days.map((day, index) => (
                <div className={"relative cursor-pointer"} key={index}
                     onClick={() => setSelectedDate(day.date)}>
                    <ScoreSmall active={selectedDate === day.date} score={
                        foods.filter((food) => unixToDateFormat(food.date) === day.date)
                            .reduce((acc, food) => acc + food.score, 0) /
                        foods.filter((food) => unixToDateFormat(food.date) === day.date).length
                    } day={day.day} key={index}/>
                    <div
                        className={"text-xs absolute left-0 right-0 ml-auto mr-auto text-center top-[50%] transform -translate-y-1/2 " +
                            `${selectedDate === day.date ? 'text-white font-bold' : 'text-neutral-400'}`}>
                        {day.day}
                    </div>
                </div>
            ))}
        </div>
    )
}

function deduplicateArray(arr: string[]) {
    const seen = new Set();
    return arr.filter(item => {
        const camelCased = formatToCamelCase(item);
        if (!seen.has(camelCased)) {
            seen.add(camelCased);
            return true;
        }
        return false;
    });
}

function deduplicateTagArray(arr: FoodTag[]) {
    const seen = new Set();
    return arr.filter(item => {
        const camelCased = formatToCamelCase(item.tag);
        if (!seen.has(camelCased)) {
            seen.add(camelCased);
            return true;
        }
        return false;
    });
}

function DetailsPanel() {
    const [foods] = useRecoilState(foodStore);
    const [selectedDate, setSelectedDate] = useRecoilState(dateStore);
    const selectedFoods = foods.filter((food) => unixToDateFormat(food.date) === selectedDate);
    // @ts-ignore
    const recommendedDiet : string[] = deduplicateArray(selectedFoods.reduce((acc, food) => {
        if (food.recommended) {
            return [...acc, ...food.recommended];
        }
        return acc;
    }, []));
    const similarUsers = selectedFoods.reduce((acc, food) => acc + food.similar_users, 0) / selectedFoods.length;
    const percentile = selectedFoods.reduce((acc, food) => acc + food.percentile, 0) / selectedFoods.length;
    return (
        <div className={"flex gap-2 items-center p-6 col-span-2"}>
            <Block className={"min-h-[20rem] px-6"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex gap-2 items-center"}>
                        <VeganIcon size={16} strokeWidth={2}/>
                        <div className={"text-lg"}>Nutrition</div>
                    </div>
                    <div className={"grid grid-cols-10 gap-8"}>
                        <Nutrition/>
                        <div className={"border-l border-neutral-800 col-span-3 p-4 flex flex-col justify-center"}>
                            <Row className={"py-2"} title={"Users with similar diet"}
                                 icon={<UsersRoundIcon size={16} strokeWidth={2}/>}
                                 content={<p>
                                     {similarUsers}
                                     <span className={"text-neutral-200 text-sm"}>%</span></p>}/>
                            <Row className={"border-t border-neutral-800 py-2"} title={"Percentile Nutrition"}
                                 icon={<BetweenHorizonalStartIcon size={16} strokeWidth={2}/>}
                                 content={<p>
                                     {percentile}
                                     <span className={"text-neutral-200 text-sm"}>th</span></p>}/>
                            <Row className={"border-t border-neutral-800 py-2"} title={
                                <div className={"flex gap-1"}>Recommended Diet
                                    <Sparkle
                                        className="h-3 w-3"
                                        hasGradient
                                        stops={[
                                            {color: `#40c9ff`},
                                            {color: `#e81cff`},
                                        ]}
                                    />
                                </div>
                            } icon={<LeafyGreenIcon size={16} strokeWidth={2}/>}
                                 content={
                                     <div className={"flex gap-2 mt-2 flex-wrap"}>
                                         {recommendedDiet.map((item, index) => (
                                             <Tag key={`${index}`} tag={formatToCamelCase(item)} condition={3}/>
                                         ))}
                                     </div>
                                 }/>
                        </div>
                    </div>
                </div>
            </Block>
        </div>
    )
}


function UploadPanel() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [foods] = useRecoilState(foodStore);
    const [selectedDate, setSelectedDate] = useRecoilState(dateStore);
    const selectedFoods = foods.filter((food) => unixToDateFormat(food.date) === selectedDate);
    const today : string = getTodayFormatted();
    const [selectedFood, setSelectedFood] = useState<Food | null>(null);
    return (
        <div className={"flex flex-col gap-9 border-r border-neutral-800 p-6"}>
            {today === selectedDate && <>
                <div
                    onClick={() => setOpen(true)}
                    className="border border-dashed border-neutral-600 p-6
                    text-neutral-400 flex flex-col gap-2 justify-center items-center hover:text-white cursor-pointer rounded-md">
                    <CloudUploadIcon size={56} strokeWidth={2}/>
                    <p className={"text-lg"}>Upload or take a photo of your meal</p>
                    <p className={"text-sm"}>We&apos;ll analyze it for you!</p>
                </div>
                <Dialog onOpenChange={setOpen} open={open}>
                    <DialogContent className="max-w-none w-[90vw] h-[90vh] overflow-auto text-white flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Upload your meal!</DialogTitle>
                            <DialogDescription>
                                Find out what&apos;s in your meal and how it contributes to your long-term food print.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <ImageClassifier closeDialog={() => {
                                setOpen(false)
                            }}/>
                        </div>
                    </DialogContent>
                </Dialog>
            </>}
            <div className={"flex w-full h-full"}>
                <Block className={`${today === selectedDate ? 'h-[24rem] max-h-[24rem]' : 'h-[36rem] max-h-[36rem]'}  transition-none overflow-auto px-6 `}>
                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex gap-2 items-center"}>
                            <VeganIcon size={16} strokeWidth={2}/>
                            <div className={"text-lg"}>Your Meal on {selectedDate}</div>
                        </div>
                        {selectedFoods.map((food, index) => (
                            <div key={index}
                                 onClick={() => {
                                     setSelectedFood(food);
                                     setOpen2(true);
                                 }}
                                 className={"cursor-pointer flex gap-2 items-center w-full justify-between border border-neutral-800 p-2 px-4 rounded-md " +
                                     "hover:bg-neutral-900 hover:border-neutral-700"}>
                                <img src={`https://sparkle-t.muddy.ca/static/pfp/${food?.img}`} alt={food.food} className={"w-24 h-16 rounded-md object-cover"}/>
                                <div className={"flex flex-col gap-2 items-end"}>
                                    <div
                                        className={"text-sm font-medium text-neutral-200"}>{formatToCamelCase(food.food)}</div>
                                    <div className={"flex gap-1"}>{food.ingredients.map((ingredient, index) => (
                                <Tag key={index} tag={formatToCamelCase(ingredient.ingredient)} condition={3}/>
                            ))}
                                <Tag key={index} tag={`${food.calories} cal`} condition={3}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog onOpenChange={setOpen2} open={open2}>
                <DialogContent className="max-w-none w-[90vw] h-[90vh] overflow-auto text-white flex flex-col">
                    <DialogHeader>
                        <DialogTitle>{unixToDateFormat(selectedFood?.date)} {formatToCamelCase(unixToTimeOfDay(selectedFood?.date))}</DialogTitle>
                        <DialogDescription>
                            {selectedFood?.food}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <ImageClassifier
                            read={selectedFood}
                            closeDialog={() => {
                            setOpen(false)
                        }}/>
                    </div>
                </DialogContent>
            </Dialog>
        </Block>
        </div>
        </div>
    );
}
function unixToTimeOfDay(unixTimestamp?: number) {
    if (!unixTimestamp) {
        return '';
    }

    // Create a Date object from the Unix timestamp (convert seconds to milliseconds)
    const date = new Date(unixTimestamp * 1000);

    // Get the hour in 24-hour format
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 13) {
        return 'noon';
    } else if (hour >= 13 && hour < 18) {
        return 'afternoon';
    } else {
        return 'night';
    }
}

function SummaryPanel() {
    const [foods] = useRecoilState(foodStore);
    const [selectedDate, setSelectedDate] = useRecoilState(dateStore);
    const selectedFoods = foods.filter((food) => unixToDateFormat(food.date) === selectedDate);
    const calories = selectedFoods.reduce((acc, food) => acc + food.calories, 0);
    const macronutrients = selectedFoods.reduce((acc, food) => acc + food.macronutrients, 0) / selectedFoods.length;
    const micronutrients = selectedFoods.reduce((acc, food) => acc + food.micronutrients, 0) / selectedFoods.length;
    // @ts-ignore
    const tags: FoodTag[] = deduplicateTagArray(selectedFoods.reduce((acc, food) => {
        if (food.tags) {
            return [...acc, ...food.tags];
        }
        return acc;
    }, [{tag: `${selectedFoods.length} Meal Item${selectedFoods.length > 1 ? 's' : ''}`, condition: 3}]));
    return (
        <div className={"flex flex-col gap-1 items-center p-6"}>
            <button className={"text-neutral-200 flex gap-1 justify-center items-center"}>Your Food Score <ChevronRight
                size={22}/></button>
            <Score score={selectedFoods.reduce((acc, food) => acc + food.score, 0) / selectedFoods.length}/>
            <div className={"grid grid-cols-3 mt-4 w-full gap-4"}>
                <BlockMetrics
                    title={"Calories"}
                    icon={<CookieIcon size={16} strokeWidth={2}/>}
                    content={<span>
                    {calories}<span className={"text-base text-neutral-400"}> cal</span>
                    </span>}
                    tag={calories < 1200 ? "Below 1200" : calories < 2000 ? "Below 2000" : "Above 2000"}
                    condition={calories < 1200 ? 0 : calories < 2000 ? 2 : 0}
                />
                <BlockMetrics
                    title={"Macronutrients"}
                    icon={<SaladIcon size={16} strokeWidth={2}/>}
                    content={<span>
                        {Math.floor(macronutrients)} <span className={"text-base text-neutral-400"}>%</span>
                    </span>}
                    tag={macronutrients < 20 ? "Unbalanced" : macronutrients < 40 ? "Unhealthy" : "Balanced"}
                    condition={macronutrients < 20 ? 0 : macronutrients < 40 ? 1 : 3}
                />
                <BlockMetrics
                    title={"Micronutrients"}
                    icon={<AppleIcon size={16} strokeWidth={2}/>}
                    content={<span>
                    {Math.floor(micronutrients)}
                    </span>}
                    tag={micronutrients < 20 ? "Inadequate" : micronutrients < 40 ? "Slightly Inadequate" : "Adequate"}
                    condition={micronutrients < 20 ? 0 : micronutrients < 40 ? 1 : 3}
                />
            </div>
            <Block className={"mt-3"}>
                <div className={"flex gap-2 flex-wrap"}>
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={formatToCamelCase(tag.tag)} condition={tag.condition}/>
                    ))}
                </div>
            </Block>
        </div>
    )
}

