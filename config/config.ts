import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";

const config: Configuration = {
	entry: path.resolve(__dirname, "../src/client/index.tsx"),
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "bundle.js",
		publicPath: "/",
	},
	mode: "development",
	devServer: {
		host: "localhost",
		port: 8001,
		hot: true,
		historyApiFallback: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
		},
	},
	resolve: { extensions: [".ts", ".tsx", ".js"] },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../src/client/index.html"),
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				use: { loader: "babel-loader" },
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
			},
			{
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: "css-loader" },
				],
				test: /\.css$/,
				exclude: /node_modules/,
			},
		],
	},
};

export default config;
