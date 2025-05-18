document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header.html", document.getElementById("header-container"));
    loadHTML("footer.html", document.getElementById("footer-container"));
  });
  
  function loadHTML(url, container) {
    fetch(url)
      .then(response => response.text())
      .then(data => container.innerHTML = data)
      .catch(error => console.error('Error loading', url, error));
  }
  