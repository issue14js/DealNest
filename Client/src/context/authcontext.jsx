import axios from "axios";
import { createContext, useState } from "react";


 export const AuthContext = createContext()

 export function AuthProvider({children}){
    const [user,setUser] = useState(``)
    const [loading, setLoading] = useState(true)
    const rootUrl = "http://localhost:3000"

    const register = async (formData)=>{
        try{
            const response = await axios.post(`${rootUrl}/api/auth/register`,formData,{withCredentials:true})
            console.log(response.data)
            setUser(response.data.user)
            return
        }catch(err){
         console.log("User Register falid",err)
    }

    }

    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            loading,
            setLoading,
            register,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
 }