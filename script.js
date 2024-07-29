const userInput = document.getElementById("userData");

// fetch data from api
async function fetchData() {
  try {
    const urlString = `https://open.api.nexon.com/static/tfd/meta/en/descendant.json`;

    const response = await fetch(urlString, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

// search descendant by name
async function searchDescendantByName(name) {
  const data = await fetchData();
  if (!data) {
    return null;
  }

  const descendants = data.descendants;
  for (let i = 0; i < descendants.length; i++) {
    if (descendants[i].descendant_name === name) {
      return descendants[i];
    }
  }
  return null;
}

fetchData();
