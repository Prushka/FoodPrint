"use client";

import {useState, FormEvent} from "react";
import {CameraIcon, CloudUploadIcon, ImageUpIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ImageClassifier() {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [response, setResponse] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [inputKey, setInputKey] = useState(new Date().toString());

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setResponse("Analyzing...");
        const formData = new FormData();
        formData.append("file", file as File);
        fetch("/img", {
            method: "POST",
            body: formData,
        }).then(async (res) => {
            setResponse(await res.json());
        });
    };

    const onReset = () => {
        setFile(null);
        setImage(null);
        setResponse("");
        setSubmitted(false);
        setInputKey(new Date().toString());
    };

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
                            } else {
                                setFile(null);
                                setImage(null);
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

    return (
        <div className="">
            {image ?
                <div className={"w-full h-full grid grid-cols-10"}>
                    <div className={"col-span-3 justify-center items-center p-4 flex flex-col gap-2 border border-dashed border-neutral-600"}>
                        <img
                            src={image}
                            alt="An image to classify"
                            className="object-contain w-full h-full"
                        />
                        {buttons}
                    </div>

                </div> : <div
                    className={"w-[40rem] h-[20rem] border border-dashed border-neutral-400 rounded-lg flex flex-col gap-6 justify-center items-center"}>
                    <CloudUploadIcon size={82} strokeWidth={2}/>
                    {buttons}
                </div>
            }
            <p className="py-8 text-slate-800">
                {submitted && !response ? "Analyzing..." : response}
            </p>
        </div>

    );

}
