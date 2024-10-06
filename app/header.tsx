import Link from "next/link";
import {CameraIcon, EggFriedIcon, UserPenIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname()
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
                <Button className={"bg-neutral-50 hover:bg-neutral-200 text-neutral-900 hover:text-black h-8 px-3 flex justify-center items-center gap-2"}>
                    <CameraIcon size={16} strokeWidth={2}/>
                    Scan</Button>
            </div>
        </div>
    </header>
}
