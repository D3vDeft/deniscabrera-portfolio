<template>
  <article
    class="border border-gray-400/20 w-full max-w-5xl flex flex-col md:flex-row min-h-0 md:h-150"
  >
    <!-- Imagen: banner superior en móvil, columna izquierda en desktop -->
    <div class="w-full h-56 sm:h-72 md:w-auto md:h-auto md:flex-1 flex-shrink-0">
      <img
        src="/public/Portfolio_IMG.jpg"
        class="h-full w-full object-cover object-top md:object-center"
      />
    </div>

    <!-- Columna Derecha - Contenido -->
    <div class="flex-1 flex flex-col justify-between py-8 px-6 md:py-10 md:pl-10 md:pr-8">
      <!-- Fila 1 - About me -->
      <div class="flex flex-col gap-4">
        <div>
          <h1 class="text-emerald-600 text-2xl md:text-4xl font-serif italic tracking-wide">
            Acerca de mí
          </h1>
          <div class="h-px w-32 bg-emerald-400/50 mt-2"></div>
        </div>
        <p class="text-base text-amber-50/90 leading-relaxed">
          Mi pasión por la tecnología me lleva a desarrollar soluciones creativas y completas,
          comenzando con el diseño de las funcionalidades de la aplicación, y junto a mi stack de
          habilidades, desde backend con
          <span
            title="Lenguaje de programación creado por James Gosling"
            class="text-yellow-400 font-bold"
            >Java</span
          >
          y
          <span title="Framework backend basado en Java" class="text-yellow-400 font-bold"
            >Spring Boot</span
          >
          hasta interfaces web
          <span title="User Interface/User Experience" class="text-yellow-400 font-bold"
            >(UI/UX)</span
          >
          con
          <span title="Framework's de frontend" class="text-yellow-400 font-bold"
            >Angular / Vue</span
          >
          y
          <span
            title="Lenguaje de programación tipado y/o superset de javascript"
            class="text-yellow-400 font-bold"
            >TypeScript</span
          >. El trabajo con
          <span
            title="Interfaces de trasferencia de estado representacional"
            class="text-yellow-400 font-bold"
            >APIs REST</span
          >, las buenas prácticas como la refactorización del código, los
          <span
            title="Libro que contiene conjunto de patrones para resolver uno o varios problema de forma optima escrito por Erich Gamma"
            class="text-yellow-400 font-bold"
            >Pattern Design</span
          >
          y la metodología
          <span title="Test Driven Development" class="text-yellow-400 font-bold">TDD</span> son
          parte de mi forma de desarrollar. El uso de
          <span title="Kernel desarrollador por Linus Torvald" class="text-yellow-400 font-bold"
            >Linux</span
          >
          refleja mi compromiso con las buenas prácticas
          <span title="Keep it Short and Simple" class="text-yellow-400 font-bold">KISS</span> y
          <span title="Developer operations" class="text-yellow-400 font-bold">DevOps</span>.
        </p>
      </div>

      <!-- Fila 2 - Contacto -->
      <div class="flex flex-col gap-4">
        <div>
          <h1 class="text-cyan-600 text-2xl md:text-4xl font-serif italic tracking-wide">
            Contacto
          </h1>
          <div class="h-px w-28 bg-cyan-400/50 mt-2"></div>
        </div>
        <div class="flex flex-col sm:flex-row gap-2">
          <a
            href="mailto:deniscarloscabrera@outlook.es"
            class="flex-1 h-9 flex items-center justify-center gap-2 border border-blue-500/50 text-amber-50 text-sm font-bold hover:border-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <svg height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="currentColor"
                d="M320 128C214 128 128 214 128 320C128 426 214 512 320 512C337.7 512 352 526.3 352 544C352 561.7 337.7 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320L576 352C576 405 533 448 480 448C450.7 448 424.4 434.8 406.8 414.1C384 435.1 353.5 448 320 448C249.3 448 192 390.7 192 320C192 249.3 249.3 192 320 192C347.9 192 373.7 200.9 394.7 216.1C400.4 211.1 407.8 208 416 208C433.7 208 448 222.3 448 240L448 352C448 369.7 462.3 384 480 384C497.7 384 512 369.7 512 352L512 320C512 214 426 128 320 128zM384 320C384 284.7 355.3 256 320 256C284.7 256 256 284.7 256 320C256 355.3 284.7 384 320 384C355.3 384 384 355.3 384 320z"
              />
            </svg>
            <span>Correo</span>
          </a>
          <a
            href="https://www.linkedin.com/in/devdeft/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 h-9 flex items-center justify-center gap-2 border border-cyan-400/50 text-amber-50 text-sm font-bold hover:border-cyan-300 hover:text-cyan-200 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="18">
              <path
                fill="currentColor"
                d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
              />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/D3vDeft"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 h-9 flex items-center justify-center gap-2 border border-amber-50/30 text-amber-50 text-sm font-bold hover:border-amber-50 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="18">
              <path
                fill="currentColor"
                d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
