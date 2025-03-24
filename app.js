function loadPage() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) {
        url = "https://" + url; // Auto-add "https://" if missing
    }
    document.getElementById("browserFrame").src = url;
}