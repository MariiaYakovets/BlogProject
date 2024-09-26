import { Children, createContext, ReactNode, useState } from "react";
import useToken from "../hooks/useToken";

interface IToken{
    token: string,
    updateToken: ()=>void
}

interface ITokenProvider{
    children: ReactNode
}

export const tokenContext = createContext<IToken>({token: '', updateToken: ()=>{}})

export function TokenContextProvider({children}: ITokenProvider){
    const {token: token, updateToken: updateToken} = useToken()
    return(
        <tokenContext.Provider value={{token: token, updateToken: updateToken}}>
            {children}
        </tokenContext.Provider>
    )
}