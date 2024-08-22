import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface IUseComments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

function useComments(id: number) {
	const [comments, setComments] = useState<IUseComments[]>([]);
	const [error, setError] = useState<string | null>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		async function getComments() {
			try {
				setLoading(true);
				let response = await axios.get(
					`https://jsonplaceholder.typicode.com/posts/${id}/comments`
				);
				setComments(response.data);
				setError(null);
			} catch (err: AxiosError | any) {
				setError(err.message);
				console.log(err);
			} finally {
				setLoading(false);
			}
		}
		getComments();
	}, []);

	return { comments: comments, error: error, loading: loading };
}

export default useComments;
