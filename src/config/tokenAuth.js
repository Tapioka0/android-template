import { clientAxios } from "./clientAxios";

export const tokenAuth = async (token) => {
  if (token) clientAxios.defaults.headers.common["x-auth-token"] = token;
  else delete clientAxios.defaults.headers.common["x-auth-token"];
};
