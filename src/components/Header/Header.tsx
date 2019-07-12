import * as React from 'react';
import HeaderStyled from './styled';
import { IoIosSettings } from "react-icons/io";

interface HeaderComponentProps {
    children?: any
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ children = 'Markdown Preview 🕶️' }) => {
    return (
        <HeaderStyled>
            <span> {children} </span>
            <i> <IoIosSettings size={28} /> </i>
        </HeaderStyled>
    );
};

export default HeaderComponent;
