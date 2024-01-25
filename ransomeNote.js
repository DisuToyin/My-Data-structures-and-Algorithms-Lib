function ransomeNote(r_, m_) {
  //two pointer method
  const r = r_.split("").sort().join("");
  const m = m_.split("").sort().join("");

  let i = 0;
  let j = 0;
  while (j < m.length) {
    if (r[i] == m[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === r.length;
}

// solve using map

console.log(ransomeNote("aab", "baa"));
