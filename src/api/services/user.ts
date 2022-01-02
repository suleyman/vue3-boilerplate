import HTTP from "../http";
import { IUser } from "@/interfaces/user";

export function getAllUsers() {
  return HTTP.get<IUser[]>("/users");
}