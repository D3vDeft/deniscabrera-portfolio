<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Ir al inicio">
        <span class="brand-mark">DC</span>
        <span>Denis Cabrera</span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Abrir navegación</span>
        <span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }">
        <a v-for="item in navigation" :key="item.href" :href="item.href" @click="menuOpen = false">
          {{ item.label }}
        </a>
        <a class="nav-cta" href="mailto:deniscarloscabrera@outlook.es" @click="menuOpen = false">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero section-wrap">
        <div class="hero-copy reveal">
          <p class="eyebrow">Desarrollador de Software · Madrid</p>
          <h1>Construyo productos digitales <em>claros</em> y útiles.</h1>
          <p class="hero-lead">
            Soy Denis, desarrollador full stack apasionado por el código limpio, las buenas
            prácticas y los patrones de diseño.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#experiencia">Conoce mi experiencia <span>↓</span></a>
            <a class="text-link" href="https://github.com/D3vDeft" target="_blank" rel="noopener noreferrer">
              Ver GitHub <span>↗</span>
            </a>
          </div>
          <div class="availability"><span class="status-dot"></span> Disponible para nuevos retos</div>
        </div>

        <div class="hero-visual reveal reveal-delay">
          <div class="hero-orbit"></div>
          <img src="/Portfolio_IMG.jpg" alt="Denis Cabrera, desarrollador de software" />
          <div class="hero-tag hero-tag-top">Java · Spring</div>
          <div class="hero-tag hero-tag-bottom">TypeScript · Vue</div>
        </div>
      </section>

      <section id="sobre-mi" class="intro-panel section-wrap reveal">
        <div class="section-label">01 / Sobre mí</div>
        <div>
          <h2>Del problema al producto, con intención.</h2>
          <p>
            Desarrollo soluciones web de principio a fin: desde entender una necesidad y diseñar
            una experiencia sencilla hasta desplegar una aplicación mantenible. Me gusta trabajar en
            equipo, aprender de forma constante y convertir lo complejo en algo fácil de usar.
          </p>
        </div>
      </section>

      <UserExperience />

      <section id="contacto" class="contact-section section-wrap reveal">
        <div class="section-label">04 / Contacto</div>
        <div class="contact-content">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Estoy abierto a colaborar en productos que resuelvan problemas reales.</p>
          <a class="button button-primary" href="mailto:deniscarloscabrera@outlook.es">
            deniscarloscabrera@outlook.es <span>↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer section-wrap">
      <span>© {{ new Date().getFullYear() }} Denis Cabrera</span>
      <span>28035 · Madrid, España</span>
      <div>
        <a href="https://www.linkedin.com/in/devdeft/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/D3vDeft" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import UserExperience from './components/UserExperience.vue';

const menuOpen = ref(false);
const navigation = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#formacion', label: 'Formación' },
];

let observer: IntersectionObserver | undefined;

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll('.reveal').forEach((element) => observer?.observe(element));
});

onUnmounted(() => observer?.disconnect());
</script>
