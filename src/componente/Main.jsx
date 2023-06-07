import React,{useState} from "react";
import "./Main.css"


const Main = () => {
    const [Main, setMain] = useState(false);

    const handleClick = ({text}) => {
        setMain(!Main);
    };

    return (
        <div>
            <h1>Main:</h1>
            <main className='main'>Main</main>
        </div>
    );
}

export default Main;