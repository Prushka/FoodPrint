"use client";

import {useState, FormEvent, useMemo} from "react";
import {CameraIcon, CloudUploadIcon, ImageUpIcon, Tally2Icon, Tally3Icon, Tally4Icon} from "lucide-react";
import {PropagateLoader} from "react-spinners";
import {Food, Ingredient} from "@/app/states";
import {Tag} from "@/app/page";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Block from "@/app/block";

export default function ImageClassifier() {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [inputKey, setInputKey] = useState(new Date().toString());
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

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

    const ingredientList = useMemo(() => {
        if (!response) {
            return [];
        }
        try {
            const obj = JSON.parse(response || '{}') as Food;
            if (!obj.ingredients) {
                return [];
            }
            const ingredients = []
            for (const ingredient of obj.ingredients) {
                ingredients.push(ingredient)
            }
            return ingredients
        } catch (e) {
            return [];
        }
    }, [response]);

    const nutritionList = useMemo((): {[key: string]: number} => {
        const result: {[key: string]: number} = {};
        for (const ingredient of ingredientList) {
            for (const nutrition of ingredient.nutrition) {
                console.log(nutrition);
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
        console.log(result);
        return result;
    }, [selectedIngredient, ingredientList]);

    const buttons = (
        <div className={"flex gap-4"}>

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
                                setResponse("{\n" +
                                    "            \"food\": \"cheese pizza\",\n" +
                                    "            \"ingredients\": [\n" +
                                    "                {\n" +
                                    "                    \"ingredient\": \"pizza dough\",\n" +
                                    "                    \"probability\": 1.0,\n" +
                                    "                    \"nutrition\": [\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Carbohydrates\",\n" +
                                    "                            \"volume\": 3\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Protein\",\n" +
                                    "                            \"volume\": 1\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Fat\",\n" +
                                    "                            \"volume\": 1\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Sodium\",\n" +
                                    "                            \"volume\": 2\n" +
                                    "                        }\n" +
                                    "                    ]\n" +
                                    "                },\n" +
                                    "                {\n" +
                                    "                    \"ingredient\": \"tomato sauce\",\n" +
                                    "                    \"probability\": 0.9,\n" +
                                    "                    \"nutrition\": [\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Vitamin C\",\n" +
                                    "                            \"volume\": 2\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Carbohydrates\",\n" +
                                    "                            \"volume\": 1\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Sodium\",\n" +
                                    "                            \"volume\": 2\n" +
                                    "                        }\n" +
                                    "                    ]\n" +
                                    "                },\n" +
                                    "                {\n" +
                                    "                    \"ingredient\": \"mozzarella cheese\",\n" +
                                    "                    \"probability\": 1.0,\n" +
                                    "                    \"nutrition\": [\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Protein\",\n" +
                                    "                            \"volume\": 2\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Fat\",\n" +
                                    "                            \"volume\": 3\n" +
                                    "                        },\n" +
                                    "                        {\n" +
                                    "                            \"nutrient\": \"Calcium\",\n" +
                                    "                            \"volume\": 3\n" +
                                    "                        }\n" +
                                    "                    ]\n" +
                                    "                }\n" +
                                    "            ]\n" +
                                    "        }");
                                setSelectedIngredient(null);
                                //onSubmit(e.target?.files[0]).then();
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
            const blob = document.getElementById("blob");
            const width = blob?.clientWidth || 0;
            const height = blob?.clientHeight || 0;
            const cellWidth = width / cols;
            const cellHeight = height / rows;

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

    return (
        <div className="h-full w-full flex justify-center items-center">
            {image ?
                <div className={"w-full h-full grid grid-cols-10 gap-4"}>
                    <div
                        className={"col-span-3 flex flex-col justify-center items-center"}>
                        <div
                            className={"border border-dashed border-neutral-600 justify-center items-center p-4 flex flex-col gap-4"}>
                            <img
                                src={image}
                                alt="An image to classify"
                                className="object-contain w-full h-full"
                            />
                            {buttons}
                        </div>
                    </div>
                    <div
                        className={`w-full h-full flex-col col-span-7 flex items-center p-4 ${!response ? 'justify-center' : ''}`}>
                        <div id={"blob"} className={`relative ${!response ? 'blob animate-pulse' : 'blobt'}`}>
                            {response ? ingredientTags : <></>}
                        </div>
                        {response ? <>
                            <Block className={"mt-12 flex flex-col gap-3"}>
                                <div className={"flex flex-col gap-0"}>
                                    <p className={"text-lg"}>Nutrition &nbsp;<span className={"text-base text-neutral-200"}>({selectedIngredient ? selectedIngredient.ingredient : 'ALL'})</span></p>
                                    <p className={"text-sm text-neutral-300"}>Hover over ingredient to see their nutrition</p>
                                </div>
                                <div className={"flex gap-2 flex-wrap"}>
                                    {Object.entries(nutritionList).map(([key, value], index) => (
                                        <Tag large key={`${key}${value}`} tag={
                                            <div className={"flex gap-1 justify-center items-center"}>
                                                {value === 1 ? <Tally2Icon size={16} strokeWidth={2}/> : value === 2 ?
                                                    <Tally3Icon size={16} strokeWidth={2}/> : <Tally4Icon size={16} strokeWidth={2}/>}
                                                {key}
                                            </div>
                                        }
                                             condition={value-1}
                                        />
                                    ))}
                                </div>
                            </Block>
                        </> : <div className={"mt-auto"}>
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
