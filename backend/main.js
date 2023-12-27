require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const redis = require("redis");
const expressWs = require("express-ws");
const CryptoJS = require("crypto-js");

const app = express();

expressWs(app);

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.get('/', (req, res) => {
  res.send('Hello World! 3')
})

app.post('/invalidate-key', async (_, res) => {
  let channelClient;

  channelClient = await redis.createClient({
    url: process.env.REDIS_SERVER,
  });

  await channelClient.connect();
  await channelClient.publish('absensi-socket', '0');
  await channelClient.disconnect();

  res.send('Invalidated');
})

const absensiSocket = async (ws, req) => {
  let channelClient;
  let valueClient;

  ws.on("close", () => {
    channelClient.disconnect();
    valueClient.disconnect();
  });

  channelClient = redis.createClient({
    url: process.env.REDIS_SERVER,
  });

  valueClient = redis.createClient({
    url: process.env.REDIS_SERVER,
  });

  await channelClient.connect();
  await channelClient.del('absensi-key');
  await channelClient.set('absensi-key', generateAbsensiKey());

  await valueClient.connect();

  ws.send(await channelClient.get('absensi-key'))
  await channelClient.subscribe('absensi-socket', async () => {
    const newKey = generateAbsensiKey();

    await valueClient.set('absensi-key', newKey);

    console.log('key: ', newKey);

    ws.send(newKey);
  });
};

const generateAbsensiKey = () => {
  const string = Date.now().toString()
  const hash = CryptoJS.SHA256(string).toString();

  return hash;
}

app.ws(
  "/absensi",
  absensiSocket
);


app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST);