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

console.log("working...");
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
  const div = document.createElement("div");

  div.innerText = array[i];

  div.className = "btn";

  container.appendChild(div);
}

container.className = "container";

body.appendChild(container);
