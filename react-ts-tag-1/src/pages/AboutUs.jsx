import TextBlock from "../components/globals/TextBlock"

const AboutUs = () => {
    //Arrow Function declaration of Component

    const textBlockObject = {
        text: "Hallo",
        title: "title text"
    }
    return (
        <>
            <h1>About Us</h1>
            {/**Datenweitergabe an Komponente - PROP DRILL */}
            
            <TextBlock
                text="Hier ist der Text für AboutUs"
                title="About Us"
                data={textBlockObject}
            />

            <TextBlock
                text="Das ist der passende Text"
                title="Zweite Komponente"
            />

        </>
    )
}

export default AboutUs

