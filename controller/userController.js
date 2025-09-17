// userController.js
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (email === password) {
      return res.status(400).json({ message: "Email and password cannot be the same." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getUsers, registerUser, loginUser };









// AFTER bc WE HAVE CONSIECE
// what is your motivation do coding why you love coding
// how to become a good developer
// how i earn very good money from coding
//  i want to crack job and remove the load from back of my parents and also remove the bank loan


// userName
// seebharat20_db_user


// pass
// mi0V7pCCFr4I0tet

// bharat-todos


// mongodb+srv://bharat-todos:mi0V7pCCFr4I0tet@todos.2sd8r36.mongodb.net/?retryWrites=true&w=majority&appName=todos
// mi0V7pCCFr4I0tet




