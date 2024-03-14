export default function TextBlock({ title, data, text }) {

    //Destructor Object als alternative zu direkter Destrukturierung
    //const {title, data, text} = props; 

    console.log("textBlock", title, data, text)
    //Function Component is STATEFULL
    //Class Component is STATELESS - nicht mehr aktuell verwendbar...

    //Alternative zu dem aktuellen return
    {/** <Fragment>
            <h3>{title}</h3>
            <p>{text}</p>
        </Fragment> */}


    return (
        <>
            <h3>{title}</h3>
            <p>{text}</p>

        </>

    )
}