import axios from "axios";

class HTTPRequestChecker {
  checkRoute(route) {
    try {
      if (!route) throw new Error("You must provide a target server URL");
    } catch (err) {
      console.error(err);
      return;
    }
  }
}


export default class APIHandler extends HTTPRequestChecker {
  constructor(url) {
    super(url);
    this.name = "APIHandler";
    this.url = url;
    this.api = axios.create({
      baseURL: this.url
    });
  }

  post(route, payload) {
    if (!payload || typeof payload !== "object")
      throw new Error(
        `${
          this.name
        } post() function expects payload argument to be of type Object`
      );
    return this.api.post(route, payload);
  }

  get(route, query) {
    super.checkRoute(route);
    var queryString = "";
    if (query) {
      if (typeof query !== "object")
        throw new Error(
          `${
            this.name
          } get() function expects query argument to be of type Object`
        );
      let count = 0;
      let keyCount = Object.keys(query);
      for (let key in query) {
        if (!count) queryString += "?";
        if (count && count < keyCount) queryString += "&";
        queryString += `${key}=${query[key]}`;
        count++;
      }
    }

    return this.api.get(route + (queryString || ""));
  }
}