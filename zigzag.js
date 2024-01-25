function convert(s, numRows) {
  if (numRows === 1) return s; // No change needed for a single row

  const rows = new Array(Math.min(numRows, s.length)).fill("");
  console.log({ rows });
  let currentRow = 0;
  let direction = -1;

  for (const char of s) {
    rows[currentRow] += char;

    console.log({ newRow: rows });

    // Change direction when reaching the first or last row
    if (currentRow === 0 || currentRow === numRows - 1) {
      direction *= -1;
      console.log({ direction });
    }

    currentRow += direction;
    console.log({ currentRow });
  }

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
