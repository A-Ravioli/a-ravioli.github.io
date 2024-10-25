const researchProjects = [
  {
    title: "The Gated Memory Unit",
    description:
      "My first paper introducing a novel approach to memory management in neural networks.",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-0741-0_23",
  },
  {
    title: "Drug-Target-Interaction Prediction with Siamese Transformers.",
    description:
      "Applying machine learning techniques to accelerate the process of identifying potential new drugs.",
    link: "https://www.academia.edu/108142508/Drug_Target_Interaction_Prediction_with_Contrastive_and_Siamese_Transformers1",
  },
  {
    title:
      "Causal AI for Low-Level Particle Dynamics at Oak Ridge National Laboratory",
    description:
      "Investigating causal relationships in particle physics using advanced AI models.",
  },
  {
    title: "Signal Processing for Dense White Noise Decoding at Whitebox AI",
    description:
      "Developing innovative signal processing methods to decode dense white noise, aiming to approach general intelligence.",
  },
];

function createResearchCards() {
  const container = document.getElementById("research-cards");

  researchProjects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "card slide-in";
    card.style.animationDelay = `${0.2 * (index + 1)}s`;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.appendChild(title);
    card.appendChild(description);

    if (project.link) {
      const learnMoreBtn = document.createElement("a");
      learnMoreBtn.href = project.link;
      learnMoreBtn.textContent = "Learn More";
      learnMoreBtn.className = "learn-more-btn";
      learnMoreBtn.target = "_blank"; // Opens link in a new tab
      card.appendChild(learnMoreBtn);
    }

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createResearchCards();

  // Add smooth scrolling to nav links
  const navLinks = document.querySelectorAll("nav a.nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
