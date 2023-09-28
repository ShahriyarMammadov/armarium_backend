import { aboutModel } from "../models/haqqimizda.js";

export const createAbout = async (req, res) => {
  try {
    const { about } = req.body;

    const newAbout = new aboutModel({
      about,
    });

    await newAbout.save();

    res.status(201).json({ message: "Uğurla yaradıldı.", data: newAbout });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAboutById = async (req, res) => {
  try {
    const id = req.params.id;

    const about = await aboutModel.findById(id);

    if (!about) {
      return res.status(404).json({ message: "Tapılmadı" });
    }

    res.status(200).json({ data: about });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editAbout = async (req, res) => {
  try {
    const id = req.params.id;
    const { about } = req.body;

    const aboutData = await aboutModel.findOne({ _id: id });

    if (!aboutData) {
      return res.status(404).json({ message: "Tapılmadı" });
    }

    aboutData.about = about;

    await aboutData.save();

    res.status(200).json({ message: "Redaktə Edildi", data: aboutData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
