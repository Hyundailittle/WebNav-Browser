function loadPage() {
    const urlInput = document.getElementById("urlInput");
    let url = urlInput.value.trim();

    // Check if the input is a valid URL (simplified check)
    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url; // Add default HTTP if not present
    }

    // Try to open the website
    const iframe = document.createElement("iframe");
    iframe.src = url;

    iframe.style.width = "100%";
    iframe.style.height = "600px";

    // Append iframe to body to load the webpage
    document.body.appendChild(iframe);

    // If the iframe can't load the website (like an unknown address), search on DuckDuckGo
    iframe.onerror = function() {
        const searchQuery = encodeURIComponent(urlInput.value); // Get the entered query
        window.location.href = `https://duckduckgo.com/?q=${searchQuery}`; // Redirect to DuckDuckGo
    };
}