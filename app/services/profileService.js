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
        const ext = path.extname(payload.files.gambar.name);
        const namaimg = Date.now();
        const storeimg = `${protocol}://${host}/uploads/${namaimg}`;
        payload.body.photo500 = `${storeimg}-500${ext}`;
        payload.body.photo1000 = `${storeimg}-1000${ext}`;
        await profileRepository.updateimg(
          payload.body,
          payload.body.photo500,
          payload.body.photo1000,
          id
        );
        await sharp(payload.files.gambar.data)
          .resize(500, 500)
          .toFile(`uploads/${namaimg}-500${ext}`);
        await sharp(payload.files.gambar.data)
          .resize(1000, 1000)
          .toFile(`uploads/${namaimg}-1000${ext}`);
      }
      return `Selamat , akun anda berhasil diperbaharui! Silakan login untuk melanjutkan ke aplikasi.`;
    } catch (err) {
      return Error(
        "Maaf, credential yang anda daftarkan, telah terdaftar di dalam sistem/ada kesalahan jaringan."
      );
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
  async login(username, passwords) {
    try {
      const user_name = username;
      const user = await credentialRepository.find(user_name);
      const password = await bcrypt.compare(passwords, user.password);
      if (password == true && user.status == "active") {
        return JSON.stringify({
          token: jwt.sign(
            { username: user_name, password: password },
            process.env.JWT_SIGNATURE_KEY,
            { expiresIn: "1h" }
          ),
          id: user.id,
          nama_lengkap: user.nama_lengkap,
          roles: user.roles,
          nik: user.nik,
          message: "Login berhasil!",
        });
      } else {
        return Error(
          JSON.stringify({ message: "Anda belum terverifikasi/registrasi" })
        );
      }
    } catch (err) {
      return Error(err);
    }
  },
  async verify(token) {
    try {
      credentialRepository.verification(token);
      return JSON.stringify({
        message:
          "Akun anda berhasil diverifikasi, silakan login untuk melanjutkan ke aplikasi",
      });
    } catch (err) {
      return Error(err);
    }
  },
};
