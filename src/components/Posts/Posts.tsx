import React from "react";
import * as styles from "./Posts.module.css";
import usePosts from "../../hooks/usePosts";
import { Vortex } from "react-loader-spinner";
import { Link } from "react-router-dom";

interface IPostsProps {}

export default function Posts(props: IPostsProps) {
	const {} = props;
	const { posts: posts, error: error, loading: loading } = usePosts();
	return (
		<div className={styles.Posts}>
			{loading ? (
				<Vortex
					visible={true}
					height="80"
					width="80"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={[
						"pink",
						"purple",
						"pink",
						"pink",
						"purple",
						"purple",
					]}
				/>
			) : error ? (
				error
			) : (
				<div>
					<h1 className={styles.Heading}> All posts</h1>
					{posts.map((post) => {
						return (
							<div key={post.id} className={styles.Post}>
								<Link to={`/posts/${post.id}`}>
									{post.title}
								</Link>
								<hr />
							</div>
						);
					})}
				</div>
			)}
			<div className={styles.CreateButton}>
				<Link to={'create'}>Create new Post</Link>
			</div>
		</div>
	);
}
