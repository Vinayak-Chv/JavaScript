console.time("test")

for (let i = 0; i < 1000000; i++) {

}

console.timeEnd("test");

//2nd Example

function loadData() {
    console.time("loadData");
    
    for (let i = 0; i < 100000000; i++) {
        
    }

    console.timeEnd("loadData");
}

loadData()

//3rd Example

function processData() {
    
    console.time("processData");

    for (let i = 0; i < 1000000; i++) {

    }

    console.timeEnd("processData");

}

processData();