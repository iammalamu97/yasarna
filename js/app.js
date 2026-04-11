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

async function loadLesson19() {
  const res = await fetch("data/lesson19.json");
  const data = await res.json();
  const container = document.getElementById("lesson19-content");
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

loadLesson19();

async function loadLesson20() {
  const res = await fetch("data/lesson20.json");
  const data = await res.json();

  const shortContainer = document.getElementById("lesson20-short");
  if (shortContainer) {
    data.short.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      shortContainer.appendChild(row);
    });
  }

  const longContainer = document.getElementById("lesson20-long");
  if (longContainer) {
    data.long.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      longContainer.appendChild(row);
    });
  }
}

loadLesson20();

async function loadLesson21() {
  const res = await fetch("data/lesson21.json");
  const data = await res.json();
  const container = document.getElementById("lesson21-content");
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

loadLesson21();

async function loadLesson22() {
  const res = await fetch("data/lesson22.json");
  const data = await res.json();

  const wordsContainer = document.getElementById("lesson22-words");
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

  const mixedContainer = document.getElementById("lesson22-mixed");
  if (mixedContainer) {
    data.mixed.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      mixedContainer.appendChild(row);
    });
  }
}

loadLesson22();

async function loadLesson23() {
  const res = await fetch("data/lesson23.json");
  const data = await res.json();

  ["section1", "section2", "section3"].forEach((key, i) => {
    const container = document.getElementById(`lesson23-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson23();

async function loadLesson23Cont() {
  const res = await fetch("data/lesson23-cont.json");
  const data = await res.json();

  ["section1", "section2", "section3"].forEach((key, i) => {
    const container = document.getElementById(`lesson23c-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

async function loadLesson10() {
  const res = await fetch("data/lesson10.json");
  const data = await res.json();
  const container = document.getElementById("lesson10-content");
  if (!container) return;
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

loadLesson23Cont();
loadLesson10();

async function loadLesson25() {
  const res = await fetch("data/lesson25.json");
  const data = await res.json();

  ["section1", "section2", "section3", "section4"].forEach((key, i) => {
    const container = document.getElementById(`lesson25-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson25();

async function loadLesson27() {
  const res = await fetch("data/lesson27.json");
  const data = await res.json();

  ["section1", "section2"].forEach((key, i) => {
    const container = document.getElementById(`lesson27-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson27();

async function loadLesson28() {
  const res = await fetch("data/lesson28.json");
  const data = await res.json();

  ["section1", "section2"].forEach((key, i) => {
    const container = document.getElementById(`lesson28-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson28();

async function loadLesson29() {
  const res = await fetch("data/lesson29.json");
  const data = await res.json();
  const container = document.getElementById("lesson29-content");
  if (!container) return;
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

loadLesson29();

async function loadLesson29Cont() {
  const res = await fetch("data/lesson29-cont.json");
  const data = await res.json();
  const container = document.getElementById("lesson29c-content");
  if (!container) return;
  container.innerHTML = "";
  let block = document.createElement("div");
  block.className = "text-block";
  data.forEach(item => {
    if (item === "sep") {
      container.appendChild(block);
      const hr = document.createElement("hr");
      hr.className = "block-divider";
      container.appendChild(hr);
      block = document.createElement("div");
      block.className = "text-block";
      return;
    }
    const row = document.createElement("div");
    row.className = "letter-row no-lines";
    item.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      row.appendChild(span);
    });
    block.appendChild(row);
  });
  container.appendChild(block);
}

loadLesson29Cont();

async function loadLesson30() {
  const res = await fetch("data/lesson30.json");
  const data = await res.json();

  ["section1", "section2", "section3"].forEach((key, i) => {
    const container = document.getElementById(`lesson30-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson30();

async function loadLesson30() {
  const res = await fetch("data/lesson30.json");
  const data = await res.json();
  const container = document.getElementById("lesson30-content");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    if (item === "sep") {
      const hr = document.createElement("hr");
      hr.className = "block-divider";
      container.appendChild(hr);
      return;
    }
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

loadLesson30();

async function loadLesson31() {
  const res = await fetch("data/lesson31.json");
  const data = await res.json();

  ["section1", "section2", "section3"].forEach((key, i) => {
    const container = document.getElementById(`lesson31-s${i + 1}`);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      container.appendChild(row);
    });
  });
}

loadLesson31();

async function loadLesson32() {
  const res = await fetch("data/lesson32.json");
  const data = await res.json();
  const container = document.getElementById("lesson32-content");
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

loadLesson32();
