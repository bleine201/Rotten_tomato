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
  const date = req.query.date;
  const producer = req.query.producer;
  const genre = req.query.genre;

  if (req.method === "GET") {
  
  const post = await db.get(
    "select * from movies where date = ? or   producer = ? or  genre = ?",
    date,producer,genre
   
  );
  res.statusCode = 200;
  res.json(post);
  }

}
