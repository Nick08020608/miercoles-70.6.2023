import React,{useState} from 'react';
import "./Header.css"

const Header = () => {
    const [Header, setHeader] = useState(false);

    const handleClick = ({text}) => {
        setHeader(!Header);
    };

    return (
        <div>
            <h1>Header:</h1>
            <header className='encabezado'>Header</header>
        </div>
    );
}

export default Header;