// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã được sử dụng!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword
    });

    const createdUser = await newUser.save();

    res.status(201).json({
      status: 201,
      message: 'Tạo tài khoản thành công!',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng!' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng!' });
    }

    const token = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      status: 200,
      message: 'Đăng nhập thành công!',
      token: `Bearer ${token}`
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

