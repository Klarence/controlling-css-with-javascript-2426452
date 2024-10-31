const degreeInput = document.querySelector("#degrees");
const box = document.querySelector(".box");
// const valueToRotate = degreeInput.getAttribute("value");

// degreeInput.addEventListener('change', rotateBox());
degreeInput.addEventListener('change', () => {
    // box.style.transform = `rotate(${degreeInput.value}deg)`;
    // box.style.setProperty("transform", `rotate(${degreeInput.value}deg)`);
    // box.style.transform = `rotate(${valueToRotate}deg)`
});

// function rotateBox() {
//     box.style.transform = `rotate(${degreeInput.value}deg)`
//     // box.style.transform = `rotate(${valueToRotate}deg)`
//     console.log(valueToRotate);
// }
console.log(degreeInput);
// console.log(valueToRotate);

