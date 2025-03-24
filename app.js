function searchWeb() {
    const query = document.getElementById("searchInput").value;  // Get the search query
    const searchURL = "https://www.duckduckgo.com/?q=" + encodeURIComponent(query);  // URL with the search query
    window.open(searchURL, "_blank");  // Open the search in a new tab
}