$(document).ready(() => {
  let pb = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  let profit = ({usd = 0, eur = 0, rur = 0}) => {
    
    console.log(usd, eur, rur)
    
  }
  profit({eur: 4, rur: 5})
  fetch(pb, {})
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA => ", data);
      for (let el of data) {
        $('.info').append(
          `
            <li>
                <span>${el.ccy}/${el.base_ccy}</span> | <span>${el.buy}</span> / <span>${el.sale}</span>
                <p>Sum: ${Math.trunc(el.sale * 1000)}</p>
            </li>
          `
        )
      }
    })
    .catch((err) => console.log(err));
});


