// Lab 5 - CV 2.0 Interactive Features

// Task 1: Dark / Light Mode
const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Task 2: Show More / Show Less
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const moreAbout = document.getElementById("moreAbout");

toggleAboutBtn.addEventListener("click", () => {
    const isHidden = moreAbout.style.display === "none";
    if (isHidden) {
        moreAbout.style.display = "block";
        toggleAboutBtn.textContent = "Show Less";
    } else {
        moreAbout.style.display = "none";
        toggleAboutBtn.textContent = "Show More";
    }
});

// Task 3: Dynamic Projects
const projects = [
    {
        title: "Personal CV & Interactive Portfolio",
        description: "A responsive personal CV website enhanced with interactive DOM features, theme toggle, project filtering, and print support.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Field Inspection System",
        description: "A centralized field inspection platform designed for municipal workflows, optimizing inspection reports and data management.",
        category: "Programming",
        technologies: ["Java", "SQL", "System Design"]
    },
    {
        title: "Venture Saudi Travel Companion",
        description: "A collaborative travel planning concept designed to help travelers discover destinations and organize itineraries.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

const projectsContainer = document.getElementById("projectsContainer");

function renderProjects(categoryFilter = "All") {
    projectsContainer.innerHTML = "";

    const filteredProjects = categoryFilter === "All"
        ? projects
        : projects.filter((project) => project.category === categoryFilter);

    filteredProjects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const titleEl = document.createElement("h3");
        titleEl.textContent = project.title;

        const metaEl = document.createElement("p");
        metaEl.classList.add("project-meta");
        metaEl.textContent = `Category: ${project.category} | Technologies: ${project.technologies.join(", ")}`;

        const descEl = document.createElement("p");
        descEl.textContent = project.description;

        card.appendChild(titleEl);
        card.appendChild(metaEl);
        card.appendChild(descEl);

        projectsContainer.appendChild(card);
    });
}

// Initial render on page load
renderProjects("All");

// Task 4: Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        renderProjects(selectedCategory);
    });
});

// Task 5: Print / Save as PDF
const printCvBtn = document.getElementById("printCvBtn");

printCvBtn.addEventListener("click", () => {
    window.print();
});