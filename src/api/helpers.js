import axios from "ts-axios-new";

const urlMap = {
  development: "/",
  production: "/vue-sell/public/"
};
const baseUrl = urlMap[process.env.NODE_ENV];
const ERR_OK = 0;

export function get(url) {
  return function(params = {}) {
    console.log(baseUrl);

    return axios
      .get(baseUrl + url, {
        params
      })
      .then(res => {
        const { errno, data } = res.data;
        if (errno === ERR_OK) {
          return data;
        }
      })
      .catch(e => {});
  };
}
