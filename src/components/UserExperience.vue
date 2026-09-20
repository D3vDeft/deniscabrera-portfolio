<template>
  <div class="content-sections section-wrap">
    <section id="experiencia" class="content-section">
      <div class="section-label">02 / Experiencia</div>
      <div class="experience-list">
        <article v-for="(item, index) in experience" :key="item.company" class="experience-item reveal" :style="{ '--delay': `${index * 100}ms` }">
          <div class="experience-date">{{ item.period }}</div>
          <div>
            <h3>{{ item.role }}</h3>
            <p class="experience-company">{{ item.company }}</p>
            <ul>
              <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="habilidades" class="content-section skills-section">
      <div class="section-label">03 / Habilidades</div>
      <div class="skills-layout">
        <div>
          <h2>Un stack pensado para construir.</h2>
          <p class="muted">Tecnologías y prácticas que forman parte de mi día a día.</p>
        </div>
        <div class="skill-groups">
          <div v-for="group in skillGroups" :key="group.name" class="skill-group">
            <h3>{{ group.name }}</h3>
            <div class="skill-list">
              <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="formacion" class="content-section education-section">
      <div class="section-label">04 / Formación</div>
      <div class="education-list">
        <article v-for="item in education" :key="item.title" class="education-item">
          <div class="education-year">{{ item.period }}</div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.place }}</p>
          </div>
        </article>
      </div>
      <div class="personal-details">
        <div><strong>Idiomas</strong><span>Español (Nativo) · Inglés (B2)</span></div>
        <div><strong>Aptitudes</strong><span>Autodidacta · Empático · Pensamiento crítico · Adaptabilidad</span></div>
        <div><strong>Otros datos</strong><span>Garantía Juvenil</span></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const experience = [
  {
    role: 'Desarrollador Full Stack — Freelance',
    company: 'Clientes reales · Madrid',
    period: '06/2026 — Actualidad',
    details: [
      'Desarrollo de soluciones web completas, desde el diseño hasta el despliegue.',
      'Web para un estudio de tatuajes y piercings.',
      'E-commerce B2C y ERP integrado para productos, stock, pedidos y clientes.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'METRICA Consulting',
    period: '09/2025 — 05/2026',
    details: [
      'Aplicación para automatizar la evaluación de vehículos adquiridos en subastas.',
      'Participación en el desarrollo y diseño bajo metodología Scrum.',
      'Automatización de procesos para agilizar la toma de decisiones del equipo de compras.',
    ],
  },
  {
    role: 'Desarrollador Backend',
    company: 'Calles Inteligentes',
    period: '01/2025 — 05/2025',
    details: [
      'Sistema para consultar la disponibilidad de plazas de aparcamiento en tiempo real.',
      'Implementación de la comunicación entre los sensores y la aplicación.',
    ],
  },
];

const skillGroups = [
  { name: 'Frontend', skills: ['TypeScript', 'Angular', 'Vue', 'React', 'Vitest'] },
  { name: 'Backend', skills: ['Java 17/21', 'Spring Boot', 'Spring Security', 'REST', 'OpenAPI'] },
  { name: 'Datos & DevOps', skills: ['PostgreSQL', 'Oracle', 'SQL', 'Docker', 'Azure', 'Debian'] },
  { name: 'Prácticas', skills: ['TDD', 'Design patterns', 'JUnit', 'Git', 'CI/CD', 'Swagger'] },
];

const education = [
  { title: 'Técnico en Desarrollo de Aplicaciones Multiplataforma', place: 'IES Clara del Rey', period: '09/2023 — 06/2026' },
  { title: 'Técnico en Desarrollo de Aplicaciones Web entorno cliente servidor', place: 'IES Clara del Rey', period: '09/2023 — 06/2026' },
  { title: 'Curso ORACLE BIG DATA CLOUD INGENIERO · 175h', place: 'C.F.P.E. en Tecnologías de la Información y Comunicaciones', period: '07/2024' },
];
</script>
