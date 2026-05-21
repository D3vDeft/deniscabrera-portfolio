<template>
  <section class="bg-black w-full min-h-screen flex items-center justify-center py-20 px-12">
    <div class="w-full max-w-7xl">
      <h2 class="text-center text-5xl text-amber-50 font-serif italic mb-20">
        Experiencia & <span class="text-yellow-400 font-bold not-italic">Skills</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Experiencia -->
        <div class="border-l-2 border-white pl-8">
          <h3 class="text-white text-4xl font-serif mb-8">Experiencia</h3>
          <ul class="space-y-10">
            <li v-for="exp in experience" :key="exp.role">
              <p class="text-amber-50 text-2xl font-bold">{{ exp.role }}</p>
              <p class="text-yellow-400 text-xl mt-1">{{ exp.company }} · {{ exp.period }}</p>
              <p class="text-amber-50/70 mt-3 leading-relaxed whitespace-pre-line">
                {{ exp.description }}
              </p>
            </li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-12">
          <!-- Frontend -->
          <div class="border-l-2 border-cyan-600 pl-8">
            <h3 class="text-cyan-600 text-4xl font-serif mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in frontendSkills"
                :key="skill"
                class="px-3 py-1 text-1xl text-amber-50 border border-cyan-600/50 hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Backend -->
          <div class="border-l-2 border-emerald-600 pl-8">
            <h3 class="text-emerald-600 text-4xl font-serif mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in backendSkills"
                :key="skill"
                class="px-3 py-1 text-1xl text-amber-50 border border-emerald-600/50 hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- DevOps & Prácticas -->
          <div class="border-l-2 border-yellow-400 pl-8">
            <h3 class="text-yellow-400 text-4xl font-serif mb-4">DevOps & Prácticas</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in devopsSkills"
                :key="skill"
                class="px-3 py-1 text-1xl text-amber-50 border border-yellow-400/50 hover:border-yellow-300 hover:text-yellow-300 transition-colors duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experience = [
  {
    role: 'Desarrollador de software',
    company: 'Metrica Consulting',
    period: '2025 – 2026',
    description: `Desarrollo colaborativo de una aplicación basada en microservicios en un equipo de 4 personas.
Gestión y administración de bases de datos relacionales con MySQL.
Integración de JWT (JSON Web Tokens) para control de acceso y seguridad.
Desarrollo de módulo frontend con Angular y TypeScript para la visualización de detalles de usuario, historial de rutas y gasolineras guardadas, con integración de la API de Google Maps.
Desarrollo ágil bajo metodología Scrum, aplicando TDD, control de versiones con Git y Git Flow, y patrones de diseño como Strategy, Factory, Builder y Chain of Responsibility.`,
  },
  {
    role: 'Técnico Informático',
    company: 'Hospital Naval',
    period: '2018 – 2022',
    description: 'Gestion de servicios hospitalarios y mejora de rendimiento del software.',
  },
];

const frontendSkills = ['Vue 3', 'Angular', 'TypeScript', 'TailwindCSS', 'Vitest'];

const backendSkills = [
  'Java (17 / 21)',
  'Spring Boot',
  'JUnit',
  'REST API',
  'JWT',
  'OAuth',
  'MySQL',
  'PostgreSQL',
  'SQL',
  'Oracle',
];

const devopsSkills = [
  'Linux',
  'Docker',
  'Git',
  'GitFlow',
  'CI/CD',
  'TDD',
  'Pattern Design',
  'KISS',
  'Postman',
];
</script>
