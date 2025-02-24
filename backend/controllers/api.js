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

exports.addToLeaderboard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, time } = req.body;
    const record = await prisma.leaderboard.create({
      data: {
        levelId: id,
        name: name,
        time: time,
      },
    });
    res.status(200).json({ record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const { id } = req.params;
    const leaderboard = prisma.leaderboard.findMany({
      where: { levelId: id },
    });
    res.status(200).json({ leaderboard });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};
