import { StringConstant } from "../assets/constants";

export function setAccessToken(token) {
  localStorage.setItem(StringConstant.Token, token);
}

export function getAccessToken() {
  return localStorage.getItem(StringConstant.Token);
}

export function removeAccessToken() {
  return localStorage.removeItem(StringConstant.Token);
}

export function setData(data) {
  localStorage.setItem(StringConstant.Data, data);
}
export function getData() {
  return localStorage.getItem(StringConstant.Data);
}
export function removeData() {
  return localStorage.removeItem(StringConstant.Data);
}

export default {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setData,
  getData,
};
