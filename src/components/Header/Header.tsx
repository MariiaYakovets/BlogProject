import React from "react";
import * as styles from './Header.module.css' 
import NavBar from "./NavBar/NavBar";

interface IHeaderProps {

}

export default function Header(props: IHeaderProps ) {

    const {} = props

    return ( 
        <div className = { styles.Header }>
            <NavBar/>
        </div> 
    );
}

