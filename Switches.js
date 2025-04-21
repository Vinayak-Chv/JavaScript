const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.onclick = function() {
    const input = parseInt(document.getElementById("input").value);
    
    switch (input) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
            res.textContent = `31 Days`;
            break;

        case 4: case 6: case 9: case 11: 
            res.textContent = `30 Days`;
            break;

        case 2:
            res.textContent = `28 Days`;
            break;

        default:
            res.textContent = `Enter the No. between Months(1 - 12)`;
    }
}