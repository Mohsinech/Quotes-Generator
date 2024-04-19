document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("quoteBtn");

  // Function to fetch a random quote
  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quoteElement.textContent = data.content;
      })
      .catch((error) => console.error("Error fetching quote:", error));
  };

  // Event listener for the "New Quote" button
  newQuoteButton.addEventListener("click", fetchQuote);
  // Fetch a random quote when the page loads
  fetchQuote();
});
