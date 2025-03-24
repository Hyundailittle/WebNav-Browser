<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebNavi Browser</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #e0f7fa; /* Light blue background */
            color: #00796b; /* Green text color */
        }
        input {
            width: 60%;
            padding: 10px;
            font-size: 16px;
            border: 2px solid #00796b; /* Green border */
            border-radius: 5px;
            background-color: #ffffff; /* White background for input */
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #00796b; /* Green button */
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #004d40; /* Dark green on hover */
        }
        .quick-links {
            margin-top: 30px;
        }
        .quick-links a {
            text-decoration: none;
            margin: 10px;
            font-size: 20px;
            color: #00796b; /* Green links */
        }
        .quick-links a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <h1>WebNavi Browser</h1>
    <input type="text" id="urlInput" placeholder="Enter website URL">
    <button onclick="loadPage()">Go</button>

    <div class="quick-links">
        <h3>Quick Links</h3>
        <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a>
        <a href="https://www.youtube.com" target="_blank">YouTube</a>
        <a href="https://www.quora.com" target="_blank">Quora</a>
    </div>

    <script src="app.js"></script>

</body>
</html>