"use client";

import {useState, useMemo} from "react";
import {
    CameraIcon,
    CloudUploadIcon,
    ImageUpIcon,
    LeafyGreenIcon,
    Tally2Icon,
    Tally3Icon,
    Tally4Icon,
    CheckIcon
} from "lucide-react";
import {PropagateLoader} from "react-spinners";
import {Food, foodStore, Ingredient} from "@/app/states";
import {Tag} from "@/app/page";
import Block from "@/app/block";
import {Button} from "@/components/ui/button";
import {useRecoilState} from "recoil";
import {useToast} from "@/hooks/use-toast";

export default function ImageClassifier({closeDialog, read}: { closeDialog: any, read?: Food | null }) {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [inputKey, setInputKey] = useState(new Date().toString());
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
    const [foods, setFoods] = useRecoilState(foodStore);
    const onSubmit = async (file: any) => {
        const formData = new FormData();
        formData.append("file", file as File);
        fetch("/img", {
            method: "POST",
            body: formData,
        }).then(async (res) => {
            setResponse(await res.json());
        });
    };

    const food = useMemo(() => {
        if (read) {
            return read;
        }
        if (!response) {
            return null;
        }
        try {
            const food = JSON.parse(response || '{}') as Food;
            food.date = Math.floor(Date.now() / 1000);
            food.uuid = Math.random().toString(36).substring(7);
            food.img = food.uuid + '.png';
            const formData = new FormData();
            formData.append("pfp", file as File);
            fetch(`https://sparkle-t.muddy.ca/be/pfp/${food.uuid}`, {
                method: 'POST',
                body: formData
            }).then(data => {
            });
            return food;
        } catch (e) {
            return null;
        }
    }, [response, read]);

    const ingredientList = useMemo(() => {
        if (!food) {
            return [];
        }
        try {
            if (!food.ingredients) {
                return [];
            }
            const ingredients = []
            for (const ingredient of food.ingredients) {
                ingredients.push(ingredient)
            }
            return ingredients
        } catch (e) {
            return [];
        }
    }, [food]);

    const nutritionList = useMemo((): { [key: string]: number } => {
        const result: { [key: string]: number } = {};
        for (const ingredient of ingredientList) {
            for (const nutrition of ingredient.nutrition) {
                if (selectedIngredient === null || ingredient.ingredient === selectedIngredient.ingredient) {
                    if (result[nutrition.nutrient]) {
                        result[nutrition.nutrient] += nutrition.volume;
                        if (result[nutrition.nutrient] > 3) {
                            result[nutrition.nutrient] = 3;
                        }
                    } else {
                        result[nutrition.nutrient] = nutrition.volume;
                    }
                }
            }
        }
        return result;
    }, [selectedIngredient, ingredientList]);

    const buttons = (
        read ? <></> : <div className={"flex gap-4"}>

            <form onSubmit={onSubmit}>
                <label htmlFor={"img-upload"}>
                    <div
                        className={"cursor-pointer flex gap-2 justify-center items-center text-sm p-2 px-4 border border-neutral-800 rounded-md hover:bg-neutral-800"}>
                        <ImageUpIcon size={16} strokeWidth={2}/>
                        Upload from Device
                    </div>
                    <input
                        id={"img-upload"}
                        key={inputKey}
                        type="file"
                        accept="image/jpeg, image/png"
                        className={"hidden"}
                        onChange={(e) => {
                            if (e.target.files?.length) {
                                setFile(e.target?.files[0]);
                                setImage(URL.createObjectURL(e.target?.files[0]));
                                setResponse(null);
                                setSelectedIngredient(null);
                                onSubmit(e.target?.files[0]).then();
                            } else {
                                setFile(null);
                                setImage(null);
                                setSelectedIngredient(null);
                                setResponse(null);
                            }
                        }}
                    />
                </label>
            </form>
            <div
                className={"cursor-pointer flex gap-2 justify-center items-center text-sm p-2 px-4 border border-neutral-800 rounded-md hover:bg-neutral-800"}>
                <CameraIcon size={16} strokeWidth={2}/>
                Use Camera
            </div>
        </div>
    )

    const ingredientTags = useMemo(() => {
        const count = ingredientList.length;
        const rows = Math.floor(Math.sqrt(count));
        const cols = Math.ceil(count / rows);
        const cellWidth = 400 / cols;
        const cellHeight = 400 / rows;

        return ingredientList.map((ingredient, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;

            const left = col * cellWidth + Math.random() * (cellWidth - 50); // 50 is the width of the div
            const top = row * cellHeight + Math.random() * (cellHeight - 50); // 50 is the height of the div
            return (
                <Tag large key={ingredient.ingredient} tag={ingredient.ingredient} condition={3}
                     className={"z-10 absolute border border-neutral-600 cursor-pointer"} style={{
                    left: `${left}px`,
                    top: `${top}px`,
                }}
                     onMouseEnter={() => setSelectedIngredient(ingredient)}
                     onMouseLeave={() => setSelectedIngredient(null)}
                />
            );
        })
    }, [ingredientList]);
    const {toast} = useToast()

    return (
        <div className="h-full w-full flex justify-center items-center">
            {image || read ?
                <div className={"w-full h-full grid grid-cols-10 gap-4"}>
                    <div
                        className={"col-span-3 flex flex-col justify-center items-center"}>
                        <div
                            className={"border border-dashed border-neutral-600 justify-center items-center p-4 flex flex-col gap-4"}>
                            <img
                                src={image || `https://sparkle-t.muddy.ca/static/pfp/${read?.img}`}
                                alt="An image to classify"
                                className="object-contain w-full h-full"
                            />
                            {buttons}
                        </div>
                    </div>
                    <div
                        className={`w-full h-full flex-col col-span-7 flex items-center p-4 justify-center`}>
                        <div id={"blob"} className={`relative ${!food ? 'blob animate-pulse' : 'blobt'}`}>
                            {food ? ingredientTags : <></>}
                        </div>
                        {food ? <div className={"flex flex-col gap-5 mt-16 w-full"}>
                            <Block className={"flex flex-col gap-5"}>
                                <div className={"flex justify-between items-center"}>

                                    <div className={"flex flex-col gap-0"}>
                                        <div className={"flex gap-2 items-center text-neutral-200"}>
                                            <LeafyGreenIcon size={14} strokeWidth={2}/>
                                            <p className={"text-lg"}>Nutrition &nbsp;<span
                                                className={"text-base"}>({selectedIngredient ? selectedIngredient.ingredient : 'ALL'})</span>
                                            </p>
                                        </div>
                                        <p className={"text-sm text-neutral-300"}>Hover over ingredient to see their
                                            nutrition</p>
                                    </div>
                                    {food?.calories && <div
                                        className={"flex gap-3 flex-row-reverse border border-neutral-700 p-2 px-3 rounded-md"}>
                                        <Tag
                                            tag={food.calories < 300 ? "Below 300" : food.calories < 600 ? "Below 600" : "Above 600"}
                                            condition={food.calories < 300 ? 2 : food.calories < 600 ? 1 : 0}
                                        />
                                        <span>
                                        {food.calories} <span className={"text-base text-neutral-400"}>cal</span>
                                        </span></div>}
                                </div>
                                <div className={"flex gap-2 flex-wrap"}>
                                    {Object.entries(nutritionList).map(([key, value], index) => (
                                        <Tag large key={`${key}${value}`} tag={
                                            <div className={"flex gap-1 justify-center items-center"}>
                                                {value === 1 ? <Tally2Icon size={16} strokeWidth={2}/> : value === 2 ?
                                                    <Tally3Icon size={16} strokeWidth={2}/> :
                                                    <Tally4Icon size={16} strokeWidth={2}/>}
                                                {key}
                                            </div>
                                        }
                                             condition={value - 1}
                                        />
                                    ))}

                                </div>
                            </Block>

                            {!read && <Button

                                variant={"secondary"}
                                className={"flex gap-2 justify-center items-center"}
                                type="submit"
                                onClick={() => {
                                    console.log(food)
                                    setFoods((foods) => {
                                        if (food) {
                                            return [...foods, food];
                                        }
                                        return foods;
                                    })
                                    closeDialog();

                                    toast({
                                        title: "Meal Added",
                                        description: `${upperFirst(food?.food)} has been added to your journal!`,
                                    })
                                }}
                            >
                                <CheckIcon size={16} strokeWidth={2}/>
                                Add Meal</Button>}
                        </div> : <div className={"mt-auto"}>
                            <PropagateLoader size={12} color={"#dedede"} loading/>
                        </div>}
                    </div>
                </div> : <div
                    className={"w-[40rem] h-[20rem] border border-dashed border-neutral-400 rounded-lg flex flex-col gap-6 justify-center items-center"}>
                    <CloudUploadIcon size={82} strokeWidth={2}/>
                    {buttons}
                </div>
            }
        </div>

    );

}

export function upperFirst(str?: string) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
