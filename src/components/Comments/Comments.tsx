import React from "react";
import * as styles from "./Comments.module.css";
import useComments from "../../hooks/useComments";
import { useParams } from "react-router-dom";
import { Vortex } from "react-loader-spinner";

interface ICommentsProps {
	id: number;
}

export default function Comments(props: ICommentsProps) {
	const { id } = props;
	const {
		comments: comments,
		error: error,
		loading: loading,
	} = useComments(id ? +id : 0);

	return (
		<div className={styles.Comments}>
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
				comments.map((comment) => {
					return (
						<div key={comment.id} className={styles.Comment}>
							<div className={styles.Title}>
								<h3>{comment.name}</h3>
							</div>

							<div className={styles.CommentData}>
								<div className={styles.User}>
									<p>{comment.email}</p>
									<img
										src="https://cdn-icons-png.freepik.com/512/4556/4556913.png?ga=GA1.1.930059632.1710445204"
										alt=""
									/>
								</div>

								<p className={styles.CommentBody}>
									{comment.body}
								</p>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}
