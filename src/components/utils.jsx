import { redirect } from "react-router-dom";

export async function getAuthInfo() {
  const isLogged = false;

  if (isLogged === false) {
    const res = redirect("/login");
    res.body = true;
    return res;
  }
  return true;
}
