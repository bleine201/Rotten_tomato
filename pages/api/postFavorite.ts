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

  
  if (req.body.id_movies != "") {
  const post = await db.run(
    "INSERT INTO favorites (id_movies, id_users) VALUES (?,?) ",
    req.body.id_movies,
    req.body.id_users
  );
  res.statusCode = 200;
  res.json(post);
}}
