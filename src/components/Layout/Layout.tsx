import React, { ReactNode } from "react";
import * as styles from "./Layout.module.css";

interface ILayoutProps {
	children?: ReactNode;
}

export default function Layout(props: ILayoutProps) {
	const { children } = props;

	return <div className={styles.Layout}>{children}</div>;
}
