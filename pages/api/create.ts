import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, score } = req.body;
  try {
    await supabase.from("games").insert({ id, score });
    res.status(200).send({ data: {}, message: "success" });
  } catch (error) {
    res.status(400).send({ data: {}, message: "error" });
  }
}
