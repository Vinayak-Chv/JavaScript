async function fetchData() {
    try {
        const carsName = document.getElementById("carInput").value.toLowerCase();

        // const response = await fetch(`https://api.waifu.pics/nsfw/${carsName}`); // use "sfw" instead of nsfw for most tags
        const response = await fetch(`https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${carName}`);

        if (!response.ok) {
            throw new Error("Could not fetch Cars image.");
        }

        const data = await response.json();
        const imgElement = document.getElementById("carImage"); // FIXED ID

        imgElement.src = data.url;
        imgElement.style.display = "block";
    } catch (error) {
        console.error("Error fetching Cars:", error);
    }
}
