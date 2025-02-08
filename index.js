// console.log("Hello world");

// // Shine element uusgeh

// const h1 = document.createElement("h1");

// h1.innerText = "Hello world";

// console.log(h1, "h1");

// //////////////////////

// // Element barij awah

// const body = document.querySelector("body"); //Element barij awah

// console.log(body);

// // Appendchild shine elementee bairluulah

// body.appendChild(h1);

// // Style bichih

// h1.style = "color: red; font-size: 40px";

// h1.className = "test";

/* <div class="btn">7</div> */

//     <div class="btn">7</div>
const body = document.querySelector("body");

const array = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

const container = document.createElement("div");

const input = document.createElement("input");

container.appendChild(input);

input.className = "input";

for (let i = 0; i < array.length; i++) {
  createElement("button", container, "btn", array[i], input);
}

container.className = "container";

body.appendChild(container);

function createElement(
  elementName,
  appendElement,
  className,
  innerText,
  input
) {
  const element = document.createElement(elementName);

  element.innerText = innerText;

  element.className = className;

  element.onclick = () => {
    if (
      innerText == "+" ||
      innerText == "-" ||
      innerText == "*" ||
      innerText == "/" ||
      innerText == "%"
    ) {
      input.value += " " + innerText + " ";
    } else if (innerText == "AC") {
      input.value = "";
    } else if (innerText == "=") {
      const array1 = input.value.split(" ");
      let total = Number(array1[0]);
      for (let i = 1; i < array1.length; i += 2) {
        const operator = array1[i];
        const nextNumber = Number(array1[i + 1]);
        switch (operator) {
          case "+":
            total += nextNumber;
            break;
          case "-":
            total -= nextNumber;
            break;
          case "*":
            total *= nextNumber;
            break;
          case "/":
            total /= nextNumber;
            break;
          case "%":
            total %= nextNumber;
            break;
          default:
            input.value = "Error";
            return;
        }
      }
      input.value = total;
    } else {
      input.value += innerText;
      //   console.log(input.value);
    }
  };

  appendElement.appendChild(element);
}

// console.log(eval("-2+2"));

// if (
//   innerText == "+" ||
//   innerText == "-" ||
//   innerText == "*" ||
//   innerText == "/" ||
//   innerText == "%"
// ) {
//   input.value += " " + innerText + " ";
// } else if (innerText == "AC") {
//   input.value = "";
// } else if (innerText == "=") {
//   try {
//     input.value = eval(input.value);
//   } catch (e) {
//     input.value = "Error";
//   }
// } else {
//   input.value += innerText;
//   console.log(input.value);
// }

//   if (innerText == "=") {
//     try {
//       input.value = eval(input.value);
//     } catch (e) {
//       input.value = "Error";
//     }
//   } else if (innerText == "AC") {
//     input.value = "";
//   } else {
//     input.value += innerText;
//     console.log(input.value);
//   }
