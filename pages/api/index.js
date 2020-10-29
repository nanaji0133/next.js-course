// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import cors from "cors";
import nc from "next-connect";


const handler = nc()

  .use(cors())

  .get((req, res) =>
  {
    res.send("Hello World");
  })

  .post((req, res) =>
  {
    res.json({ hello: "world" });
  })

  .put(async (req, res) =>
  {
    res.end("hello");
  });




export default handler;
