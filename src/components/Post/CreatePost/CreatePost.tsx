import React from "react";
import * as styles from "./CreatePost.module.css";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import urlRegex from "../../../tools/ts/urlReg";

interface ICreatePostProps {}
interface IFormData {
	title?: string;
	body?: string;
	image?: string;
}
const schema = Yup.object<IFormData>().shape({
    title: Yup.string().required('This field is required'),
    body: Yup.string().required('This field is required'),
    image: Yup.string().matches(urlRegex, 'This must be a valid url').required('This field is required')
})

export default function CreatePost(props: ICreatePostProps) {
	const {} = props;
	const {
		register,
		formState: { errors: errors },
		handleSubmit,
        reset
	} = useForm({resolver: yupResolver(schema)});

	function sendPostData(data: IFormData) {
		console.log(data);
		
        reset()
	}

	return (
		<div className={styles.CreatePost}>
			<h1 className={styles.Heading}> Create a new post</h1>
			<form onSubmit={handleSubmit(sendPostData)}>
                <input type="text" {...register('title')} placeholder="Title" /> 
                <p>{errors?.title?.message}</p>
                <input type="text" {...register('body')} placeholder="Body" />
                <p>{errors?.body?.message}</p>
                <input type="text" {...register('image')} placeholder="Image url" />
                <p>{errors?.image?.message}</p>
                <button type="submit">Submit</button>
            </form>
		</div>
	);
}
