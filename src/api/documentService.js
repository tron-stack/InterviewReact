import axiosClient from "./axios";

export const getToken = () =>
  localStorage.getItem("Authorization")
    ? localStorage.getItem("Authorization")
    : null;

export const getAuthorizationHeader = () => `${getToken()}`;

const uploadDocument = async (instance, user) => {
  const arrayBuffer = await instance.exportPDF();
  const blob = new Blob([arrayBuffer], { type: "application/pdf" });
  const formData = new FormData();
  formData.append("file", blob);
//   formData.append("author", user)
  await fetch("http://localhost:8000/docs/", {
    method: "POST",
    body: formData,
    headers: { Authorization: getAuthorizationHeader(), from: user.username },
  });
};

const getAllDocuments = async (user) =>{

}

const documentService = {
  uploadDocument,
};

export default documentService;
