import HTTP from "../http";

export function getAllUsers() {
  return HTTP.get("/users");
}