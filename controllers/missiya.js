import { missionModel } from "../models/missiya.js";

export const createMission = async (req, res) => {
  try {
    const { about } = req.body;

    const newAbout = new missionModel({
      about,
    });

    await newAbout.save();

    res.status(201).json({ message: "Uğurla yaradıldı.", data: newAbout });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMissionById = async (req, res) => {
  try {
    const id = req.params.id;

    const about = await missionModel.findById(id);

    if (!about) {
      return res.status(404).json({ message: "Tapılmadı" });
    }

    res.status(200).json({ data: about });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editMission = async (req, res) => {
  try {
    const { about } = req.body;
    const id = req.params.id;

    const aboutData = await missionModel.findOne({ _id: id });

    if (!about) {
      return res.status(404).json({ message: "Belge bulunamadı" });
    }

    aboutData.about = about;

    await aboutData.save();

    res.status(200).json({ message: "Redaktə Edildi", data: aboutData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
