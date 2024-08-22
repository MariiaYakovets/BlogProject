import React from "react";
import * as styles from './StartPage.module.css' 

interface IStartPageProps {

}

export default function StartPage(props: IStartPageProps ) {

    const {} = props

    return ( 
        <div className = { styles.StartPage }>
            <h1>Welcome</h1>
        </div> 
    );
}

