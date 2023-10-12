
document.addEventListener("DOMContentLoaded", function () {
    const longUrlInput = document.getElementById("long-url");
    const shortenButton = document.getElementById("shorten-button");
    const shortenedUrlContainer = document.getElementById("shortened-url");
    const shortUrlAnchor = document.getElementById("short-url");

    shortenButton.addEventListener("click", function () {
        const longUrl = longUrlInput.value;

        // Check the number of requests made from this IP address
        const ipAddress = getIPAddress();
        const requestCount = parseInt(localStorage.getItem(ipAddress) || 0);

        if (requestCount >= 2) {
            alert("limit exceeded. You can make only 2 requests per IP address.");
            return;
        }

        // Make a POST request to your API to shorten the URL
        fetch("https://api.apilayer.com/short_url/hash", {
            method: 'POST',
            headers: {
                'apikey': 'LUd7Muw7ey39ch3ayNtznuABL5eUhWn0',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ long_url: longUrl })
        })
            .then(response => response.json())
            .then(data => {
                const shortUrl = data.short_url;
                shortUrlAnchor.href = shortUrl;
                shortUrlAnchor.textContent = shortUrl;
                shortenedUrlContainer.classList.remove("hidden");

                // Update the request count for this IP address
                localStorage.setItem(ipAddress, requestCount + 1);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });

    // Function to get the client's IP address (you can use a more accurate method)
    function getIPAddress() {
        return "127.0.0.1"; // Replace with a real method to get the IP address
    }
});


