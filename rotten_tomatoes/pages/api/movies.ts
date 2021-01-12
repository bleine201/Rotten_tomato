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
    "INSERT INTO users (title, summary, image, average) VALUES (?,?,?,?) ",
    req.body.title,
    req.body.summary,
    req.body.image,
    req.body.average,
  );
  res.statusCode = 200;
  res.json(post);
}
