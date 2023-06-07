import React,{useState} from 'react';
import "./Footer.css"

const Footer = () =>{
    const [Footer, setfooter] = useState(false);

    const handleClick = ({text}) => {
        setfooter(Footer);
    };

    return (
        <div>
            <h1>Footer</h1>
            <footer className='pie'>Pie de pagina</footer>
        </div>
    );

}

export default Footer;