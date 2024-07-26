async function fetchData() {
  try {
    // testing
    const userInput = document.getElementById("userData");
    const urlString = `https://open.api.nexon.com/static/tfd/meta/en/descendant.json`;

    const response = await fetch(urlString, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchData();
