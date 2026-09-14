import { updatePassword } from "../models/passwordModel.js";

export const editPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const updatedPassword = await updatePassword(id, password);
    if (!updatedPassword) {
      return res.status(404).json({ message: "User not updated" });
    }
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update password" });
  }
};
