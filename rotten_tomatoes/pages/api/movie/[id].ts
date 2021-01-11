import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { generateKeyPair } from "crypto";

export default async function getMovieById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });
  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE movies SET title= ?, summary = ?, genre= ?, producer= ?, release=?, image=?, rating=?, review=? where id = ?"
    );
    const result = await statement.run(
      req.body.title,
      req.body.summary,
      req.body.genre,
      req.body.producer,
      req.body.release,
      req.body.image,
      req.body.rating,
      req.body.review,
      req.query.id
    );
    result.finalize();
  }
  if (req.method === "POST") {
  }

  if (req.method === "DELETE") {
  }
  const movie = await db.get("select * from movies where id = ?", [
    req.query.id,
  ]);
  res.json(movie);
}
