let count = 0;

updateCounter = () => { 
    let counter = document.getElementById("count")
    counter.innerText = count++;
}