let BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`;

const dropdownSelects = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdownSelects) {
  for (let currCode in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = currCode;
    newOpt.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOpt.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOpt.selected = "selected";
    }
    select.append(newOpt);
  }
  select.addEventListener("change", (evnt) => {
    updateFlag(evnt.target);
  });
}

function updateFlag(element) {
  //   console.log(element);
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchange();
});

const updateExchange = async () => {
  let amount = document.querySelector(".amount input");
  let amntVal = amount.value;
  if (amntVal === "" || amntVal < 1) {
    amntVal = 1;
    amount.value = "1";
  }
  //   console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmnt = amntVal * rate;
  msg.innerText = `${amntVal} ${fromCurr.value} = ${finalAmnt} ${toCurr.value} `;
};

window.addEventListener("load", () => {
  updateExchange();
});
