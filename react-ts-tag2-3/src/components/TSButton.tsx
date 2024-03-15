import React from "react"

type Colors = "255,30,100,1" | "yellow" | "blue"

type ButtonType = {
    style:{
        color: Colors,
        bgColor: Colors,
        padding: [number, number?, number?, number?],
        borderRadius: string,
    }
    styles: React.CSSProperties
    text: string,
    action: ()=>number
}

const TSButton = ({ style, text, styles, action }: ButtonType) => {


    return (
        <button
            onClick={action}
            style={{
                color: `rgba(${style.color})`,
                border: "1px solid green",
                padding: `${style.padding[0]}px ${style.padding[1]}px ${style.padding[2]}px ${style.padding[3]}px`,
                backgroundColor: style.bgColor,
                borderRadius: `${style.borderRadius}px`,
                height: styles.height
            }}>
            {text}
        </button>
    )
}

export default TSButton
