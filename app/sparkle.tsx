'use client'

function classNames(...classes: Array<string>): string {
    return classes.filter(Boolean).join(` `)
}

interface IIconProps {
    className?: string
    hasGradient?: boolean
    stops?: Array<{
        offset?: number
        color: string
        opacity?: number
    }>
    rotateGradient?: number
}

interface IIconParentProps extends IIconProps {
    sourceSvgWidth?: number
    sourceSvgHeight?: number
    children: any
}

function Icon({
                  children,
                  className,
                  stops,
                  rotateGradient,
                  hasGradient = false,
                  sourceSvgWidth = 24,
                  sourceSvgHeight = 24,
              }: IIconParentProps) {
    const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${sourceSvgWidth} ${sourceSvgHeight}`}
            className={classNames(
                hasGradient ? `` : `fill-current`,
                className ? className : `w-6 h-6 text-black`
            )}
            fill={hasGradient ? `url(#${gradientId})` : ``}
        >
            {hasGradient && (
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                        gradientTransform={`rotate(${
                            typeof rotateGradient !== `undefined` ? rotateGradient : 25
                        })`}
                    >
                        {stops ? (
                            <>
                                {stops.map((stop, index) => (
                                    <stop
                                        key={index}
                                        offset={
                                            stop?.offset
                                                ? `${stop.offset}%`
                                                : index === 0
                                                    ? `0%`
                                                    : index === stops.length
                                                        ? `100%`
                                                        : `${index * (100 / (stops.length - 1))}%`
                                        }
                                        style={{
                                            stopColor: stop.color,
                                            stopOpacity: stop?.opacity ? stop.opacity : 1,
                                        }}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                <stop
                                    offset={`0%`}
                                    style={{
                                        stopColor: `#005590`,
                                        stopOpacity: 1,
                                    }}
                                />
                                <stop
                                    offset={`50%`}
                                    style={{
                                        stopColor: `#007b91`,
                                        stopOpacity: 1,
                                    }}
                                />
                                <stop
                                    offset={`100%`}
                                    style={{
                                        stopColor: `#56a730`,
                                        stopOpacity: 1,
                                    }}
                                />
                            </>
                        )}
                    </linearGradient>
                </defs>
            )}
            {children}
        </svg>
    )
}

export function Sparkle(props: IIconProps) {
    return (
        <Icon sourceSvgHeight={24} sourceSvgWidth={24} {...props}>

            <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        </Icon>
    )
}
