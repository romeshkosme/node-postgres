import { Client } from "pg";

async function connect() {
  const client = new Client({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "testdb",
  });
  client
    .connect()
    .then(() => {
      console.log("Connected to postgres!");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
