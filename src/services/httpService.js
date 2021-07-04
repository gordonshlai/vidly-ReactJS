import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

/**
 * Intercepter is called before the request passes to the server, or the response passes to the UI.
 */
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

/**
 * This will include the 'x-auth-token' in all http request.
 */
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
