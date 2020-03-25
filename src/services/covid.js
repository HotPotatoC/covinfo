import request from "./api";

export function allCases() {
  return request
    .get("/all")
    .then(response => response)
    .catch(err => Promise.reject(err));
}

export function allCountries() {
  return request
    .get("/countries")
    .then(response => response)
    .catch(err => Promise.reject(err));
}

export function getCountry(country) {
  return request
    .get("/countries/" + country)
    .then(response => response)
    .catch(err => Promise.reject(err));
}

export function getHistoricalCountry(country) {
  return request
    .get("/v2/historical/" + country)
    .then(response => response)
    .catch(err => Promise.reject(err));
}
