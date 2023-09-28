import { CertificateModel } from "../models/sertifikatlar.js";
import fs from "fs";
const uploadDir = "images/";

export const addCertificate = async (req, res) => {
  try {
    if (!req.files.coverImage) {
      return res.status(200).json({
        error: "Zəhmət Olmasa Sertifikatın Şəkilini Seçin",
      });
    }

    const coverImage = req.files.coverImage[0].filename;

    const newCertificate = new CertificateModel({
      coverImage,
    });

    await newCertificate.save();

    res.status(201).json({
      message: "Yeni Sertifikat Uğurla Yaradıldı",
      newCertificate: newCertificate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const allCertificate = async (req, res) => {
  try {
    const certificates = await CertificateModel.find();
    res.json(certificates.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const deletedCertificate = await CertificateModel.findOneAndDelete({
      _id: id,
    });

    console.log(deletedCertificate);

    if (!deletedCertificate) {
      return res.status(404).json({ message: "Sertifikat Tapılmadı" });
    }

    const coverImagePath = uploadDir + deletedCertificate.coverImage;
    fs.unlink(coverImagePath, (err) => {
      if (err) {
        console.error(`Error: ${deletedCertificate.coverImage}`);
      } else {
        console.log(`Cover image Silindi: ${deletedCertificate.coverImage}`);
      }
    });

    res.json({
      message: `${id} ID-li Sertifikat Silindi`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
