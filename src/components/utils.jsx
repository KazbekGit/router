import { redirect } from "react-router-dom";

export async function isAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true;
    throw response;
  }
  return null;
}
