import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getmovies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });
  const post = await db.run(
    "SELECT * FROM movies where date = ? AND where producer = ? AND where genre = ?",
    req.body.date,
    req.body.producer,
    req.body.genre,
   
  );
  res.statusCode = 200;
  res.json(post);

}
