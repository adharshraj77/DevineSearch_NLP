export function saveSearchResult(entry) {
  let saved = JSON.parse(localStorage.getItem("savedResults")) || [];

  // Add new to the top
  saved.unshift(entry);

  // Limit to 30 entries
  if (saved.length > 30) {
    saved = saved.slice(0, 30);
  }

  localStorage.setItem("savedResults", JSON.stringify(saved));
}

export function getSavedResults() {
  return JSON.parse(localStorage.getItem("savedResults")) || [];
}

export function deleteSavedResult(index) {
  let saved = getSavedResults();
  saved.splice(index, 1);
  localStorage.setItem("savedResults", JSON.stringify(saved));
  return saved;
}