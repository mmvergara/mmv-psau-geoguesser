import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  try {
    const { data, error } = await supabase.from("games").select("*").match({ id }).single();
    if (error) throw new Error(error.message);
    res.status(200).send({ data, message: "success" });
  } catch (error) {
    res.status(400).send({ data: null, message: "error" });
  }
}
