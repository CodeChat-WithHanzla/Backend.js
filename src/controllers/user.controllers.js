import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;
  console.log(username);

  if (
    [username, email, fullName, password].some((field) => field?.trim() === "")
  )
    throw new ApiError(400, `${field} is required!! `);

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser)
    throw new ApiError(409, "User with Email or User Name exists");

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.field?.coverImage[0]?.path
});
export { registerUser };
