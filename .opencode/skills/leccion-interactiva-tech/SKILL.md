---
name: leccion-interactiva-tech
description: Genera páginas HTML interactivas de una sola pieza para enseñar un tema técnico (estructuras de datos, POO, Java, C#, configuración de entornos de desarrollo, comparativas de lenguajes, etc.), con el estilo visual oscuro y la estrategia pedagógica (Feynman, componentes, función práctica, errores frecuentes, Principio de Pareto, active recall) desarrollados para el curso de Estructura de Datos de Luis. ÚSALA cada vez que se pida crear/generar una página, guía, explicación "handwritten", objeto de aprendizaje, banco de ejercicios, guía de instalación o comparativa de lenguajes para clase — incluso si no se menciona explícitamente el estilo, con tal de que el tema sea técnico/de programación y el resultado deba ser una página. También úsala cuando se pida "una página como las anteriores" o se referencie el estilo ya usado en el curso.
---

# Lección interactiva (estilo Estructura de Datos)

Skill para producir páginas `.html` autocontenidas, listas para el repositorio de GitHub del curso, que enseñan un tema técnico con un patrón visual y pedagógico consistente. No es un tema de diseño genérico: es el sistema específico ya validado en las ~15 páginas generadas para el curso E-ETD-2 (TDA, recursividad, arreglos, genéricos, listas, pilas, colas, ordenamiento, árboles, diccionarios, conjuntos, banco de ejercicios, guía de instalación Java/NetBeans, guía Git/GitHub, comparativa Java vs C#).

## Flujo de trabajo

1. Identifica el tema y qué tipo de página es (ver "Variantes" abajo — no todas siguen el mismo orden de secciones).
2. Copia `assets/base-template.html` como punto de partida — ya trae el sistema de diseño completo (tokens CSS, tipografías, todos los componentes reutilizables). No reinventes el CSS desde cero.
3. Diseña el **elemento signature** antes que nada (ver sección dedicada) — es lo primero que define el resto de la página.
4. Redacta el contenido siguiendo el orden de secciones de la variante correspondiente.
5. Guarda el archivo en `/mnt/user-data/outputs/` con nombre descriptivo en kebab-case (ej. `arboles-avl-java.html`), sin acentos ni espacios.
6. Entrega el archivo con `present_files` (no publiques con la herramienta Artifact) — son archivos pensados para vivir en el repositorio de GitHub del curso, no páginas hospedadas por Claude.
7. **Siempre**, después de mostrar el archivo, cierra con 2-3 sugerencias concretas de cómo mejorar esa página específica (no genéricas) — es parte explícita del contrato de este skill, no un extra opcional.

## Sistema de diseño (tokens)

Paleta fija en todas las páginas — nunca la cambies entre páginas del mismo curso:

```css
--ink:#1B1F2B;      /* fondo principal */
--ink-2:#242A3B;     /* fondo de tarjetas/paneles */
--card:#F5F1E8;      /* fondo "papel" para elementos destacados (nodos, cajas) */
--card-line:#DED6C2; /* bordes sobre --card */
--text:#E4E7ED;      /* texto principal */
--text-dim:#9AA1B4;  /* texto secundario */
--amber:#E8A33D;     /* acento primario: preguntas, código Java, botones */
--teal:#4FB0AE;      /* acento secundario: código C#, aciertos, contraste con amber */
--rose:#E06C75;      /* alertas, advertencias, valores numéricos en código */
```

Tipografías (Google Fonts): **Fraunces** (serif, para títulos — `h1`/`h2`/`h3`), **Inter** (texto general), **JetBrains Mono** (todo lo que sea código, etiquetas técnicas, badges).

Componentes reutilizables ya resueltos en `assets/base-template.html`: hero con badge + título + subtítulo; caja de analogía (`.analogy`, borde izquierdo teal); paneles de código con syntax highlighting manual por `<span>` (`.kw` `.tp` `.cm` `.num` `.str` `.an` `.tv`); grid de 2 columnas para "componentes"/"función práctica" (`.traits`/`.uses`); tabla comparativa (`table.cmp`); caja de error (`.pitfall`, icono ⚠ rose); checklist de Pareto (`ul.checklist`, flecha amber); preguntas de active recall colapsables (`.quiz-item`, clic para abrir/cerrar, sin JS extra — usa `onclick="this.classList.toggle('open')"`); nota de pie firmada.

## El elemento "signature": la regla más importante

Cada página necesita **un elemento interactivo que sea el modelo mental del tema, no una decoración**. Antes de escribir una sola línea de contenido, pregúntate: *¿qué manipulación con el mouse hace que el concepto se entienda sin leer nada?*

Ya usados (no los repitas para un tema distinto — inventa uno nuevo si el tema se parece a alguno de estos):

| Tema | Elemento signature |
|---|---|
| Recursividad | Pila de llamadas que crece/decrece con "Siguiente paso" |
| TDA | Caja que se "abre" para revelar la implementación oculta |
| Arreglos | Fila de casilleros numerados con recorrido animado |
| Genéricos | Molde `Caja<T>` con selector de tipo que acepta/rechaza valores |
| Listas enlazadas | Cadena de nodos con flechas que cambian (→ / ⇄ / ↻) según simple/doble/circular |
| Pilas / Colas | Torre de charolas / fila con `push`/`pop`/`peek` o `enqueue`/`dequeue` reales |
| Ordenamiento | Barras que se comparan e intercambian paso a paso, por algoritmo seleccionable |
| Árboles | ABB en SVG: insertar valores y animar los 4 recorridos resaltando nodos en orden |
| Diccionarios | Cubetas de hash: `put`/`get` muestran a qué cubeta cae cada clave |
| Conjuntos | Diagrama de Venn real con unión/intersección/diferencia resaltada |
| Guías de instalación | Checklist con barra de progreso + pestañas por sistema operativo |
| Comparativas de lenguaje | Paneles de código lado a lado, uno por lenguaje, mismo ejemplo funcional |

Si el tema no encaja con ninguno, diseña uno nuevo siguiendo el mismo principio — nunca un GIF decorativo ni una imagen estática sin interacción.

## Variantes y su orden de secciones

**A. Objeto de aprendizaje de un concepto** (TDA, recursividad, estructuras de datos, etc.):
1. Hero + elemento signature
2. `01` Concepto — analogía estilo Feynman (una situación cotidiana, no una definición de libro)
3. `02` Componentes / Anatomía (grid `.traits`)
4. `03` Función práctica — casos de uso reales (grid `.uses`) y/o código Java completo comentado
5. `04` Errores frecuentes (`.pitfall`, 3 items)
6. `05` Principio de Pareto — 5 reglas que explican el 80% del tema (`ul.checklist`)
7. `06` Active recall — 4-5 preguntas colapsables
8. Pie firmado

Ejemplo completo y literal: `references/ejemplos/arboles-java-explicacion.html` (signature: ABB en SVG con inserción y los 4 recorridos animados).

**B. Banco de ejercicios**: nav de saltos rápidos → secciones `<details>` colapsables por tema, cada una con 5 tarjetas de ejercicio (Nivel 1-5, badge de color por dificultad, "Caso de uso" redactado + "Requisitos" en viñetas). No lleva quiz ni Pareto.

Ejemplo completo y literal: `references/ejemplos/banco-ejercicios-estructura-de-datos.html`.

**C. Guía de instalación/configuración paso a paso**: checklist + barra de progreso como signature → secciones `Paso N` con pestañas por SO cuando aplique, cajas `.tip`/`.warn`, tabla final de solución de problemas. No lleva Feynman ni Pareto — es procedimental, no conceptual.

Ejemplo completo y literal: `references/ejemplos/guia-instalacion-java-netbeans.html`.

**D. Comparativa entre dos tecnologías**: leyenda de colores (uno por tecnología) → nav de saltos → tarjetas con `.code-grid` de 2 columnas (mismo ejemplo en ambas tecnologías) y una caja `.key-point` (rose) señalando la trampa conceptual más común al cambiar de una a otra.

Ejemplo completo y literal: `references/ejemplos/java-vs-csharp-sintaxis.html`.

Antes de escribir una página nueva de una variante dada, abre (`view`) el ejemplo correspondiente — es más confiable que trabajar solo a partir de la descripción de arriba, sobre todo para el detalle exacto de marcado del elemento signature.

## Convenciones de código

- Java: comentarios y nombres de variables en español, salvo palabras reservadas del lenguaje.
- Resalta manualmente con `<span class="kw">` (palabras clave), `<span class="tp">` (tipos), `<span class="cm">` (comentarios), `<span class="num">` (números), `<span class="str">` (cadenas), `<span class="tv">` (parámetros de tipo genérico), `<span class="an">` (anotaciones como `@Override`) — nunca uses una librería de highlighting externa, rompe la regla de archivo autocontenido.
- Cada ejemplo de código debe ser ejecutable tal cual (o casi: fragmentos de método son aceptables si el contexto de la clase es obvio), nunca pseudocódigo.

## Firma y entrega

Toda página termina con:
```html
<p class="footer-note">
  <!-- una línea describiendo la página / el curso -->
  <span class="name">MTI Luis Alberto Mendoza San Juan</span>
</p>
```

El archivo se entrega con `present_files`, nunca con la herramienta Artifact — estas páginas están pensadas para vivir dentro del repositorio del curso en GitHub (ver estructura ya definida: `objetos-aprendizaje/unidad-N/`, `ejercicios/`, etc.), no como enlaces de claude.ai.

## Después de generar: mejoras sugeridas (obligatorio)

Cierra siempre con 2-3 ideas concretas de mejora **específicas a esa página**, por ejemplo: una animación adicional para un caso borde, una segunda variante del signature (p. ej. mostrar la versión "mala" junto a la corregida), un enlace cruzado hacia un tema relacionado ya construido, o una pregunta de active recall adicional que cubra un error frecuente detectado. No repitas una lista genérica de "podrías agregar más ejercicios" en cada página — que la sugerencia nazca del contenido específico que acabas de crear.
