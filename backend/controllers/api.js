const prisma = require("../config/prismaConfig");

exports.GetLevels = async (req, res) => {
  try {
    const levels = await prisma.level.findMany();
    res.status(200).json({ levels });
  } catch (err) {
    console.error("Error fetching levels");
    res.status(500).json({ error: err });
  }
};
