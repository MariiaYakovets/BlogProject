import React from "react";
import * as styles from './Login.module.css' 
import { useForm } from "react-hook-form";

interface ILoginProps {

}

export default function Login(props: ILoginProps ) {

    const {} = props
    const {
        
        handleSubmit,
        reset
    } = useForm()
    return ( 
        <div className = { styles.Login }>

        </div> 
    );
}

