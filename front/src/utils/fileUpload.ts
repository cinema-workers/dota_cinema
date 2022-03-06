import axios from "axios";
import { HTMLInputElement } from "../../../interfaces/events";
export const setFile = (event: HTMLInputElement): File => {
  const file: File = event.target.files[0];
  console.log(file);
  return file;
};

export const uploadFile = async (
  file: File,
  url: string,
  pathString: string
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", pathString);
  try {
    const resp = await axios.post(url, formData);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};

// export const sendFile = async (url: string) => {
//   const request = 
// };
