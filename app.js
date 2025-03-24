function loadPage() {
    const urlInput = document.getElementById("urlInput");
    let url = urlInput.value.trim();

    // Check if input is empty
    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    // If input already contains "http://" or "https://", use it as-is
    if (url.startsWith("http://") || url.startsWith("https://")) {
        openPage(url);
        return;
    }

    // If input looks like a domain (contains a dot but no spaces), assume it's a URL
    if (url.includes(".") && !url.includes(" ")) {
        url = "https://" + url;
        openPage(url);
        return;
    }

    // Otherwise, treat it as a search query on DuckDuckGo
    const searchQuery = encodeURIComponent(url);
    window.location.href = `https://duckduckgo.com/?q=${searchQuery}`;
}

function openPage(url) {
    // Remove old iframe if it exists
    const oldIframe = document.getElementById("browserFrame");
    if (oldIframe) {
        oldIframe.remove();
    }

    // Create a new iframe and load the URL
    const iframe = document.createElement("iframe");
    iframe.id = "browserFrame";
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "600px";

    // Append iframe to body
    document.body.appendChild(iframe);
}