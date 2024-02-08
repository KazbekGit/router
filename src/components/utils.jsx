import { redirect } from "react-router-dom";

export function getAuthInfo() {
  const isLogged = false;

  if (isLogged === false) {
    const res = redirect("/login");
    res.body = true;
    return res;
  }
  return null;
}

/* export async function isAuth() {
  const isLogged = false;
  if (isLogged === false) {
    const res = redirect("/login");
    res.body = true;
    return res;
  }
  return null
} */

export async function isAuth() {
    const isLoggedIn = true

    if (!isLoggedIn) {
        const response = redirect("/login")
        response.body = true
        throw response
    }
    return null
}

/* const isLogged = false
if (isLogged === false) {
  const res = redirect("/login");
  res.body = true;
  return res;
} */
