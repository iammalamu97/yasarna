async function loadLesson2() {
  const res = await fetch("data/lesson2.json");
  const data = await res.json();

  const container = document.getElementById("lesson-content");
  container.innerHTML = "";

  data.forEach(item => {

    // separator
    if (item === "sep") {
      const hr = document.createElement("hr");
      container.appendChild(hr);
      return;
    }

    // row
    const rowDiv = document.createElement("div");
    rowDiv.className = "letter-row";

    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      rowDiv.appendChild(span);
    });

    container.appendChild(rowDiv);
  });
}

// run
loadLesson2();




async function loadAlphabet() {
  const res = await fetch("data/alphabet.json");
  const data = await res.json();

  const container = document.getElementById("lesson-alphabets");
  container.innerHTML = "";

  data.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "letter-row";

    row.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      rowDiv.appendChild(span);
    });

    container.appendChild(rowDiv);
  });
}
loadAlphabet();

async function loadLesson3() {
  const res = await fetch("data/lesson3.json");
  const data = await res.json();

  const container = document.getElementById("lesson3-content");
  container.innerHTML = "";

  data.forEach(item => {

    // separator
    if (item === "sep") {
      const hr = document.createElement("hr");
      container.appendChild(hr);
      return;
    }

    // row
    const rowDiv = document.createElement("div");
    rowDiv.className = "letter-row";

    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      rowDiv.appendChild(span);
    });

    container.appendChild(rowDiv);
  });
}

// run
loadBend();
async function loadBend() {
  const res = await fetch("data/bend.json");
  const data = await res.json();

  const container = document.getElementById("bend-content");
  container.innerHTML = "";

  data.forEach(item => {

    // separator
    if (item === "sep") {
      const hr = document.createElement("hr");
      container.appendChild(hr);
      return;
    }

    // row
    const rowDiv = document.createElement("div");
    rowDiv.className = "letter-row";

    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      rowDiv.appendChild(span);
    });

    container.appendChild(rowDiv);
  });
}

// run
loadBend();

loadBend();
async function loadBendforms() {
  const res = await fetch("data/bendforms.json");
  const data = await res.json();

  const container = document.getElementById("bend-forms");
  container.innerHTML = "";

  data.forEach(item => {

    // separator
    if (item === "sep") {
      const hr = document.createElement("hr");
      container.appendChild(hr);
      return;
    }

    // row
    const rowDiv = document.createElement("div");
    rowDiv.className = "letter-row";

    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      rowDiv.appendChild(span);
    });

    container.appendChild(rowDiv);
  });
}

// run
loadBendforms();