const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "Email is required" };
      if (!password) throw { name: "Password is required" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "Invalid Email/Password" };

      const isPasswordValid = comparePassword(password, user.password);
      if (!isPasswordValid) throw { name: "Invalid Email/Password" };

      const access_token = signToken({ id: user.id });

      res.status(200).json({ access_token });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async register(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ email: user.email, role: user.role });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
