// 1. Your Article Database (Add new articles here!)
const wikiDatabase = [
    {
        title: "The Concept of Purgatory.",
        description: "The concept Catholic-Christian Purgatory in the bible.",
        link: "the-concept-of-purgatory.html",
        category: "Religion",
        date: "2026-03-27"
    }
];

// 2. The Function to Update the UI
function renderFeaturedArticles() {
    const container = document.getElementById('featured-grid-container');
    
    // Sort by date (Newest first)
    const sorted = wikiDatabase.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Get the top 3
    const main = sorted[0];
    const side1 = sorted[1];
    const side2 = sorted[2];

    // Build the HTML string
    container.innerHTML = `
        <div class="main-feature-card">
            <div class="feature-tag">Latest Scroll</div>
            <div class="feature-content">
                <h3>${main.title}</h3>
                <p>${main.description}</p>
                <a href="${main.link}" class="read-more">Unroll Scroll →</a>
            </div>
        </div>

        <div class="side-features">
            <div class="mini-card">
                <h4><i class="bi bi-journal-bookmark"></i> ${side1.title}</h4>
                <p>${side1.description}</p>
                <a href="${side1.link}">Read More</a>
            </div>
            
            <div class="mini-card">
                <h4><i class="bi bi-journal-bookmark"></i> ${side2.title}</h4>
                <p>${side2.description}</p>
                <a href="${side2.link}">Read More</a>
            </div>
        </div>
    `;
}

// 3. Run on page load
window.onload = renderFeaturedArticles;