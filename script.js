// ========================================
// FORMREADY - MAIN JAVASCRIPT
// ========================================


// ----------------------------------------
// 1. SEARCH TOOLS
// ----------------------------------------

function searchTools() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        alert("Please enter what you need.\nExample: Photo 50 KB");
        searchInput.focus();
        return;
    }

    // Scroll to Popular Tools
    const toolsSection = document.getElementById("tools");

    if (toolsSection) {
        toolsSection.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Find matching tool
    const toolCards = document.querySelectorAll(".tool-card");

    let found = false;

    toolCards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.classList.add("search-highlight");
            found = true;

            setTimeout(() => {
                card.classList.remove("search-highlight");
            }, 2000);
        }
    });

    if (!found) {
        console.log("No exact tool found for:", query);
    }
}


// ----------------------------------------
// 2. SEARCH WITH ENTER KEY
// ----------------------------------------

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchTools();
        }
    });
}


// ----------------------------------------
// 3. SIZE BUTTONS
// ----------------------------------------

const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Remove active from all buttons
        sizeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        this.classList.add("active");

        console.log("Selected size:", this.innerText);
    });

});


// ----------------------------------------
// 4. SMOOTH SCROLLING
// ----------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ----------------------------------------
// 5. FAQ TOGGLE
// ----------------------------------------

const faqItems = document.querySelectorAll(".faq");

faqItems.forEach(faq => {

    faq.addEventListener("click", function() {

        this.classList.toggle("open");

    });

});


// ----------------------------------------
// 6. TOOL CARD HOVER / CLICK
// ----------------------------------------

const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach(card => {

    card.addEventListener("click", function() {

        const title = this.querySelector("h3");

        if (title) {
            console.log("Selected tool:", title.innerText);
        }

    });

});


// ----------------------------------------
// 7. VIEW ALL TOOLS
// ----------------------------------------

const viewLinks = document.querySelectorAll(".view-link");

viewLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const toolsSection = document.getElementById("tools");

        if (toolsSection) {

            event.preventDefault();

            toolsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ----------------------------------------
// 8. PAGE LOAD MESSAGE
// ----------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    console.log("FormReady website loaded successfully.");

});