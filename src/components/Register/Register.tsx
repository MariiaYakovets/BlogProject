import React, { useEffect } from "react";
import * as styles from "./Register.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import urlRegex from "../../tools/ts/urlReg";
import { register } from "ts-node";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

interface IRegisterProps {}

interface IFormData {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

const schema = Yup.object<IFormData>().shape({
	name: Yup.string().required("This field is required"),
	email: Yup.string()
		.email("This must be a valid email")
		.required("This field is required"),
	password: Yup.string()
		.min(8, "Password must contain at least 8 characters")
		.required("This field is required"),
	avatar: Yup.string()
		.matches(urlRegex, "This must be a valid url")
		.required("This field is required"),
});

export default function Register(props: IRegisterProps) {
	const {} = props;
	const {
		register,
		formState: { errors: errors },
		handleSubmit,
		reset,
        
	} = useForm({ resolver: yupResolver(schema)});

	function sendRegisterData(data: IFormData) {
        
        async function sendForm(){
            try{
                let response = await axios.post("http://localhost:8000/user/api/register", data)
                let token = response.data
                console.log(token)
            }catch(err: AxiosError | any){
                console.log(err.message)
            }
        }
        sendForm()
		console.log(data);
		reset();
	}

	return (
		<div className={styles.Register}>
			<h1 className={styles.Heading}> Registration </h1>
			<form onSubmit={handleSubmit(sendRegisterData)}>
				<input
					type="text"
					{...register("name")}
					placeholder="Username"
				/>
				<p>{errors?.name?.message}</p>
				<input type="text" {...register("email")} placeholder="Email" />
				<p>{errors?.email?.message}</p>
				<input
					type="text"
					{...register("password")}
					placeholder="Password"
				/>
				<p>{errors?.password?.message}</p>
				<input
					type="text"
					{...register("avatar")}
					placeholder="Upload a link for your avatar"
				/>
				<p>{errors?.avatar?.message}</p>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
