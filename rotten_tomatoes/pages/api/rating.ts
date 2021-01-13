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
    const rating = await db.all(
      "select m.title, f.rating,u.name from ratings as f inner  join  users as u on (f.id_users = u.id) inner join movies as m "
    );
    res.json(rating);
  }

  const post = await db.run(
    "INSERT INTO ratings (rating, id_movies, id_users) VALUES (?,?,?) ",
    req.body.rating,
    req.body.id_movies,
    req.body.id_users
  );
  res.statusCode = 200;
  res.json(post);
}
