import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ZWALLET,
});

export const UploadFileRequest = () => {
  return {
    type: "UPLOAD_REQUEST",
  };
};

export const UploadFileSucces = (data) => {
  return {
    type: "UPLOAD_SUCCES",
    payload: data,
  };
};

export const UploadFileFail = () => {
  return {
    type: "UPLOAD_FAIL",
  };
};

export const ChangePhoto = ({FormUpdateUser}) => {
  return (dispatch) => {
    dispatch(UploadFileRequest());
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return api
      .put("/users/profile/photo", FormUpdateUser, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      })
      .then((res) => {
        const data = res.data?.data
        dispatch(UploadFileSucces(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UploadFileFail(message));
      });
  };
};
