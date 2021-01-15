import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getreviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const review = await db.all(
      "select m.title, f.review,u.name from reviews as f inner  join  users as u on (f.id_users = u.id) inner join movies as m "
    );
    res.json(review);
  }
}
