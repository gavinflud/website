import axios from "axios";

const URL = "http://localhost:8080";

/**
 * The available HTTP request types.
 */
export const RequestType = {
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  POST: "post",
  DELETE: "delete"
};

/**
 * Sends a request to the server.
 *
 * @param {String} type The HTTP request type
 * @param {String} path The path to append to the URL
 * @param {Object} params The request parameters (optional)
 * @param {Object} body The request body (optional)
 * @param {boolean} withCredentials True if sending credentials
 */
export const sendRequest = (type, path, params, body, withCredentials) => {
  const request = {
    method: type,
    url: URL + path
  };

  if (params) {
    request["params"] = params;
  }

  if (body) {
    request["data"] = body;
  }

  if (withCredentials) {
    request["withCredentials"] = true;
  }

  return axios(request);
};

export const performActionIfLoggedIn = (onSuccess, onError) => {
  getLoggedInUser()
    .then(user => onSuccess(user))
    .catch(() => {
      if (onError) {
        onError();
      }
    });
};

export const getLoggedInUser = () => {
  return new Promise((resolve, reject) => {
    sendRequest(RequestType.GET, "/api/users/current", null, null, true)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => reject());
  });
};
