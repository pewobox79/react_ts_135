import React from 'react'

type Button2Type = {
    children?: JSX.Element[] | React.ReactElement[] //equivalent

}

const ButtonTextOptions = [
    "Click mich",
    "hallo",
    "toll"
] as const

const TsButton2 = ({ children }: Button2Type) => {
    return (
        <button>
            {ButtonTextOptions.map((option) => {
                return option
            })}
        </button>
    )
}

export default TsButton2
