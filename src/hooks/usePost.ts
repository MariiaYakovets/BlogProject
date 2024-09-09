import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface IusePost {
	useId: number;
	id: number;
	title: string;
	body: string;
}

function usePost(id: number) {
	const [post, setPost] = useState<IusePost>();
	const [error, setError] = useState<string | null>("");
	const [loading, setLoading] = useState<boolean>(false);
	

	useEffect(() => {
		async function getPost() {
			try {
				setLoading(true);
				const response = await axios.get(
					`http://localhost:8000/post/${id}/`
				);
				setPost(response.data);
				setError(null);
			} catch (err: AxiosError | any) {
				setError(err.message);
				console.log(err);
			} finally {
				setLoading(false);
			}
		}
		getPost();
	}, []);

	return { post: post, error: error, loading: loading };
}

export default usePost;
