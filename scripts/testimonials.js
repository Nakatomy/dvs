const expandBtn = document.getElementById("expand-btn");
const testimonials = document.getElementById("hiddenTestimonials");


function toggleTestimonials() {
    testimonials.classList.remove("testimonials--hidden");
    expandBtn.classList.add("testimonials--hidden");
    openPartners.classList.remove("testimonials--hidden");
}
