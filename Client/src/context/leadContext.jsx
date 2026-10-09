import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth";
export const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [lead, setlead] = useState();
  const [createlead, setcreatelead] = useState(false);
  const [loading, setLoading] = useState(true);
  const rootUrl = "http://localhost:3000";
  const {user} = useAuth()

  const checklead = async () => {
    try {
        setLoading(true);
      const response = await axios.get(`${rootUrl}/api/lead`, {
        withCredentials: true,
      });
      setlead(response.data.leads);
    } catch (err) {
      setlead("");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  if (user) {
    checklead();
  } else {
    setlead(null);
    setLoading(false);
  }
}, [user]);

  const create = async (formData) => {
    try {
      const response = await axios.post(
        `${rootUrl}/api/lead/create`,
        formData,
        {
          withCredentials: true,
        },
      );

      setlead(response.data.lead);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LeadContext.Provider
      value={{ checklead,create,loading, lead, createlead, setcreatelead,rootUrl }}
    >
      {children}
    </LeadContext.Provider>
  );
}
