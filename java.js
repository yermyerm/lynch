const hzk = document.querySelector("#hzk img");
const reo = document.querySelector("#reo img");
const ysk = document.querySelector("#ysk img");
const asn = document.querySelector("#asn img");
const akn = document.querySelector("#akn img");

const lynch = [hzk, reo, ysk, asn, akn];

function dontTouch() {
  alert("Don't touch");
}

hzk.addEventListener("click", dontTouch);
reo.addEventListener("click", dontTouch);
ysk.addEventListener("click", dontTouch);
asn.addEventListener("click", dontTouch);
akn.addEventListener("click", dontTouch);
