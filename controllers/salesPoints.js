import { salesPointModel } from "../models/salesPoint.js";

export const createSalesPoint = async (req, res) => {
  try {
    const {
      gosterilenXidmetler,
      saat,
      address,
      phoneNumber,
      email,
      contactPerson,
    } = req.body;

    console.log(req.body.saat);

    const salesPoint = new salesPointModel({
      gosterilenXidmetler,
      saat,
      address,
      phoneNumber,
      email,
      contactPerson,
    });

    await salesPoint.save();

    res.status(201).json({ message: "Uğurla yaradıldı.", data: salesPoint });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const allSalesPoint = async (req, res) => {
  try {
    const salesPoints = await salesPointModel.find();
    return res.status(200).json(salesPoints.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSalesById = async (req, res) => {
  try {
    const { id } = req.params;

    const salesPoint = await salesPointModel.findById(id);

    if (!salesPoint) {
      return res.status(404).json({ message: "Tapılmadı" });
    }

    res.status(200).json({ data: salesPoint });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editSalesPoint = async (req, res) => {
  try {
    const {
      gosterilenXidmetler,
      saat,
      address,
      phoneNumber,
      email,
      contactPerson,
    } = req.body;
    const { id } = req.params;

    const salesPointData = await salesPointModel.findOne({ _id: id });

    if (!salesPointData) {
      return res.status(404).json({ message: "Tapilmadi" });
    }

    salesPointData.gosterilenXidmetler = gosterilenXidmetler;
    salesPointData.saat = saat;
    salesPointData.phoneNumber = phoneNumber;
    salesPointData.address = address;
    salesPointData.email = email;
    salesPointData.contactPerson = contactPerson;

    await salesPointData.save();

    res.status(200).json({ message: "Redaktə Edildi", data: salesPointData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
