import TSButton from '@/components/TSButton'
import TsButton2 from '@/components/TsButton2'

const TSExercise = () => {

    const onClick = () => {

        return 5
    }

    return (
        <div>
            <TSButton
                style={{
                    color: "255,30,100,1",
                    bgColor: 'blue',
                    padding: [5, 10, 20, 10],
                    borderRadius: '10'
                }}
                styles={{
                    height: "20px"
                }}
                text="button"
                action={onClick}
            />




            <TsButton2>

                <p>hallo</p>
                <p>hallo</p>

            </TsButton2>





        </div>
    )
}

export default TSExercise
