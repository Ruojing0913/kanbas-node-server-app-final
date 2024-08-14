import userModel from "../models/userModel.js";
export const createUser = async (user) => {
  try {
    delete user._id;
    return await userModel.create(user);
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findAllUsers = async () => {
  try {
    return await userModel.find();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findUserById = async (userId) => {
  try {
    return await userModel.findById(userId);
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findUserByUsername = async (username) => {
  try {
    return await userModel.findOne({ username: username });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findUserByCredentials = async (username, password) => {
  try {
    return await userModel.findOne({ username, password });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const updateUser = async (userId, user) => {
  try {
    return await userModel.updateOne({ _id: userId }, { $set: user });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteUser = async (userId) => {
  try {
    return await userModel.deleteOne({ _id: userId });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findUsersByPartialName = async (partialName) => {
  try {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return await userModel.find({
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};
