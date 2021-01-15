import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getfavorite(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const favorite = await db.all(
      "select m.title,u.name from favorites as f inner  join  users as u on (f.id_users = u.id) inner join movies as m "
    );
    res.json(favorite);
  }
  }
