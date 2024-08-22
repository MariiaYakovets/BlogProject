import React from "react";
import * as styles from './NavBar.module.css' 
import { Link } from "react-router-dom";

interface INavBarProps {

}

export default function NavBar(props: INavBarProps ) {

    const {} = props

    return ( 
        <div className = { styles.NavBar }>
            <Link to={"/posts"}> Posts</Link>
            <Link to={"/posts/my"}> My posts</Link>
            <Link to={"/profile"}> Profile</Link>
        </div> 
    );
}

