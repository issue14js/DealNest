import { useContext } from "react";
import { LeadContext } from "../context/leadContext";

export function useLead(){
    return useContext(LeadContext)
}