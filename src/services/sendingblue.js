import axios from "axios";

export const SendContato = async (data) => {
  const response = await axios.post("/api/send-email", data);
  return response.data;
};
