import request from "./api";

export function allCases() {
  return request
    .get("/all")
    .then(response => response)
    .catch(err => Promise.reject(err));
}
