import { zemanetModel } from "../models/zemanet.js";

export const createZemanet = async (req, res) => {
  try {
    const { about } = req.body;

    const newAbout = new zemanetModel({
      about,
    });

    await newAbout.save();

    res.status(201).json({ message: "Uğurla yaradıldı.", data: newAbout });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getZemanetById = async (req, res) => {
  try {
    const id = req.params.id;

    const about = await zemanetModel.findById(id);

    if (!about) {
      return res.status(404).json({ message: "Tapılmadı" });
    }

    res.status(200).json({ data: about });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editZemanet = async (req, res) => {
  try {
    const { about } = req.body;
    const id = req.params.id;

    const aboutData = await zemanetModel.findOne({ _id: id });

    if (!about) {
      return res.status(404).json({ message: "Tapilmadi" });
    }

    aboutData.about = about;

    await aboutData.save();

    res.status(200).json({ message: "Redaktə Edildi", data: aboutData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
