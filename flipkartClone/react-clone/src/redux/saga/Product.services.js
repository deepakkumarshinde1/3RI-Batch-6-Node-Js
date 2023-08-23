import axios from "axios";
export function getCategoryListService() {
  let url = "http://localhost:3050/api/get-category-list";
  return axios.get(url);
}
