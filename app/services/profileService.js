const profileRepository = require("../repositories/profileRepository");
const sharp = require("sharp");
const path = require("path");

module.exports = {
  async create(payload, photo, protocol, host) {
    try {
      const ext = path.extname(photo.name);
      const namaimg = Date.now();
      const storeimg = `${protocol}://${host}/uploads/${namaimg}`;
      payload.photo500 = `${storeimg}-500${ext}`;
      payload.photo1000 = `${storeimg}-1000${ext}`;
      await profileRepository.create(
        payload,
        payload.photo500,
        payload.photo1000
      );
      await sharp(photo.data)
        .resize(500, 500)
        .toFile(`uploads/${namaimg}-500${ext}`);
      await sharp(photo.data)
        .resize(1000, 1000)
        .toFile(`uploads/${namaimg}-1000${ext}`);
      return JSON.stringify({
        message: `Selamat , akun anda berhasil dibuat!. Silakan verifikasi akun anda melalui email yang didaftarkan`,
      });
    } catch (err) {
      return Error(err);
    }
  },
  async getAll() {
    try {
      const result = await profileRepository.getAll();
      return result;
    } catch (err) {
      return Error({ message: "Ada kegagalan sistem, mohon dicoba kembali" });
    }
  },
  async update(payload, id, protocol, host) {
    // console.log(payload);
    try {
      if (typeof payload.gambar == typeof "string") {
        await profileRepository.update(payload.body, id);
      } else {
        const ext = path.extname(payload.files.image.name);
        const namaimg = Date.now();
        const storeimg = `${protocol}://${host}/uploads/${namaimg}`;
        payload.body.image = `${storeimg}-500${ext}`;
        payload.body.image1000 = `${storeimg}-1000${ext}`;
        await profileRepository.updateimg(
          payload.body,
          payload.body.image,
          payload.body.image1000,
          id
        );
        await sharp(payload.files.image.data)
          .resize(500, 500)
          .toFile(`uploads/${namaimg}-500${ext}`);
        await sharp(payload.files.image.data)
          .resize(1000, 1000)
          .toFile(`uploads/${namaimg}-1000${ext}`);
      }
      return `Selamat , akun anda brhasil diperbaharui! Silakan login untuk melanjutkan ke aplikasi.`;
    } catch (err) {
      return Error(err);
    }
  },
  async get(id) {
    try {
      const result = await profileRepository.get(id);
      return result;
    } catch (err) {
      return Error({ message: "Ada kegagalan sistem, mohon dicoba kembali" });
    }
  },
  async delete(id) {
    try {
      const result = await profileRepository.delete(id);
      return result;
    } catch (err) {
      return Error({ message: "Ada kegagalan sistem, mohon dicoba kembali" });
    }
  },
};
