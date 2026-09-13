document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('video.bg-video').forEach(video => {
  video.muted = true;
  const tryPlay = () => video.play().catch(() => {});
  tryPlay();
  document.addEventListener('click', tryPlay, { once: true });
});

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => siteNav.classList.remove('open'));
});

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`New inquiry from ${name} via Organized by Em website`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:Emfreel@icloud.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app to send this message...";
});
