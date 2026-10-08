import axios from "axios";
import { createContext, useState } from "react";
export const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [lead, setlead] = useState();
  const [createlead, setcreatelead] = useState(false);
  const [loading, setLoading] = useState(true);
  const rootUrl = "http://localhost:3000";

  const checklead = async () => {
    try {
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
  const create = async (formData) => {
    try {
        console.log("route gaya")
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
      value={{ checklead,create, lead, createlead, setcreatelead }}
    >
      {children}
    </LeadContext.Provider>
  );
}
