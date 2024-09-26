import { createContext, ReactNode, useState } from "react";

interface IUserContextData {
	id?: number;
	name?: string;
	email?: string;
	avatar?: string;
}

interface IUserContext {
	user: IUserContextData;
	setUser: (value: IUserContextData) => void;
}

interface IUserContextProvider {
	children: ReactNode;
}

export const userContext = createContext<IUserContext>({
	user: {},
	setUser: () => {},
});

export function UserContextProvider({ children }: IUserContextProvider) {
	const [user, setUser] = useState({});
	return (
		<userContext.Provider value={{ user: user, setUser: setUser }}>
			{children}
		</userContext.Provider>
	);
}
