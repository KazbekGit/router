export async function getVans(id = null) {
  const url = id ? `/vans/${id}` : "/vans";

  const res = await fetch(url);

  if (!res.ok)
    throw {
      data: "Fetch error",
      status: res.status,
      statusText: res.statusText,
    };
  const data = await res.json();
  return data.vans;
}

export async function getHostedVans(id = null) {
  const url = id ? `/host/vans/${id}` : "/host/vans";

  const res = await fetch(url);

  if (!res.ok)
    throw {
      data: "Fetch error",
      status: res.status,
      statusText: res.statusText,
    };
  const data = await res.json();
  return data.vans;
}
