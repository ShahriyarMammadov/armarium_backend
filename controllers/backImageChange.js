import { backImageModel } from "../models/backGroundImages.js";
import fs from "fs";
const uploadDir = "images/";

export const addBackImage = async (req, res) => {
  try {
    const { page } = req.body;

    if (!req.files.coverImage) {
      return res.status(200).json({
        error: "Zəhmət Olmasa Şəkil Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newIMage = new backImageModel({
      coverImage,
      page,
    });

    await newIMage.save();

    res.status(201).json({
      message: "Arxaplan şəkli uğurla dəyişdirildi.",
      newIMage: newIMage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const allBackImages = async (req, res) => {
  try {
    const images = await backImageModel.find();
    res.json(images);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editBackImage = async (req, res) => {
  try {
    const { pageName } = req.params;

    const existingImage = await backImageModel.findOne({ pageName });

    if (!existingImage) {
      return res.status(404).json({
        error: "Tapilmadi.",
      });
    }

    if (!req.files.coverImage) {
      return res.status(200).json({
        error: "Zəhmət Olmasa Yeni Şəkil Seçin",
      });
    }

    const newCoverImage = req.files.coverImage[0].filename;

    const coverImagePath = uploadDir + existingImage.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${existingImage.coverImage}`);
      } else {
        console.log(`Örtük Şəkli Sİlindi: ${existingImage.coverImage}`);
      }
    });

    existingImage.coverImage = newCoverImage;

    await existingImage.save();

    res.status(200).json({
      message: "Arxaplan şəkli uğurla Yeniləndi ve Köhnə şəkil silindi.",
      updatedImage: existingImage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBackImageByPage = async (req, res) => {
  try {
    const pageName = req.params.pageName;
    const existingImage = await backImageModel.findOne({ page: pageName });

    if (!existingImage) {
      return null;
    }
    return res.status(200).json({ image: existingImage });
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
};
