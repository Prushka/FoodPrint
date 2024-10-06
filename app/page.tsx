'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImageClassifier from "@/app/upload";
import Header from "@/app/header";
import {
    AppleIcon, BetweenHorizonalStartIcon,
    ChevronRight,
    CloudUploadIcon,
    CookieIcon, LeafyGreenIcon,
    SaladIcon, SparkleIcon,
    UserRoundIcon,
    UsersRoundIcon,
    VeganIcon
} from "lucide-react";
import Score from "@/app/score";
import Block, {BlockMetrics, Row} from "@/app/block";
import {Nutrition} from "@/app/nutrition";
import Sparkle from "@/sparkle";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <main className={"flex flex-col gap-1 w-full h-full"}>
            <Header/>
            <div className={"grid grid-cols-2 w-full h-full justify-center mt-[7.5rem]"}>
                <UploadPanel/>
                <SummaryPanel/>
                <DetailsPanel/>
            </div>
        </main>
    );
}

function DetailsPanel() {
    const recommendedDiet = [
        "apple", "grape", "apple", "grape", "apple", "grape"
    ]
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
                        <div className={"border-l border-neutral-800 col-span-2 p-4 flex flex-col justify-center"}>
                            <Row className={"py-2"} title={"Users with similar diet"} icon={<UsersRoundIcon size={16} strokeWidth={2}/>}
                                 content={<p>
                                     22
                                     <span className={"text-neutral-200 text-sm"}>%</span></p>}/>
                            <Row className={"border-t border-neutral-800 py-2"} title={"Percentile Nutrition"} icon={<BetweenHorizonalStartIcon size={16} strokeWidth={2}/>}
                                 content={<p>
                                     24
                                     <span className={"text-neutral-200 text-sm"}>th</span></p>}/>
                            <Row className={"border-t border-neutral-800 py-2"} title={
                                <div className={"flex gap-1"}>Recommended Diet
                                    <Sparkle
                                        className="h-3 w-3"
                                        hasGradient
                                        stops={[
                                            { color: `#40c9ff` },
                                            { color: `#e81cff` },
                                        ]}
                                    />
                                </div>
                            } icon={<LeafyGreenIcon size={16} strokeWidth={2}/>}
                                    content={
                                <div className={"flex gap-2 mt-1 flex-wrap"}>
                                    {recommendedDiet.map((item) => (
                                        <Tag key={item} tag={item} condition={3}/>
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
    return (
        <>

            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="text-neutral-400 flex flex-col gap-2 justify-center items-center border-r border-neutral-800 hover:text-white cursor-pointer">
                        <CloudUploadIcon size={56} strokeWidth={2}/>
                        <p className={"text-lg"}>Upload or take a photo of your meal</p>
                        <p className={"text-sm"}>We'll analyze it for you!</p>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-none w-[90vw] h-[90vh] text-white flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Upload your meal!</DialogTitle>
                        <DialogDescription>
                            Find out what's in your meal and how it contributes to your long-term food print.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <ImageClassifier/>
                    </div>
                    <DialogFooter>
                        <Button variant={"secondary"} type="submit">Submit food</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    );
}

function SummaryPanel() {
    const tags = ["High Protein", "Low Carb", "High Fat", "High Fiber", "Low Sugar", "Low Sodium"];
    return (
        <div className={"flex flex-col gap-1 items-center p-6"}>
            <button className={"text-neutral-200 flex gap-1 justify-center items-center"}>Your Food Score <ChevronRight
                size={22}/></button>
            <Score score={20}/>
            <div className={"grid grid-cols-3 mt-4 w-full gap-4"}>
                <BlockMetrics
                    title={"Calories"}
                    icon={<CookieIcon size={16} strokeWidth={2}/>}
                    content={<span>
                    3100 <span className={"text-base text-neutral-400"}>kcal</span>
                    </span>}
                    tag={"Over 2500"}
                    condition={0}
                />
                <BlockMetrics
                    title={"Macronutrients"}
                    icon={<SaladIcon size={16} strokeWidth={2}/>}
                    content={<span>
                        80 <span className={"text-base text-neutral-400"}>%</span>
                    </span>}
                    tag={"Balanced"}
                    condition={2}
                />
                <BlockMetrics
                    title={"Micronutrients"}
                    icon={<AppleIcon size={16} strokeWidth={2}/>}
                    content={<span>
                    0.4
                    </span>}
                    tag={"Slightly Inadequate"}
                    condition={1}
                />
            </div>
            <Block className={"mt-3"}>
                <div className={"flex gap-2 flex-wrap"}>
                    {tags.map((tag) => (
                        <Tag key={tag} tag={tag} condition={Math.floor(Math.random() * 4)}/>
                        ))}
                </div>
            </Block>
        </div>
    )
}

function Tag({className, tag, condition} : any){
    return (
        <div key={tag} className={`${condition == 0 ? 'bg-[#331E25]' : condition == 1 ? 'bg-[#2E2C1D]' :
            condition == 2 ?
            'bg-[#1D2C2B]' : 'bg-neutral-800'} 
                 ${condition == 0 ? 'text-[#FB6591]' : condition == 1 ? 'text-[#CBC160]' : condition == 2 ? 'text-[#5CC8C3]':
                     'text-neutral-200'}
                 rounded-md p-1 px-2 text-xs ${className}`}
        >{tag}</div>
    )
}
