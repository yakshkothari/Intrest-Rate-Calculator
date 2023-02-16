let initial_amount = document.getElementById("initialAmount");
let a
let number_of_days = document.getElementById("numberOfDays");
let calculate_intrest = document.getElementById("calculateIntrest");
// let reset_values = document.getElementById("resetValues");
let intrest_rate = document.getElementById("fintrestRate");
let maturity_amount = document.getElementById("fFinalAmountValue");

let CALCULATE_INTREST_RATE = () => {
  if (initial_amount.value <= 0 || number_of_days.value <= 0) {
    alert("Kindly add values greater than 0");
  } else if (
    number_of_days.value >= 7 &&
    number_of_days.value <= 44 &&
    initial_amount.value > 0
  ) {
    intrest_rate.value=("2.75%")
    a = parseInt(initial_amount.value) * 2.75
    maturity_amount.value = ("₹"+a)
  }
  else if (
    number_of_days.value >= 45 &&
    number_of_days.value <= 90 &&
    initial_amount.value > 0
  ) {
    intrest_rate.value=("3.75%")
    a = parseInt(initial_amount.value) * 3.75
    maturity_amount.value = ("₹"+a)
  }
  else if (
    number_of_days.value >= 91 &&
    number_of_days.value <= 180 &&
    initial_amount.value > 0
  ) {
    intrest_rate.value=("4.25%")
    a = parseInt(initial_amount.value) * 4.25
    maturity_amount.value = ("₹"+a)
  }
  else if (
    number_of_days.value >= 181 &&
    number_of_days.value <= 364 &&
    initial_amount.value > 0
  ) {
    intrest_rate.value=("4.75%")
    a = parseInt(initial_amount.value) * 4.75
    maturity_amount.value = ("₹"+a)
  }
  else if (
    number_of_days.value >= 364 &&
    initial_amount.value > 0
  ) {
    alert("Currently we only calculate SHORT TERM DEPOSIT (SDR) intrest rates \nPlease keep number of days value below 365")
  }
  else{
    console.log("return")
    return
  }



};

calculate_intrest.onclick = () => {
  CALCULATE_INTREST_RATE();
};

// number_of_days.onclick=()=>{
//     alert(initial_amount.value)
// }
