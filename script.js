const createPeriodicElem = (symbol, atomicNumber, name) => {
    const element = document.createElement("div");
    element.classList.add("element");
    element.innerHTML = symbol;
    //console.log(element);
    element.setAttribute("data-atomic-number", atomicNumber);
    element.setAttribute("data-element-name", name);

    return element;
};

const showclickedElemDetail = (event) => {
    const target = event.target;
    // console.log(target);
    if( target.classList.contains("element")){
        const atomicNumber = target.getAttribute("data-atomic-number");
        const elemName = target.getAttribute("data-element-name");
        alert(`Atomic Number: ${atomicNumber}\nElement Name: ${elemName}`);
    }
};

const intializePeriodicTable = () => {
    const mainBody = document.querySelector(".mainBody");

    // create 50 periodic table dynamically
    for( let i = 1; i <= 50; i++) {
        //console.log(i);
        const element = createPeriodicElem(`Elem${i}`, i, `Element ${i}`);
        //console.log(element);
        mainBody.append(element);
    }

    // add event delegation to the container
    mainBody.addEventListener("click", showclickedElemDetail);
};

intializePeriodicTable();