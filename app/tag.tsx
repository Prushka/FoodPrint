
export default function Tag({className, tag, condition, style, large = false, onMouseEnter, onMouseLeave}: any) {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             style={style} className={`${condition == 0 ? 'bg-[#331E25]' : condition == 1 ? 'bg-[#2E2C1D]' :
            condition == 2 ?
                'bg-[#1D2C2B]' : 'bg-neutral-800'} 
                 ${condition == 0 ? 'text-[#FB6591]' : condition == 1 ? 'text-[#CBC160]' : condition == 2 ? 'text-[#5CC8C3]' :
            'text-neutral-200'}
                 rounded-md ${large ? 'p-2 px-3 text-sm' : 'p-1 px-2 text-xs'}  ${className}`}
        >{tag}</div>
    )
}
