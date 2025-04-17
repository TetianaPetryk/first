function removeDuplicatesFromArray(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }
  
  function removeDuplicates() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(",").map(item => item.trim());
  
    const resultArray = removeDuplicatesFromArray(array);
    document.getElementById("result").textContent = `[${resultArray.join(", ")}]`;
  }
  