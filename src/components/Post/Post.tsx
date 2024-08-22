import React, { useState } from "react";
import * as styles from "./Post.module.css";
import usePost from "../../hooks/usePost";
import { Link, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

interface IPostProps {}

export default function Post(props: IPostProps) {
	const { id } = useParams();
	const {} = props;
	const {
		post: post,
		error: error,
		loading: loading,
	} = usePost(id ? +id : 0);
	const [show, setShow] = useState<boolean>(false);

	function showComments() {
		// при вызове функции, предидуще-запомненное значение show 
		// меняется на противоположное и запоминается
		setShow(!show);
	}

	return (
		<div className={styles.Post}>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
			<button onClick={showComments}>see comments</button>
			{/* передаем айди из ссылки тк получение коментариев из апи запросом get происходит долго, 
			а айди нужно моментально */}
			{show ? <Comments id={id ? +id : 0} /> : ""}
		</div>
	);
}
