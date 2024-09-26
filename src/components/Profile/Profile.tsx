import React, { useContext } from "react";
import * as styles from "./Profile.module.css";
import { userContext } from "../../context/userContext";
import { Link } from "react-router-dom";

interface IProfileProps {}

export default function Profile(props: IProfileProps) {
	const {} = props;
	const { user, setUser } = useContext(userContext);


	return (
		<div className={styles.Profile}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <img src={user.avatar} alt="" />
			<button
				onClick={() => {
					setUser({
						id: 1,
						name: "test",
						email: "kzcnis@dn.xc",
						avatar: "https://cdn-icons-png.freepik.com/512/9703/9703065.png?ga=GA1.1.930059632.1710445204",
					});
				}}
			>
				sofjos
			</button>
            <Link to={'/register'}>Register</Link>
		</div>
	);
}
