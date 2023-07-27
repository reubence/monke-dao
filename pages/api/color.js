import { createReadStream } from "fs";
import getColors from "get-colors";

export default async function handler(req, res) {
  const { image } = req.query;

  try {
    const colors = await getColors(createReadStream(`./public/${image}`));

    res.status(200).json({ color: colors[0].hex() });
  } catch (error) {
    console.log(req.query, error.message);
    res.status(500).json({ error: error.message });
  }
}
