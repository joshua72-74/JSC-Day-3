const inputs = document.querySelectorAll(`.controls input`);
// console.log(inputs);  //we will see a node list in console

function handleUpdate(){
    const suffix = this.dataset.sizing || '';  //as we have data-sizing, we have '' along as color do have an extra data attribute like spacing and blur
    // console.log(this.dataset);  //dataset is an object which will contain all the data attributes of that element

    // console.log(suffix);

    // console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
// change is for the range 
// mousemove is when we hover the mouse over the input range 

