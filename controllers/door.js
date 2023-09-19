import { doorsModel } from "../models/door.js";
import fs from "fs";
const uploadDir = "images/";

export const addDoor = async (req, res) => {
  try {
    const { id } = req.body;

    const existingDoor = await doorsModel.findOne({ id });

    if (existingDoor) {
      return res.status(200).json({ message: "Bu Ad-da bir mebel zatən var." });
    }

    if (!req.files.coverImage) {
      return res.status(200).json({
        error: "Zəhmət Olmasa Örtük Şəkli Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newDoor = new doorsModel({
      id,
      coverImage,
    });

    await newDoor.save();

    res
      .status(201)
      .json({ message: "Yeni Mebel Uğurla Yaradıldı", newDoor: newDoor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const allDoors = async (req, res) => {
  try {
    const doors = await doorsModel.find();
    return res.json(doors.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteDoorById = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedDoor = await doorsModel.findOneAndDelete({
      _id: id,
    });

    if (!deletedDoor) {
      return res.status(200).json({ message: `${id} ID-li Mebel Tapılmadı` });
    }

    const coverImagePath = uploadDir + deletedDoor.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedDoor.coverImage}`);
      } else {
        console.log(`Örtük Şəkli Sİlindi: ${deletedDoor.coverImage}`);
      }
    });

    res.json({
      message: `${id} ID-li Mebel Uğurla Silindi.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
