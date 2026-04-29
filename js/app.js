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

async function loadLesson33() {
  const res = await fetch("data/lesson33.json");
  const data = await res.json();

  const s1 = document.getElementById("lesson33-s1");
  if (s1) {
    data.section1.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      s1.appendChild(row);
    });
  }

  const s2 = document.getElementById("lesson33-s2");
  if (s2) {
    data.section2.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      s2.appendChild(row);
    });
  }
}

loadLesson33();

async function loadLesson34() {
  const res = await fetch("data/lesson34.json");
  const data = await res.json();

  const l11 = document.getElementById("lesson34-l11");
  if (l11) {
    data.lesson11.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word;
        row.appendChild(span);
      });
      l11.appendChild(row);
    });
  }

  [["lesson12","lesson34-l12"], ["mixed","lesson34-mixed"]].forEach(([key, id]) => {
    const container = document.getElementById(id);
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

loadLesson34();

async function loadLesson35() {
  const res = await fetch("data/lesson35.json");
  const data = await res.json();

  const intro = document.getElementById("lesson35-intro");
  if (intro) {
    data.intro.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      intro.appendChild(row);
    });
  }

  const l13 = document.getElementById("lesson35-l13");
  if (l13) {
    data.lesson13.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      l13.appendChild(row);
    });
  }

  [["lesson14","lesson35-l14"], ["mixed","lesson35-mixed"]].forEach(([key, id]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row ruled";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson35();

async function loadLesson39() {
  const res = await fetch("data/lesson39.json");
  const data = await res.json();

  [
    ["intro","lesson39-intro","ruled"],
    ["lesson15","lesson39-l15","no-lines"],
    ["mixed15","lesson39-mixed15","ruled"],
    ["lesson16","lesson39-l16","no-lines"],
    ["mixed16","lesson39-mixed16","ruled"]
  ].forEach(([key, id, cls]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson39();

async function loadLesson36() {
  const res = await fetch("data/lesson36.json");
  const data = await res.json();

  [
    ["intro","lesson36-intro","ruled"],
    ["lesson17","lesson36-l17","no-lines"],
    ["lesson18","lesson36-l18","ruled"]
  ].forEach(([key, id, cls]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson36();

async function loadLesson37() {
  const res = await fetch("data/lesson37.json");
  const data = await res.json();

  [["letters","lesson37-letters","ruled"], ["mixed","lesson37-mixed","ruled"]].forEach(([key, id, cls]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson37();

async function loadLesson38() {
  const res = await fetch("data/lesson38.json");
  const data = await res.json();

  [
    ["intro","lesson38-intro","no-lines"],
    ["lesson20","lesson38-lesson20","no-lines"],
    ["mixed","lesson38-mixed","no-lines"]
  ].forEach(([key, id, cls]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson38();

async function loadLesson40() {
  const res = await fetch("data/lesson40.json");
  const data = await res.json();
  const container = document.getElementById("lesson40-content");
  if (!container) return;
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row no-lines";
    item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    container.appendChild(row);
  });
}

loadLesson40();

async function loadLesson41() {
  const res = await fetch("data/lesson41.json");
  const data = await res.json();
  const container = document.getElementById("lesson41-content");
  if (!container) return;
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row no-lines";
    item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    container.appendChild(row);
  });
}

loadLesson41();

async function loadLesson42() {
  const res = await fetch("data/lesson42.json");
  const data = await res.json();

  const intro = document.getElementById("lesson42-intro");
  if (intro) {
    const row = document.createElement("div");
    row.className = "letter-row no-lines";
    data.intro.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    intro.appendChild(row);
  }

  const l21 = document.getElementById("lesson42-l21");
  if (l21) {
    data.lesson21.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      l21.appendChild(row);
    });
  }

  const l22 = document.getElementById("lesson42-l22");
  if (l22) {
    data.lesson22.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row line-below";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      l22.appendChild(row);
    });
  }
}

loadLesson42();

async function loadLesson43() {
  const res = await fetch("data/lesson43.json");
  const data = await res.json();

  [["section1","lesson43-s1"], ["section2","lesson43-s2"], ["mixed","lesson43-mixed"]].forEach(([key, id]) => {
    const container = document.getElementById(id);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row line-below";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson43();

async function loadLesson43() {
  const res = await fetch("data/lesson43.json");
  const data = await res.json();

  const s1 = document.getElementById("lesson43-s1");
  if (s1) {
    data.section1.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      s1.appendChild(row);
    });
  }

  const s2 = document.getElementById("lesson43-s2");
  if (s2) {
    data.section2.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      s2.appendChild(row);
    });
  }
}

loadLesson43();

async function loadLesson44() {
  const res = await fetch("data/lesson44.json");
  const data = await res.json();

  ["section1","mixed1","lesson23","mixed2"].forEach((key, i) => {
    const ids = ["lesson44-s1","lesson44-mixed1","lesson44-l23","lesson44-mixed2"];
    const container = document.getElementById(ids[i]);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson44();

async function loadLesson45() {
  const res = await fetch("data/lesson45.json");
  const data = await res.json();

  ["lesson24","mixed24","lesson25","mixed25"].forEach((key, i) => {
    const ids = ["lesson45-l24","lesson45-mixed24","lesson45-l25","lesson45-mixed25"];
    const container = document.getElementById(ids[i]);
    if (!container) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      container.appendChild(row);
    });
  });
}

loadLesson45();

async function loadLesson45() {
  const res = await fetch("data/lesson45.json");
  const data = await res.json();
  [["lesson24","lesson45-l24"],["mixed24","lesson45-mixed24"],["lesson25","lesson45-l25"],["mixed25","lesson45-mixed25"]].forEach(([key,id]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

async function loadLesson46() {
  const res = await fetch("data/lesson46.json");
  const data = await res.json();
  [["lesson26_intro","lesson46-l26"],["lesson27","lesson46-l27"],["mixed27a","lesson46-mixed27a"],["lesson27b","lesson46-l27b"],["mixed27b","lesson46-mixed27b"]].forEach(([key,id]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson45();
loadLesson46();

async function loadLesson47() {
  const res = await fetch("data/lesson47.json");
  const data = await res.json();
  [
    ["intro","lesson47-intro"],
    ["mixed1","lesson47-mixed1"],
    ["mixed2","lesson47-mixed2"],
    ["lesson28","lesson47-l28"],
    ["mixed28","lesson47-mixed28"]
  ].forEach(([key,id]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson47();

async function loadLesson48() {
  const res = await fetch("data/lesson48.json");
  const data = await res.json();

  const intro = document.getElementById("lesson48-intro");
  if (intro) {
    data.intro.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      intro.appendChild(row);
    });
  }

  const l29 = document.getElementById("lesson48-l29");
  if (l29) {
    data.lesson29.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row line-below";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      l29.appendChild(row);
    });
  }

  const mixed = document.getElementById("lesson48-mixed");
  if (mixed) {
    data.mixed.forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      mixed.appendChild(row);
    });
  }
}

loadLesson48();


async function loadLesson49() {
  const res = await fetch("data/lesson49.json");
  const data = await res.json();
  ["section1","section2"].forEach((key,i) => {
    const c = document.getElementById(`lesson49-s${i+1}`);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson49();

async function loadLesson50() {
  const res = await fetch("data/lesson50.json");
  const data = await res.json();

  const intro = document.getElementById("lesson50-intro");
  if (intro) data.intro.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row no-lines";
    item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    intro.appendChild(row);
  });

  [["lesson30","lesson50-l30"],["lesson31","lesson50-l31"]].forEach(([key,id]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = "letter-row line-below";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson50();

async function loadLesson51() {
  const res = await fetch("data/lesson51.json");
  const data = await res.json();

  [["lesson32","lesson51-l32","line-below"],
   ["note","lesson51-note","no-lines"],
   ["lesson32b","lesson51-l32b","line-below"],
   ["mixed","lesson51-mixed","no-lines"]
  ].forEach(([key,id,cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson51();

async function loadLesson52() {
  const res = await fetch("data/lesson52.json");
  const data = await res.json();
  const container = document.getElementById("lesson52-content");
  if (!container) return;
  data.forEach(item => {
    const row = document.createElement("div");
    row.className = "letter-row line-below";
    item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    container.appendChild(row);
  });
}

loadLesson52();

async function loadLesson53() {
  const res = await fetch("data/lesson53.json");
  const data = await res.json();

  [["intro","lesson53-intro","no-lines"],
   ["lesson33","lesson53-l33","line-below"],
   ["mixed1","lesson53-mixed1","line-below"],
   ["mixed2","lesson53-mixed2","line-below"]
  ].forEach(([key,id,cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson53();

async function loadLesson54() {
  const res = await fetch("data/lesson54.json");
  const data = await res.json();

  [["intro","lesson54-intro","line-below"],
   ["lesson34","lesson54-l34","line-below"],
   ["lesson35","lesson54-l35","line-below"]
  ].forEach(([key,id,cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson54();

async function loadLesson55() {
  const res = await fetch("data/lesson55.json");
  const data = await res.json();

  [["lesson36","lesson55-l36","line-below"],
   ["lesson37","lesson55-l37","line-below"]
  ].forEach(([key,id,cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson55();

async function loadLesson55() {
  const res = await fetch("data/lesson55.json");
  const data = await res.json();

  [["lesson36","lesson55-l36","line-below"],
   ["lesson37","lesson55-l37","line-below"]
  ].forEach(([key,id,cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson55();

async function loadLesson56() {
  const res = await fetch("data/lesson56.json");
  const data = await res.json();

  [
    ["rows",      "lesson56-rows",      "line-below"],
    ["smallrow",  "lesson56-smallrow",  "line-below"],
    ["examples1", "lesson56-examples1", "line-below"],
    ["examples2", "lesson56-examples2", "line-below"]
  ].forEach(([key, id, cls]) => {
    const c = document.getElementById(id);
    if (!c) return;
    data[key].forEach(item => {
      const row = document.createElement("div");
      row.className = `letter-row ${cls}`;
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson56();

async function loadLesson57() {
  const res = await fetch("data/lesson57.json");
  const data = await res.json();

  ["row1","row2","row3","row4","row5","row6","row7"].forEach(key => {
    const c = document.getElementById(`lesson57-${key}`);
    if (!c) return;
    data[key].forEach((item, i) => {
      const row = document.createElement("div");
      row.className = i % 2 === 0 ? "letter-row line-below" : "letter-row no-lines";
      item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
      c.appendChild(row);
    });
  });
}

loadLesson57();

async function loadLesson58() {
  const res = await fetch("data/lesson58.json");
  const data = await res.json();

  const c = document.getElementById("lesson58-rows");
  if (!c) return;
  data.rows.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = i % 2 === 0 ? "letter-row line-below" : "letter-row no-lines";
    item.forEach(w => { const s = document.createElement("span"); s.textContent = w; row.appendChild(s); });
    c.appendChild(row);
  });
}

loadLesson58();

async function loadLesson59() {
  const res = await fetch("data/lesson59.json");
  const data = await res.json();

  const tbody = document.getElementById("lesson59-tbody");
  if (!tbody) return;

  // Pair rows into two columns per table row
  for (let i = 0; i < data.table.length; i += 2) {
    const tr = document.createElement("tr");
    const left = data.table[i];
    const right = data.table[i + 1] || {};

    // right column (RTL table — right side first)
    [right.para || "", right.ayat || "", right.sura || "", ""].forEach(val => {
      const td = document.createElement("td");
      td.textContent = val;
      tr.appendChild(td);
    });

    // left column
    [left.para || "", left.ayat || "", left.sura || "", ""].forEach(val => {
      const td = document.createElement("td");
      td.textContent = val;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }
}

loadLesson59();
