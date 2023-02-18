import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from("games").select("*");
    console.log(error)
    if (error) throw new Error(error.message);
    
    res.status(200).send({ data, message: "success" });
  } catch (error) {
    res.status(400).send({ data: null, message: "error" });
  }
}
