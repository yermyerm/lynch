function dontTouch(event) {
  const lynch = ["HAZUKI", "REO", "YUSUKE", "ASANAO", "AKINORI"];
  if (lynch.includes(event.srcElement.alt)) {
    alert("Don't touch!");
  }
}

addEventListener("click", dontTouch);
