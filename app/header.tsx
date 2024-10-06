import Link from "next/link";
import {CameraIcon, CloudUploadIcon, EggFriedIcon, UserPenIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import ImageClassifier from "@/app/upload";
import {useState} from "react";

export default function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    return <header className={"fixed mt-5 w-full flex justify-center"}
    >
        <div className={"tracking-tight text-[0.925rem] flex gap-12 justify-between z-10 border border-neutral-800 " +
            "left-[50%] text-neutral-200 py-3 px-5 rounded-xl items-center"}>

        <Link href={"/"} className={"flex gap-2 font-medium text-white justify-center items-center"}>
            <EggFriedIcon size={20} strokeWidth={2}/>
            Food Print</Link>
        <Link href={"/"}
        className={`${pathname === "/" ? "text-white font-medium" : ""}`}
        >Dashboard</Link>
        <Link href={"/journal"}>Journal</Link>
            <div className={"flex gap-5"}>
                <Button className={"bg-[#28282C] hover:bg-[#323232] text-neutral-100 h-8 px-3 flex justify-center items-center gap-2"}>
                    <UserPenIcon size={16} strokeWidth={2}/>
                    Lucas</Button>


                <Button
                    onClick={() => setOpen(true)}
                    className={"bg-neutral-50 hover:bg-neutral-200 text-neutral-900 hover:text-black h-8 px-3 flex justify-center items-center gap-2"}>
                    <CameraIcon size={16} strokeWidth={2}/>
                    Scan</Button>
                <Dialog onOpenChange={setOpen} open={open}>
                    <DialogContent className="max-w-none w-[90vw] h-[90vh] text-white flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Upload your meal!</DialogTitle>
                            <DialogDescription>
                                Find out what's in your meal and how it contributes to your long-term food print.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <ImageClassifier closeDialog={()=>{
                                setOpen(false)
                            }}/>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </header>
}
