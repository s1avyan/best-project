const refs = {
  counters: document.querySelectorAll(".counter"),
};

minNumber = Number(refs.counters[0].dataset.ceil);

refs.counters.forEach((counter) => {
  if (counter.dataset.ceil < minNumber) {
    minNumber = counter.dataset.ceil;
  }
});
refs.counters.forEach((counter) => {
  counter.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counter.innerText;
    const dataCeil = counter.getAttribute("data-ceil");
    const increment = dataCeil / minNumber;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counter.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counter.innerText = dataCeil;
    }
  }
});

// refs.counters.forEach((counter) => {
//   counter.innerText = "0";
//   incrementCounter();
//   function incrementCounter() {
//     let currentNum = +counter.innerText;
//     const dataCeil = counter.getAttribute("data-ceil");
//     const increment = dataCeil / 150;
//     currentNum = Math.floor(currentNum + increment);

//     if (currentNum < dataCeil) {
//       counter.innerText = currentNum;
//       setTimeout(incrementCounter, 50);
//     } else {
//       counter.innerText = dataCeil;
//     }
//   }
// });
