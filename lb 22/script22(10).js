function reverseAndSquare(arr) {
    return arr.reverse().map(item => {
      const number = Number(item);
      if (!isNaN(number) && item.trim() !== "") {
        return number ** 2;
      } else {
        return item;
      }
    });
  }
  
  function handleArray() {
    const input = document.getElementById("arrayInput").value;
    const rawItems = input.split(",").map(el => el.trim());
    const processed = reverseAndSquare(rawItems);
    document.getElementById("result").textContent = `[${processed.join(", ")}]`;
  }
  