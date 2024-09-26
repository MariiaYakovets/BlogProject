import { useCallback, useEffect, useState } from "react";

interface IUseToken {
	token: string;
	updateToken: () => void;
}

function useToken(): IUseToken {
	const [token, setToken] = useState<string>("");
	const updateToken = useCallback(setLocalStorageToken, []);

	useEffect(() => {
		updateToken();
	}, [updateToken]);

	function setLocalStorageToken() {
		let localStorageToken = localStorage.getItem("token");
		setToken(localStorageToken ? localStorageToken : "");
	}

	return { token: token, updateToken: updateToken };
}

export default useToken;
