// Function to load a webpage based on input
function loadPage() {
    const urlInput = document.getElementById("urlInput");
    let url = urlInput.value.trim();
    let isPrivate = document.getElementById("incognitoMode").checked;

    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    // If user enters a direct URL, open it
    if (url.startsWith("http://") || url.startsWith("https://")) {
        openPage(url);
    } 
    // If it looks like a domain, add https://
    else if (url.includes(".") && !url.includes(" ")) {
        url = "https://" + url;
        openPage(url);
    } 
    // Otherwise, search on DuckDuckGo
    else {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(url)}`;
    }

    // Save history only if not in private mode
    if (!isPrivate) {
        localStorage.setItem("lastVisited", url);
    }
}

// Function to open a URL in a new tab
function openPage(url) {
    window.open(url, "_blank");
}

// Dark Mode Toggle
function toggleTheme() {
    let body = document.body;
    let isDark = body.classList.toggle("dark-mode");

    // Save user preference
    localStorage.setItem("darkMode", isDark);
}

// Function to set a custom homepage
function setHomepage() {
    let homepage = document.getElementById("homepageInput").value;
    if (!homepage) {
        alert("Enter a valid homepage URL");
        return;
    }
    localStorage.setItem("homepage", homepage);
    alert("Homepage set successfully!");
}

// Function to add a bookmark
function addBookmark() {
    let url = document.getElementById("urlInput").value;
    if (!url) {
        alert("Enter a URL first!");
        return;
    }

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    loadBookmarks();
}

// Function to load bookmarks from storage
function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let bookmarkList = document.getElementById("bookmarkList");
    bookmarkList.innerHTML = "";

    bookmarks.forEach(url => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${url}" target="_blank" class="bookmark">${url}</a>`;
        bookmarkList.appendChild(li);
    });
}

// Load settings on startup
window.onload = function() {
    // Load last visited site
    let lastVisited = localStorage.getItem("lastVisited");
    if (lastVisited) {
        document.getElementById("urlInput").value = lastVisited;
    }

    // Load saved homepage
    let savedHomepage = localStorage.getItem("homepage");
    if (savedHomepage) {
        document.getElementById("homepageInput").value = savedHomepage;
    }

    // Apply dark mode if saved
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Load bookmarks
    loadBookmarks();
};