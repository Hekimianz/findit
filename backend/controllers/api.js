const prisma = require("../config/prismaConfig");

exports.getLevels = async (req, res) => {
  try {
    const levels = await prisma.level.findMany();
    res.status(200).json({ levels });
  } catch (err) {
    console.error("Error fetching levels");
    res.status(500).json({ error: err });
  }
};

exports.getLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await prisma.level.findUnique({
      where: { id },
    });
    res.status(200).json({ level });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};
