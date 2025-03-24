function loadPage() {
    let url = document.getElementById("urlInput").value;
    
    if (!url.startsWith("http")) {
        url = "https://" + url; // Auto-add "https://" if missing
    }

    // Open in new tab instead of iframe (to bypass security restrictions)
    window.open(url, "_blank");
}