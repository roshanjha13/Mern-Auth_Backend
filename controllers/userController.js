import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc Register a new User
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

// @desc Logout User
// route POST /api/users/logout
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

// @desc get User Profile
// route POST /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc update User Profile
// route POST /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile Updated" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
