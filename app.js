function loadPage() {
    const urlInput = document.getElementById("urlInput");
    let url = urlInput.value.trim();

    // Improved URL validation
    // Check if the URL includes a protocol (http or https)
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        // If it does not have "http://" or "https://", add "http://" by default
        if (url.includes(".")) {  // If the URL contains a period, we assume it's a domain
            url = "http://" + url;  // Add "http://" if no protocol is provided
        } else {
            alert("Please enter a valid URL.");  // Alert if the user input is invalid
            return;
        }
    }

    // Try to load the page in an iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;

    iframe.style.width = "100%";
    iframe.style.height = "600px";

    // Append iframe to body to load the webpage
    document.body.appendChild(iframe);

    // Wait a moment to check if the iframe can load the page successfully
    setTimeout(function() {
        if (!iframe.contentDocument || iframe.contentDocument.location.href === "about:blank") {
            // If the iframe is still blank, search the term on DuckDuckGo
            const searchQuery = encodeURIComponent(urlInput.value);  // Get the entered query
            window.location.href = `https://duckduckgo.com/?q=${searchQuery}`;  // Redirect to DuckDuckGo
        }
    }, 2000);  // Wait for 2 seconds before checking if the iframe is loaded
}