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



async function loadLesson4() {
  const res = await fetch("data/lesson4.json");
  const data = await res.json();
  const container = document.getElementById("lesson4-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") {
      container.appendChild(document.createElement("hr"));
      return;
    }
    const row = document.createElement("div");
    row.className = "letter-row";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson4();

async function loadLesson5() {
  const res = await fetch("data/lesson5.json");
  const data = await res.json();
  const container = document.getElementById("lesson5-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") { container.appendChild(document.createElement("hr")); return; }
    const row = document.createElement("div");
    row.className = "letter-row";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

async function loadLesson6() {
  const res = await fetch("data/lesson6.json");
  const data = await res.json();
  const container = document.getElementById("lesson6-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") { container.appendChild(document.createElement("hr")); return; }
    const row = document.createElement("div");
    row.className = "letter-row";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson5();
loadLesson6();

async function loadLesson7() {
  const res = await fetch("data/lesson7.json");
  const data = await res.json();
  const container = document.getElementById("lesson7-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") { container.appendChild(document.createElement("hr")); return; }
    const row = document.createElement("div");
    row.className = "letter-row";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson7();

async function loadLesson7Mixed() {
  const res = await fetch("data/lesson7-mixed.json");
  const data = await res.json();
  const container = document.getElementById("lesson7-mixed-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row ruled";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson7Mixed();

async function loadLesson7Mixed2() {
  const res = await fetch("data/lesson7-mixed2.json");
  const data = await res.json();

  const tableContainer = document.getElementById("mixed2-table");
  if (tableContainer) {
    data.table.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        row.appendChild(span);
      });
      tableContainer.appendChild(row);
    });
  }

  const wordsContainer = document.getElementById("mixed2-words");
  if (wordsContainer) {
    data.words.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      wordsContainer.appendChild(row);
    });
  }
}

loadLesson7Mixed2();

async function loadLesson15() {
  const res = await fetch("data/lesson15.json");
  const data = await res.json();
  const container = document.getElementById("lesson15-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row ruled";
    item.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson15();

async function loadLesson16() {
  const res = await fetch("data/lesson16.json");
  const data = await res.json();
  const container = document.getElementById("lesson16-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row ruled";
    item.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson16();

async function loadLesson16Cont() {
  const res = await fetch("data/lesson16-cont.json");
  const data = await res.json();

  const wordsContainer = document.getElementById("lesson16-words");
  if (wordsContainer) {
    data.words.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      wordsContainer.appendChild(row);
    });
  }

  const drillContainer = document.getElementById("lesson16-drill");
  if (drillContainer) {
    data.drill.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        row.appendChild(span);
      });
      drillContainer.appendChild(row);
    });
  }
}

loadLesson16Cont();

async function loadLesson8() {
  const res = await fetch("data/lesson8.json");
  const data = await res.json();
  const container = document.getElementById("lesson8-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") { container.appendChild(document.createElement("hr")); return; }
    const row = document.createElement("div");
    row.className = "letter-row ruled";
    item.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson8();

async function loadLesson9() {
  const res = await fetch("data/lesson9.json");
  const data = await res.json();
  const container = document.getElementById("lesson9-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") { container.appendChild(document.createElement("hr")); return; }
    const row = document.createElement("div");
    row.className = "letter-row ruled";
    item.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      row.appendChild(span);
    });
    container.appendChild(row);
  });
}

loadLesson9();
