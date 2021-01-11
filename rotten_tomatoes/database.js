const sqlite = require("sqlite");

async function setup() {
  const db = await sqlite.open("./mydb.sqlite");
  await db.migrate({ force: "last" });

  const users = await db.all("SELECT * FROM users");
  //   console.log('Users:', JSON.stringify(users, null, 2));
}

setup();
