import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface IPosts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function usePosts(): {
	posts: IPosts[];
	error: string | null;
	loading: boolean;
} {
	let [posts, setPosts] = useState<IPosts[]>([]);
	let [error, setError] = useState<string | null>(null);
	let [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		async function getPosts() {
			try {
				setLoading(true);
				let response = await axios.get("http://localhost:8000/post/all", {
					headers: {
						"Content-Type": "application/json",
						// "Access-Control-Allow-Origin": "*",
						// "Access-Control-Allow-Headers": "X-Requested-With",
						// "Access-Control-Allow-Credentials": "true",
					},
				});
				setPosts(response.data);
				setError(null);
			} catch (err: AxiosError | any) {
				console.log(err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		getPosts();
	}, []);

	return { posts: posts, error: error, loading: loading };
}

export default usePosts;
