import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { hash } from "bcrypt";

export default async function getusers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const users = await db.all("select * from users");
    res.json(users);
  }

  hash(req.body.password, 12, async function (err, hash) {
    const post = await db.run(
      "INSERT INTO users (name, email, password, admin) VALUES (?,?,?,?) ",
      req.body.name,
      req.body.email,
      hash,
      req.body.admin
    );
    res.statusCode = 200;
    res.json(post);
  });
}
