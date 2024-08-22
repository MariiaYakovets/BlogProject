import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import Layout from "./Layout/Layout";
import StartPage from "./StartPage/StartPage";
import Header from "./Header/Header";
import "./main.module.css"
import * as styles from "./App.module.css"

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Layout>
                    <Header></Header>
					<Routes>
						<Route path="/" element={<StartPage />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/posts/my" element={<MyPosts />} />
						<Route path="/posts/:id" element={<Post />} />
						{/* <Route path="/posts/:id/comments" element={<Post />} /> */}
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
