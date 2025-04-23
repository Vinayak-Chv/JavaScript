function rollDice() {
    const numofDice = document.getElementById("num").value;
    const res = document.getElementById("res");
    const img = document.getElementById("imgs");
    const values = [];
    const images = [];

    for (let i = 0; i <= numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Images/${value}.png" alt="Dice ${value}">`);
    }

    res.textContent = `Dice: ${values.join(', ')}`;
    img.innerHTML = images.join("");
}