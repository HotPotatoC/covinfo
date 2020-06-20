import request from "./api";

export function allCases() {
  return request
    .get("/v2/all")
    .then((response) => response)
    .catch((err) => Promise.reject(err));
}

export function allCountries(params = {}) {
  return request
    .get("/v2/countries", {params})
    .then((response) => response)
    .catch((err) => Promise.reject(err));
}

export function getCountry(country) {
  return request
    .get("/v2/countries/" + country)
    .then((response) => response)
    .catch((err) => Promise.reject(err));
}

export function getHistoricalCountry(country) {
  return request
    .get("/v2/historical/" + country)
    .then((response) => response)
    .catch((err) => Promise.reject(err));
}
