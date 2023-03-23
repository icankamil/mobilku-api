const profileService = require("../services/profileService");

module.exports = {
  async insert(req, res) {
    // console.log(req.files);
    const { image } = req.files;
    profileService
      .create(req.body, image, req.protocol, req.get("host"))
      .then((result) => {
        //console.log(password)
        typeof result == typeof "string"
          ? res.status(200).send(result)
          : res.status(400).send(`${result}`);
      });
  },
  async update(req, res) {
    profileService
      .update(req, req.params.id, req.protocol, req.get("host"))
      .then((result) => {
        //   console.log(result);
        typeof result == typeof "string"
          ? res.status(200).send(result)
          : res.status(400).json(`${result}`);
      });
  },
  async get(req, res) {
    const id = req.params.id;
    //const key = req.route.path.split("/")[2];
    profileService.get(id).then((result) => {
      //console.log(result);
      typeof result != typeof "string"
        ? res.status(200).json({ data: result })
        : res.status(400).json(`${result}`);
    });
  },

  async getAll(req, res) {
    profileService.getAll().then((result) => {
      //console.log(result);
      typeof result != typeof "string"
        ? res.status(200).json({ data: result })
        : res.status(400).json(`${result}`);
    });
  },

  async delete(req, res) {
    const id = req.params.id;
    //const key = req.route.path.split("/")[2];
    profileService.delete(id).then((result) => {
      //console.log(result);
      typeof result != typeof "string"
        ? res.sendStatus(200).send(result)
        : res.status(400).json(`${result}`);
    });
  },
};
