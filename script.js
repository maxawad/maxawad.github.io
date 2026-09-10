// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const links = document.querySelector(".nav__links");
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
const closeMenu = () => {
  if (!links.classList.contains("open")) return;
  links.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
};
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
});
// Dismiss the open mobile menu with Escape or a tap/click outside it.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("open")) {
    closeMenu();
    menuBtn.focus();
  }
});
document.addEventListener("click", (e) => {
  if (
    links.classList.contains("open") &&
    !links.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
  observer.observe(el);
});

// Scroll-spy: highlight the nav link for the section currently in view, so
// visitors always know where they are on this long single-page site.
const navLinks = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
const spyTargets = navLinks
  .map((a) => {
    const el = document.querySelector(a.getAttribute("href"));
    return el ? { link: a, el } : null;
  })
  .filter(Boolean);

if (spyTargets.length) {
  const setActive = (link) => {
    navLinks.forEach((a) => a.removeAttribute("aria-current"));
    if (link) link.setAttribute("aria-current", "true");
  };
  const spyObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const match = spyTargets.find((t) => t.el === visible.target);
        if (match) setActive(match.link);
      }
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
  );
  spyTargets.forEach((t) => spyObserver.observe(t.el));
}

// Copy-email fallback: mailto: is a dead end for visitors with no configured
// mail client, so let them grab the address in one click with a brief confirm.
const copyEmail = document.getElementById("copyEmail");
if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    const email = copyEmail.dataset.email;
    const original = copyEmail.textContent;
    const done = () => {
      copyEmail.textContent = "Copied \u2713";
      setTimeout(() => { copyEmail.textContent = original; }, 1800);
    };
    try {
      await navigator.clipboard.writeText(email);
      done();
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); }
      catch { copyEmail.textContent = email; }
      document.body.removeChild(ta);
    }
  });
}
