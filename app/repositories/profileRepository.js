const { Profile } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  create(payload, photo5, photo10) {
    // console.log(payload);
    return Profile.create({
      name: payload.name,
      date: payload.date,
      usia: payload.usia,
      mobile: payload.mobile,
      city: payload.city,
      education: payload.education,
      image: photo5,
      image1000: photo10,
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
        image: photo500,
        image1000: photo1000,
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
        "name",
        "date",
        "usia",
        "mobile",
        "city",
        "education",
        "image",
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
