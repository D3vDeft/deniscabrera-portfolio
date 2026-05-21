<template>
  <section
    class="bg-black w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 md:px-8 lg:px-12 pt-50"
  >
    <div class="w-full max-w-7xl">
      <h2
        class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-50 font-serif italic mb-8 md:mb-12 lg:mb-20"
      >
        Experiencia & <span class="text-yellow-400 font-bold not-italic">Skills</span>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
        <!-- Experiencia / Skill Detail -->
        <div
          class="border-l-2 pl-6 md:pl-8 transition-colors duration-300"
          :class="activeSkill ? activeSkill.borderColor : 'border-white'"
        >
          <div class="panel-stack">
            <!-- Experience: siempre en DOM, determina la altura del contenedor -->
            <div
              class="panel-item"
              :class="{ 'panel-hidden': activeSkill !== null }"
              :aria-hidden="activeSkill !== null"
            >
              <h3 class="text-white text-xl md:text-2xl lg:text-4xl font-serif mb-6 md:mb-8">
                Experiencia
              </h3>
              <ul class="space-y-8 md:space-y-10">
                <li v-for="exp in experience" :key="exp.role">
                  <p class="text-amber-50 text-base md:text-lg lg:text-2xl font-bold">
                    {{ exp.role }}
                  </p>
                  <p class="text-yellow-400 text-xs md:text-sm lg:text-xl mt-1">
                    {{ exp.company }} · {{ exp.period }}
                  </p>
                  <p
                    class="text-amber-50/70 mt-2 md:mt-3 text-sm md:text-base leading-relaxed whitespace-pre-line"
                  >
                    {{ exp.description }}
                  </p>
                </li>
              </ul>
            </div>
            <!-- Skill detail: apilado encima via grid-area, nunca afecta la altura -->
            <div
              class="panel-item"
              :class="{ 'panel-hidden': activeSkill === null }"
              :aria-hidden="activeSkill === null"
            >
              <template v-if="activeSkill">
                <h3
                  class="text-xl md:text-2xl lg:text-4xl font-serif italic mb-3"
                  :class="activeSkill.textColor"
                >
                  {{ activeSkill.skill }}
                </h3>
                <div class="h-px w-10 mb-6" :class="activeSkill.dividerBg"></div>
                <p class="text-amber-50/80 text-sm md:text-base lg:text-lg leading-relaxed">
                  {{ activeSkill.description }}
                </p>
              </template>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <!-- Frontend -->
          <div class="border-l-2 border-cyan-600 pl-6 md:pl-8">
            <h3 class="text-cyan-600 text-xl md:text-2xl lg:text-4xl font-serif mb-3 md:mb-4">
              Frontend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in frontendSkills"
                :key="skill.skill"
                class="px-2 md:px-3 py-1 text-xs md:text-sm lg:text-base text-amber-50 border border-cyan-600/50 hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-200 cursor-default"
                @mouseenter="setActive(skill, 'cyan')"
                @mouseleave="clearActive"
              >
                {{ skill.skill }}
              </span>
            </div>
          </div>

          <!-- Backend -->
          <div class="border-l-2 border-emerald-600 pl-6 md:pl-8">
            <h3 class="text-emerald-600 text-xl md:text-2xl lg:text-4xl font-serif mb-3 md:mb-4">
              Backend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in backendSkills"
                :key="skill.skill"
                class="px-2 md:px-3 py-1 text-xs md:text-sm lg:text-base text-amber-50 border border-emerald-600/50 hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-200 cursor-default"
                @mouseenter="setActive(skill, 'emerald')"
                @mouseleave="clearActive"
              >
                {{ skill.skill }}
              </span>
            </div>
          </div>

          <!-- DevOps & Prácticas -->
          <div class="border-l-2 border-yellow-400 pl-6 md:pl-8">
            <h3 class="text-yellow-400 text-xl md:text-2xl lg:text-4xl font-serif mb-3 md:mb-4">
              DevOps & Prácticas
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in devopsSkills"
                :key="skill.skill"
                class="px-2 md:px-3 py-1 text-xs md:text-sm lg:text-base text-amber-50 border border-yellow-400/50 hover:border-yellow-300 hover:text-yellow-300 transition-colors duration-200 cursor-default"
                @mouseenter="setActive(skill, 'yellow')"
                @mouseleave="clearActive"
              >
                {{ skill.skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    description: 'Gestión de servicios hospitalarios y mejora de rendimiento del software.',
  },
];

interface Skill {
  skill: string;
  description: string;
}

type SkillCategory = 'cyan' | 'emerald' | 'yellow';

interface ActiveSkill extends Skill {
  borderColor: string;
  textColor: string;
  dividerBg: string;
}

const categoryStyles: Record<SkillCategory, Omit<ActiveSkill, keyof Skill>> = {
  cyan: {
    borderColor: 'border-cyan-600',
    textColor: 'text-cyan-400',
    dividerBg: 'bg-cyan-600/60',
  },
  emerald: {
    borderColor: 'border-emerald-600',
    textColor: 'text-emerald-400',
    dividerBg: 'bg-emerald-600/60',
  },
  yellow: {
    borderColor: 'border-yellow-400',
    textColor: 'text-yellow-400',
    dividerBg: 'bg-yellow-400/60',
  },
};

const activeSkill = ref<ActiveSkill | null>(null);

const setActive = (skill: Skill, category: SkillCategory) => {
  activeSkill.value = { ...skill, ...categoryStyles[category] };
};

const clearActive = () => {
  activeSkill.value = null;
};

const frontendSkills: Skill[] = [
  {
    skill: 'Vue 3',
    description:
      'Framework progresivo para construir interfaces reactivas con Composition API, ideal para SPAs modernas con un ecosistema ligero y flexible.',
  },
  {
    skill: 'Angular',
    description:
      'Framework empresarial de Google con inyección de dependencias, módulos y arquitectura robusta orientada a aplicaciones de gran escala.',
  },
  {
    skill: 'TypeScript',
    description:
      'Superset tipado de JavaScript que eleva la calidad del código, facilita el refactoring y detecta errores en tiempo de compilación.',
  },
  {
    skill: 'TailwindCSS',
    description:
      'Framework CSS utility-first que permite construir diseños consistentes y responsivos directamente en el HTML sin salir del componente.',
  },
  {
    skill: 'Vitest',
    description:
      'Framework de testing ultrarrápido integrado con el ecosistema Vite, compatible con la API de Jest para tests unitarios y de integración.',
  },
];

const backendSkills: Skill[] = [
  {
    skill: 'Java (17 / 21)',
    description:
      'Lenguaje orientado a objetos de alto rendimiento con versiones LTS estables y características modernas como Records, Sealed Classes y Virtual Threads.',
  },
  {
    skill: 'Spring Boot',
    description:
      'Framework que simplifica la creación de microservicios y APIs REST con autoconfiguración, inyección de dependencias y un ecosistema maduro.',
  },
  {
    skill: 'JUnit',
    description:
      'Framework estándar de testing en Java aplicado bajo metodología TDD, garantizando cobertura y calidad desde la fase de diseño.',
  },
  {
    skill: 'REST API',
    description:
      'Diseño e implementación de APIs RESTful con contratos claros, versionado semántico y documentación con OpenAPI / Swagger.',
  },
  {
    skill: 'JWT',
    description:
      'Tokens compactos y firmados para autenticación stateless en sistemas distribuidos, con control de expiración y roles.',
  },
  {
    skill: 'OAuth',
    description:
      'Protocolo estándar de autorización delegada que permite integraciones seguras entre servicios sin exponer credenciales.',
  },
  {
    skill: 'MySQL',
    description:
      'Sistema relacional ampliamente usado en producción, con dominio en modelado, consultas optimizadas e índices.',
  },
  {
    skill: 'PostgreSQL',
    description:
      'Base de datos relacional avanzada con soporte JSON, CTEs, procedimientos almacenados y alta fiabilidad en entornos exigentes.',
  },
  {
    skill: 'SQL',
    description:
      'Dominio del lenguaje estándar para consulta, manipulación y administración de datos en motores relacionales.',
  },
  {
    skill: 'Oracle',
    description:
      'Sistema de base de datos empresarial de alto rendimiento con soporte para grandes volúmenes de datos y PL/SQL.',
  },
];

const devopsSkills: Skill[] = [
  {
    skill: 'Linux',
    description:
      'Linux es un kernel desarrollado por Linus Torvalds. A menudo es utilizado como una metonimia para referirse a los sistemas operativos de kernel Linux, aunque también es correcto la utilización de GNU/Linux a pesar de que no todos los sistemas utilizan la filosofía GNU, como por ejemplo Android, que sí utiliza el kernel Linux.',
  },
  {
    skill: 'Docker',
    description:
      'Contenerización de aplicaciones para garantizar entornos reproducibles y consistentes en cualquier infraestructura, que mejora la velocidad de despliegue ante las VM (Virtual Machines).',
  },
  {
    skill: 'Git',
    description:
      'Control de versiones distribuido con dominio de branching, merging, rebasing y resolución de conflictos en equipos, desarrollado por Linus Torvalds.',
  },
  {
    skill: 'GitFlow',
    description:
      'Metodología y/o flujo de trabajo en Git estructurado para la gestión ordenada de features, releases y hotfixes en equipos de desarrollo.',
  },
  {
    skill: 'CI/CD',
    description:
      'Por sus siglas en inglés CI/CD (Continuous Integration / Continuous Deployment) es la automatización de pipelines de build, test y despliegue para entregas continuas, rápidas y fiables en producción.',
  },
  {
    skill: 'TDD',
    description:
      'Test-Driven Development: metodología que se utiliza para garantizar diseño limpio, cobertura real y refactoring seguro, escribiendo los tests antes que el código.',
  },
  {
    skill: 'Pattern Design',
    description:
      'Libro escrito por Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides — Addison-Wesley (GoF: Gang of Four). Describe las técnicas para resolver problemas comunes en el desarrollo de software.',
  },
  {
    skill: 'KISS',
    description:
      'Keep it Short and Simple es un principio de diseño que prioriza la simplicidad y legibilidad del código, evitando complejidad innecesaria y sobre-ingeniería.',
  },
  {
    skill: 'Postman',
    description:
      'Herramienta para diseño, prueba y documentación de APIs REST con colecciones organizadas, variables de entorno y automatización.',
  },
];
</script>

<style scoped>
/* Ambos paneles comparten la misma celda del grid.
   El contenedor siempre mide lo que mide el panel de experiencia
   (más alto), eliminando cualquier reflow al hacer hover. */
.panel-stack {
  display: grid;
}

.panel-item {
  grid-area: 1 / 1;
  transition:
    opacity 0.35s ease,
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.panel-hidden {
  opacity: 0;
  transform: translateX(28px);
  pointer-events: none;
  user-select: none;
}
</style>
