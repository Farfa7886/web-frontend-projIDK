import axios from "axios";
import config from "../../projectConfig";

const checkAuth = async () => {
  if (localStorage.getItem("token") == null) {
    window.location.href = "/login";
    return;
  }
  try {
    const response = await axios.post(
      `${config.baseAPIUrl}/checkAuth`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    //console.log("Auth OK");
    return true;
  } catch (err) {
    if (err.response.data.success == false) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
};

export default checkAuth;
