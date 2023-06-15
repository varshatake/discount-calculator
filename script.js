const bill = document.querySelector("#bill");
const discount = document.querySelector("#discountPercent");
const calculator = document.querySelector("#calculator");
const total = document.querySelector("#total");

calculator.addEventListener('click',() => {
    console.log(`Inside event listner`);
    const billvalue = bill.value;
    const discountvalue = discount.value;
    console.log(billvalue);
    console.log(discountvalue);

    //  *** Validation for discount amount ***
    const valid = isValid(discountvalue);

    if(valid) {
    const discount = billvalue - (billvalue * discountvalue) /100;
    console.log(discount);
    total.innerHTML= `Total Amount you Pay is : ${discount}`;
    }
    else {
        alert(`Entered discount Amount is not correct :${discountvalue}`);
    }

    //  *** Validation for discount amount ***
    const validation = isValidation(billvalue);
    if(validation) {
        const bill = billvalue - (billvalue * discountvalue) /100;
        console.log(billvalue);
        total.innerHTML= `Total Amount you Pay is : ${bill}`;
    }
    else{
        alert(`Entered bill amount is not correct: ${billvalue}`);
    }
    
});

function isValid(discount) {
    if(discount < 0 || discount >100) {
        return false;
    }
    else{
        return true;
    }
}

function isValidation(bill) {
    if(bill < 0 || bill == null || bill == 0){
        return false;
    }
    else{
        return true;
    }
    
}