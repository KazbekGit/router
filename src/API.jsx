export async function getVans() {
  const res = await fetch("/vans");
  if (!res.ok)
    throw {
      data: "Fetch error",
      status: res.status,
      statusText: res.statusText,
    };
    const data = await res.json();
  return data.vans;
}
