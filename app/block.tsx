
export default function Block({children, className}: any) {
    return (
        <div className={`text-white bg-[#141414] w-full p-4 rounded-xl ${className}`}>
            {children}
        </div>
    )
}

export function BlockMetrics({title, icon, content, tag, condition, className}: any){
    return (
        <Block className={`flex flex-col gap-3 font-medium ${className}`}>
            <div className={"flex gap-1.5 items-center text-sm"}>
                {icon}
                <p>{title}</p>
            </div>
            <div className={"flex gap-1 flex-col items-start"}>
                <p className={"text-xl"}>{content}</p>
                <div
                className={`${condition == 0 ? 'bg-[#331E25]' : condition == 1 ? 'bg-[#2E2C1D]' : 'bg-[#1D2C2B]'} 
                ${condition == 0 ? 'text-[#FB6591]' : condition == 1 ? 'text-[#CBC160]' : 'text-[#5CC8C3]'}
                rounded-md p-1 px-2 text-xs`}
                >{tag}</div>
            </div>
        </Block>
    )
}


export function Row({title, icon, content, className}: any){
    return (
        <div className={`flex gap-3 items-center text-neutral-200 ${className}`}>
            <div className={"shrink-0"}>
                {icon}
            </div>
            <div className={"flex flex-col"}>
                <div className={"text-sm"}>{title}</div>
                <div className={"text-lg text-white"}>{content}</div>
            </div>
        </div>
    )
}
