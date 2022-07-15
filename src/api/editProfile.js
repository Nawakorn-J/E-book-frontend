import axios from "../config/axios";

export const userEditProfile = async (input) => {
  await axios.patch("/user/profile", input);
};
