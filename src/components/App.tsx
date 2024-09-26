import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import Layout from "./Layout/Layout";
import StartPage from "./StartPage/StartPage";
import Header from "./Header/Header";
import "./main.module.css";
import * as styles from "./App.module.css";
import CreatePost from "./Post/CreatePost/CreatePost";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { UserContextProvider } from "../context/userContext";
import Profile from "./Profile/Profile";
import { TokenContextProvider } from "../context/tokenContext";

function AppComponent() {
	return (
		<div className={styles.App}>
			<Layout>
				<Header></Header>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/posts/my" element={<MyPosts />} />
					<Route path="/posts/:id" element={<Post />} />
					<Route path="/posts/create" element={<CreatePost />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Layout>
		</div>
	);
}

function App() {
	return (
		<UserContextProvider>
			<TokenContextProvider>
				<BrowserRouter>
					<AppComponent />
				</BrowserRouter>
			</TokenContextProvider>
		</UserContextProvider>
	);
}

export default App;
