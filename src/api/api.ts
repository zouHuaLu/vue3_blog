import { Request } from "./request";

export function getArticles() {
  return Request.axiosInstance({
    url: "blog/api/publish/getAllArticles",
    method: "GET",
  });
}

export function getShuoShuo() {
  return Request.axiosInstance({
    url: "blog/api/column/latestShuoShuo",
    method: "GET",
  });
}

export function getAllArticles() {
  return Request.axiosInstance({
    url: "blog/api/publish/getAllArticles",
    method: "GET",
  });
}

export function getAllShuoShuo() {
  return Request.axiosInstance({
    url: "blog/api/column/allShuoShuo",
    method: "GET",
  });
}

interface Data {
  author: String;
  timestamp: String;
  desc: String;
  img?: String;
  title?: String;
}
// 发表说说
export function releaseShuoShuo(data: Data) {
  return Request.axiosInstance({
    url: "/blog/api/column/releaseShuoShuo",
    method: "POST",
    data: data,
  });
}
