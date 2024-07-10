const header = document.querySelector("#header")

const options = {
  // root: document.querySelector(".parallax"),
  rootMargin: "0px",
  threshold: 0.5,
}

const callback = (entries, observer) => {
  const [entry] = entries
  const isIntersecting = entry?.isIntersecting
  if (isIntersecting) {
    header.classList.remove("bg1")
  } else {
    header.classList.add("bg1")
  }
}

const observer = new IntersectionObserver(callback, options)
const parrallax = document.querySelector(".parallax")
observer.observe(parrallax)
