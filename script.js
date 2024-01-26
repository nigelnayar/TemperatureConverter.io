let fromTemp = document.querySelector(".fromTemp");
let toTemp = document.querySelector(".toTemp");
let convertBtn = document.querySelector(".result");
let optval = document.getElementById('outputed');
let iptval = document.getElementById('inputed');
let switchBtn = document.getElementById('swap');
let tempatrumus = document.querySelector('rumus');
let rumus = document.getElementById('p1');
let hasil = document.getElementById('p2');
toTemp.selectedIndex = 3;
convertTemp();
showFor();
changeBg();
document.addEventListener('contextmenu', event => event.preventDefault());
convertBtn.addEventListener("click", (e) => {
  convertTemp();
  showFor();
  changeBg();
})

switchBtn.addEventListener("click", (e) => {
  swapTemp();
})

function convertTemp() {

  let ipval = parseFloat(iptval.value);
//ubah dari celcius
  if (fromTemp.value === "cel") {

    if (toTemp.value === "cel") {
      optval.value = ipval;
    }
    else if (toTemp.value === "fah") {
      optval.value = (ipval * 9/5)  + 32;
    }
    else if (toTemp.value === "rea") {
      optval.value = ipval * 4/5;
    }
    else if (toTemp.value === "kel") {
      optval.value = ipval + 273;
    }

  }

//ubah dari fahrenheit
  else if (fromTemp.value === "fah") {

    if (toTemp.value === "cel") {
      optval.value = (ipval - 32)  * 5/9;
    }
    else if (toTemp.value === "fah") {
      optval.value = ipval ;
    }
    else if (toTemp.value === "rea") {
      optval.value = ((ipval - 32)  * 5/9) * 4/5;
    }
    else if (toTemp.value === "kel") {
      optval.value = ((ipval - 32)  * 5/9) + 273;
    }
}

//ubah dari reamur
  else if (fromTemp.value === "rea") {

  if (toTemp.value === "cel") {
    optval.value = (ipval * 5/4)  ;
  }
  else if (toTemp.value === "fah") {
    optval.value = ((ipval * 5/4) * 9/5)  + 32;
  }
  else if (toTemp.value === "rea") {
    optval.value = ipval;
  }
  else if (toTemp.value === "kel") {
    optval.value = (ipval * 5/4) + 273;
  }
}

//ubah dari kelvin
  else if (fromTemp.value === "kel") {

  if (toTemp.value === "cel") {
    optval.value = (ipval - 273);
  }
  else if (toTemp.value === "fah") {
    optval.value = ((ipval - 273) * 9/5)  + 32;
  }
  else if (toTemp.value === "rea") {
    optval.value = (ipval - 273) * 4/5;
  }
  else if (toTemp.value === "kel") {
    optval.value = ipval ;
  }

}
}

function swapTemp() {
  let fromfrom = fromTemp.value;
  fromTemp.value = toTemp.value;
  toTemp.value = fromfrom;
}

function showFor() {
  let ipval = parseFloat(iptval.value);
//ubah dari celcius
  if (fromTemp.value === "cel") {

    if (toTemp.value === "cel") {
      rumus.innerText = "It's the same frickin' unit!";
      hasil.innerText = "Which left us with " + optval.value + " degrees Celcius(°C).";
    }
    else if (toTemp.value === "fah") {
      rumus.innerText = ipval + " ⨉ 9/5 + 32";
      hasil.innerText = "Which left us with " + optval.value + " degrees Fahrenheit (°F).";
    }
    else if (toTemp.value === "rea") {
      rumus.innerText = ipval + " ⨉ 4/5";
      hasil.innerText = "Which left us with " + optval.value + " degrees Reamur (°R).";
    }
    else if (toTemp.value === "kel") {
     rumus.innerText = ipval + " + 273";
     hasil.innerText = "Which left us with " + optval.value + " Kelvin.";
    }

  }

//ubah dari fahrenheit
  else if (fromTemp.value === "fah") {

    if (toTemp.value === "cel") {
      rumus.innerText = "(" + ipval + " - 32) ⨉ 5/9";
      hasil.innerText = "Which left us with " + optval.value + " degrees Celcius(°C).";
    }
    else if (toTemp.value === "fah") {
      rumus.innerText = "It's the same frickin' unit!";
      hasil.innerText = "Which left us with " + optval.value + " degrees Fahrenheit (°F).";
    }
    else if (toTemp.value === "rea") {
      rumus.innerText = "Convert to celcius first. " + "[(" + ipval + " - 32) ⨉ 5/9] ⨉ 4/5";
      hasil.innerText = "Which left us with " + optval.value + " degrees Reamur (°R).";
    }
    else if (toTemp.value === "kel") {
      rumus.innerText = "Convert to celcius first. " + "[(" + ipval + " - 32) ⨉ 5/9] + 273";
      hasil.innerText = "Which left us with " + optval.value + " Kelvin.";
    }
}

//ubah dari reamur
  else if (fromTemp.value === "rea") {

  if (toTemp.value === "cel") {
    rumus.innerText = ipval + " ⨉ 5/4";
    hasil.innerText = "Which left us with " + optval.value + " degrees Celcius(°C).";
  }
  else if (toTemp.value === "fah") {
    rumus.innerText = "Convert to celcius first. " + "([" + ipval + "⨉ 5/4] ⨉ 9/5) + 32";
    hasil.innerText = "Which left us with " + optval.value + " degrees Fahrenheit (°F).";
  }
  else if (toTemp.value === "rea") {
    rumus.innerText = "It's the same frickin' unit!";
    hasil.innerText = "Which left us with " + optval.value + " degrees Reamur (°R).";
  }
  else if (toTemp.value === "kel") {
    rumus.innerText = "Convert to celcius first. " + "[" + ipval + "⨉ 5/4] + 273";
    hasil.innerText = "Which left us with " + optval.value + " Kelvin.";
  }
}

//ubah dari kelvin
  else if (fromTemp.value === "kel") {

    if (toTemp.value === "cel") {
      rumus.innerText = ipval + " 273";
      hasil.innerText = "Which left us with " + optval.value + " degrees Celcius(°C).";
    }
    else if (toTemp.value === "fah") {
      rumus.innerText = "Convert to celcius first. " + "([" + ipval + "+ 273] ⨉ 9/5) + 32";
      hasil.innerText = "Which left us with " + optval.value + " degrees Fahrenheit (°F).";
    }
    else if (toTemp.value === "rea") {
      rumus.innerText = "Convert to celcius first. " + "(" + ipval + " + 273) ⨉ 4/5";
      hasil.innerText = "Which left us with " + optval.value + " degrees Reamur (°R).";
    }
    else if (toTemp.value === "kel") {
      rumus.innerText = "It's the same frickin' unit!";
      hasil.innerText = "Which left us with " + optval.value + " Kelvin.";
    }

}
}

function changeBg() {
  let ipval = parseFloat(iptval.value);
  if (fromTemp.value === "cel") {

    if (ipval >= 100) {
      document.getElementById('imgid').src="sweating.png";
      document.getElementById('imgid1').src="sweating.png";
      document.getElementById('imgid2').src="sweating.png";
      document.getElementById('imgid3').src="sweating.png";
      document.getElementById('imgid4').src="sweating.png";
      document.getElementById('imgid5').src="sweating.png";
      document.getElementById('imgid6').src="sweating.png";
      document.getElementById('imgid7').src="sweating.png";
      document.body.style.background = 'linear-gradient(to bottom, #e28743, #eab676)';
    }
    else if (ipval <= 0) {
      document.getElementById('imgid').src="dingin.png";
      document.getElementById('imgid1').src="dingin.png";
      document.getElementById('imgid2').src="dingin.png";
      document.getElementById('imgid3').src="dingin.png";
      document.getElementById('imgid4').src="dingin.png";
      document.getElementById('imgid5').src="dingin.png";
      document.getElementById('imgid6').src="dingin.png";
      document.getElementById('imgid7').src="dingin.png";
      document.body.style.background = 'linear-gradient(to bottom, #063970, #76b5c5)';
    }

    else {
      document.getElementById('imgid').src="senyum.png";
      document.getElementById('imgid1').src="senyum.png";
      document.getElementById('imgid2').src="senyum.png";
      document.getElementById('imgid3').src="senyum.png";
      document.getElementById('imgid4').src="senyum.png";
      document.getElementById('imgid5').src="senyum.png";
      document.getElementById('imgid6').src="senyum.png";
      document.getElementById('imgid7').src="senyum.png";

      document.body.style.background = 'linear-gradient(to bottom, #54a2a3, #d4bca8)';
    }

  }

//ubah dari fahrenheit
  else if (fromTemp.value === "fah") {

    if (ipval >= 212) {
      document.getElementById('imgid').src="sweating.png";
      document.getElementById('imgid1').src="sweating.png";
      document.getElementById('imgid2').src="sweating.png";
      document.getElementById('imgid3').src="sweating.png";
      document.getElementById('imgid4').src="sweating.png";
      document.getElementById('imgid5').src="sweating.png";
      document.getElementById('imgid6').src="sweating.png";
      document.getElementById('imgid7').src="sweating.png";
      document.body.style.background = 'linear-gradient(to bottom, #e28743, #eab676)';
    }
    else if (ipval <= 32) {
      document.getElementById('imgid').src="dingin.png";
      document.getElementById('imgid1').src="dingin.png";
      document.getElementById('imgid2').src="dingin.png";
      document.getElementById('imgid3').src="dingin.png";
      document.getElementById('imgid4').src="dingin.png";
      document.getElementById('imgid5').src="dingin.png";
      document.getElementById('imgid6').src="dingin.png";
      document.getElementById('imgid7').src="dingin.png";
      document.body.style.background = 'linear-gradient(to bottom, #063970, #76b5c5)';
    }

    else {
      document.getElementById('imgid').src="senyum.png";
      document.getElementById('imgid1').src="senyum.png";
      document.getElementById('imgid2').src="senyum.png";
      document.getElementById('imgid3').src="senyum.png";
      document.getElementById('imgid4').src="senyum.png";
      document.getElementById('imgid5').src="senyum.png";
      document.getElementById('imgid6').src="senyum.png";
      document.getElementById('imgid7').src="senyum.png";
      document.body.style.background = 'linear-gradient(to bottom, #54a2a3, #d4bca8)';
    }
}

//ubah dari reamur
  else if (fromTemp.value === "rea") {

    if (ipval >= 80) {
      document.getElementById('imgid').src="sweating.png";
      document.getElementById('imgid1').src="sweating.png";
      document.getElementById('imgid2').src="sweating.png";
      document.getElementById('imgid3').src="sweating.png";
      document.getElementById('imgid4').src="sweating.png";
      document.getElementById('imgid5').src="sweating.png";
      document.getElementById('imgid6').src="sweating.png";
      document.getElementById('imgid7').src="sweating.png";
      document.body.style.background = 'linear-gradient(to bottom, #e28743, #eab676)';
    }
    else if (ipval <= 0) {
      document.getElementById('imgid').src="dingin.png";
      document.getElementById('imgid1').src="dingin.png";
      document.getElementById('imgid2').src="dingin.png";
      document.getElementById('imgid3').src="dingin.png";
      document.getElementById('imgid4').src="dingin.png";
      document.getElementById('imgid5').src="dingin.png";
      document.getElementById('imgid6').src="dingin.png";
      document.getElementById('imgid7').src="dingin.png";
      document.body.style.background = 'linear-gradient(to bottom, #063970, #76b5c5)';
    }

    else {
      document.getElementById('imgid').src="senyum.png";
      document.getElementById('imgid1').src="senyum.png";
      document.getElementById('imgid2').src="senyum.png";
      document.getElementById('imgid3').src="senyum.png";
      document.getElementById('imgid4').src="senyum.png";
      document.getElementById('imgid5').src="senyum.png";
      document.getElementById('imgid6').src="senyum.png";
      document.getElementById('imgid7').src="senyum.png";
      document.body.style.background = 'linear-gradient(to bottom, #54a2a3, #d4bca8)';
    }
}

//ubah dari kelvin
  else if (fromTemp.value === "kel") {

    if (ipval >= 373) {
      document.getElementById('imgid').src="sweating.png";
      document.getElementById('imgid1').src="sweating.png";
      document.getElementById('imgid2').src="sweating.png";
      document.getElementById('imgid3').src="sweating.png";
      document.getElementById('imgid4').src="sweating.png";
      document.getElementById('imgid5').src="sweating.png";
      document.getElementById('imgid6').src="sweating.png";
      document.getElementById('imgid7').src="sweating.png";
      document.body.style.background = 'linear-gradient(to bottom, #e28743, #eab676)';
    }
    else if (ipval <= 273) {
      document.getElementById('imgid').src="dingin.png";
      document.getElementById('imgid1').src="dingin.png";
      document.getElementById('imgid2').src="dingin.png";
      document.getElementById('imgid3').src="dingin.png";
      document.getElementById('imgid4').src="dingin.png";
      document.getElementById('imgid5').src="dingin.png";
      document.getElementById('imgid6').src="dingin.png";
      document.getElementById('imgid7').src="dingin.png";
      document.body.style.background = 'linear-gradient(to bottom, #063970, #76b5c5)';
    }

    else {
      document.getElementById('imgid').src="senyum.png";
      document.getElementById('imgid1').src="senyum.png";
      document.getElementById('imgid2').src="senyum.png";
      document.getElementById('imgid3').src="senyum.png";
      document.getElementById('imgid4').src="senyum.png";
      document.getElementById('imgid5').src="senyum.png";
      document.getElementById('imgid6').src="senyum.png";
      document.getElementById('imgid7').src="senyum.png";
      document.body.style.background = 'linear-gradient(to bottom, #54a2a3, #d4bca8)';
    }

}
}
