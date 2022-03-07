import axios from "axios";
export const setFile = (event) => {
    const file = event.target.files[0];
    console.log(file);
    return file;
};
export const uploadFile = async (file, url, pathString) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("path", pathString);
    try {
        const resp = await axios.post(url, formData);
        console.log(resp);
    }
    catch (e) {
        console.log(e);
    }
};
// export const sendFile = async (url: string) => {
//   const request = 
// };
//# sourceMappingURL=fileUpload.js.map