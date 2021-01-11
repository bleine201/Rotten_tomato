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

  if (req.method === "GET") {
    const movies = await db.all("select * from movies");
    res.statusCode = 200;
    res.json(movies);
  }

  const post = await db.run(
    "INSERT INTO users (title, summary) VALUES (?,?) ",
    req.body.title,
    req.body.summary
  );
  res.statusCode = 200;
  res.json(post);
}
