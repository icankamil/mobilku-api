const { Profile } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  create(payload, photo5, photo10) {
    // console.log(payload);
    return Profile.create({
      nama: payload.name,
      tanggallahir: payload.date,
      usia: payload.usia,
      whatsapp: payload.mobile,
      asalkota: payload.city,
      pendidikan: payload.education,
      foto500: photo5,
      foto1000: photo10,
    })
      .then((response) => response)
      .catch((err) => err);
  },
  update(payload, id) {
    return Profile.update(
      { ...payload },
      {
        where: {
          id,
        },
      }
    )
      .then((response) => response)
      .catch((err) => err);
  },
  updateimg(payload, photo500, photo1000, id) {
    return Profile.update(
      {
        foto500: photo500,
        foto1000: photo1000,
        ...payload,
      },
      {
        where: {
          id,
        },
      }
    )
      .then((response) => response)
      .catch((err) => err);
  },
  get(id) {
    return Profile.findOne({
      where: {
        id,
      },
    })
      .then((response) => response)
      .catch((err) => err);
  },
  getAll() {
    return Profile.findAll({
      attributes: [
        "nama",
        "tanggallahir",
        "usia",
        "whatsapp",
        "asalkota",
        "pendidikan",
        "foto500",
      ],
    })
      .then((response) => response)
      .catch((err) => err);
  },
  delete(id) {
    return Profile.destroy({
      where: {
        id,
      },
    })
      .then((response) => response)
      .catch((err) => err);
  },
};
