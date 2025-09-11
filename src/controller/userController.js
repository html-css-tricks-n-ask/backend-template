// userController.js
import User from "../models/userModel.js";

 const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

 const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getUsers, createUser };




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




