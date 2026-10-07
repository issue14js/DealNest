import { createContext, useState } from "react";
export const LeadContext = createContext();


export function LeadProvider({children}){
    const [lead, setlead] = useState()
       const [loading, setLoading] = useState(true);
       const rootUrl = "http://localhost:3000";
 
    const checklead = async ()=>{
        try{
            const response = await axios.get(`${rootUrl}/api/lead`,{
                withCredentials: true,
            })

            setlead(response.data.lead)
        }catch(err){
            setlead('')
        }finally{
            setLoading(false)
        }
    }
    return(
        <LeadContext.Provider
        value={{checklead,lead}}
        >
            {children}
        </LeadContext.Provider>
    )


}