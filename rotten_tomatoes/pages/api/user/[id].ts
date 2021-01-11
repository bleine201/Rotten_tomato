import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getUserById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE users SET name= ?, email = ? where id = ?"
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    result.finalize();
  }

  if (req.method === "POST") {
  }

  if (req.method === "DELETE") {
  }
  const person = await db.get("select * from users where id = ?", [
    req.query.id,
  ]);
  res.json(person);
}
