# Estructura de Datos — Portal de Objetos de Aprendizaje

Portal web educativo interactivo para la asignatura **Estructura de Datos (E-ETD-2)** de la Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital.

---

## Índice

1. [Descripción general](#descripción-general)
2. [Información de la asignatura](#información-de-la-asignatura)
3. [Propósito de aprendizaje](#propósito-de-aprendizaje)
4. [Unidades del curso](#unidades-del-curso)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Tecnologías utilizadas](#tecnologías-utilizadas)
7. [Contenido por unidad](#contenido-por-unidad)
8. [Características del portal](#características-del-portal)
9. [Guía de uso](#guía-de-uso)
10. [Autor](#autor)

---

## Descripción general

Este proyecto es una colección de **objetos de aprendizaje interactivos** diseñados para facilitar el estudio de las estructuras de datos en el entorno de programación Java. Cada página funciona como un módulo independiente que combina:

- Explicaciones teóricas claras y concisas
- Código fuente con resaltado de sintaxis
- Visualizaciones interativas y animaciones
- Ejercicios de autocomprobación
- Analogías cotidianas para reforzar conceptos

El portal está diseñado para funcionar como un recurso complementario al programa académico, permitiendo al estudiante revisar los conceptos a su propio ritmo.

---

## Información de la asignatura

| Campo                | Valor                                              |
| -------------------- | -------------------------------------------------- |
| **Asignatura**       | Estructura de Datos                                |
| **Clave**            | E-ETD-2                                            |
| **Programa**         | Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital |
| **Cuatrimestre**     | 4°                                                 |
| **Tipo de competence**| Competencia específica                            |
| **Créditos**         | 4.69                                               |
| **Modalidad**        | Escolarizada                                       |
| **Horas/semana**     | 5                                                  |
| **Horas totales**    | 75                                                 |

---

## Propósito de aprendizaje

> El estudiante implementará algoritmos que utilicen estructuras de datos para mejorar el rendimiento, calidad y mantenibilidad de los sistemas informáticos, a través de la modularidad y escalabilidad que satisfagan las necesidades de la organización.

---

## Unidades del curso

### Unidad I — Conceptos básicos de estructuras de datos orientadas a objetos

**Duración:** 20 horas (10 saber · 10 saber hacer)

**Propósito:** El estudiante desarrollará habilidades para implementar estructuras de datos utilizando tipos de datos abstractos, recursividad, arreglos, clases parametrizadas y tipos genéricos, con el fin de optimizar la gestión y manipulación de información.

**Temas:**

| Módulo | Archivo | Descripción |
| ------ | ------- | ----------- |
| Guía de instalación | `guia-instalacion-java-netbeans.html` | Preparación del entorno: JDK 21, NetBeans IDE y primer programa |
| Tipos de Datos Abstractos | `tda-cuenta-bancaria-java.html` | Especificación vs. implementación, encapsulamiento, ejemplo con cuenta bancaria |
| Funciones Recursivas | `recursion-java-explicacion.html` | Caso base y caso recursivo, visualizador de pila de llamadas |
| Arreglos | `arreglos-java-explicacion.html` | Concepto, declaración, creación y manipulación con recorrido animado |
| Genéricos y Clases Parametrizadas | `genericos-java-explicacion.html` | Parámetros de tipo, relación con la instanciación |

---

### Unidad II — Estructuras de datos básicas

**Duración:** 35 horas (10 saber · 25 saber hacer)

**Propósito:** El estudiante implementará estructuras de datos básicas, algoritmos de ordenamiento y búsqueda, así como el análisis de la complejidad de los algoritmos, para diseñar soluciones óptimas.

**Temas:**

| Módulo | Archivo | Descripción |
| ------ | ------- | ----------- |
| Listas Enlazadas | `listas-enlazadas-java.html` | Estructuras dinámicas; listas simples, dobles y circulares |
| Pilas | `pilas-java-explicacion.html` | Concepto LIFO, operaciones push/pop/peek |
| Colas | `colas-java-explicacion.html` | Concepto FIFO, operaciones enqueue/dequeue |
| Algoritmos de Ordenamiento y Búsqueda | `algoritmos-ordenamiento-busqueda-java.html` | Burbuja, selección, inserción; búsqueda lineal y binaria; complejidad algorítmica |

---

### Unidad III — Estructuras de datos avanzadas

**Duración:** 20 horas (10 saber · 10 saber hacer)

**Propósito:** El estudiante implementará estructuras de datos avanzadas para diseñar soluciones óptimas en entornos de programación.

**Temas:**

| Módulo | Archivo | Descripción |
| ------ | ------- | ----------- |
| Árboles | `arboles-java-explicacion.html` | Componentes, operaciones de un ABB, algoritmos de recorrido (pre/in/post/niveles) |
| Diccionarios | `diccionarios-java-explicacion.html` | Pares clave-valor, función hash, cubetas, operaciones put/get/remove |
| Conjuntos | `conjuntos-java-explicacion.html` | Unicidad, pertenencia, diagrama de Venn interactivo, unión/intersección/diferencia |

---

## Estructura del proyecto

```
Estructura web/
├── index.html                              # Página principal (índice de navegación)
├── css/
│   └── comun.css                           # Estilos base compartidos
├── js/
│   └── comun.js                            # Utilidades JavaScript compartidas
├── Apuntes/                                # Apuntes visuales (imágenes PNG)
│   ├── Arboles.png
│   ├── Algoritmos.png
│   ├── Clases parametrizadas.png
│   ├── Arreglos.png
│   ├── Colas.png
│   ├── Recursividad.png
│   ├── Pilas.png
│   ├── Tipo de datos abstractos.png
│   ├── Listas.png
│   ├── Diccionarios.png
│   └── Conjuntos.png
├── extra/
│   └── Recursividad.html                   # Contenido adicional
├── guia-instalacion-java-netbeans.html     # Guía de instalación del entorno
├── java-vs-csharp-sintaxis.html            # Comparación de sintaxis Java vs C#
├── tda-cuenta-bancaria-java.html           # Tipos de Datos Abstractos
├── recursion-java-explicacion.html         # Recursividad
├── arreglos-java-explicacion.html          # Arreglos
├── genericos-java-explicacion.html         # Genéricos y Clases Parametrizadas
├── listas-enlazadas-java.html              # Listas Enlazadas
├── pilas-java-explicacion.html             # Pilas
├── colas-java-explicacion.html             # Colas
├── algoritmos-ordenamiento-busqueda-java.html # Algoritmos de Ordenamiento y Búsqueda
├── arboles-java-explicacion.html           # Árboles
├── diccionarios-java-explicacion.html      # Diccionarios
├── conjuntos-java-explicacion.html         # Conjuntos
├── banco-ejercicios-estructura-de-datos.html # Banco de ejercicios progresivos
└── README.md                               # Este archivo
```

---

## Tecnologías utilizadas

| Tecnología | Versión/Detalles |
| ---------- | ---------------- |
| **HTML5**  | Semántica estándar, viewport responsive |
| **CSS3**   | Variables CSS, Grid, Flexbox, transiciones |
| **JavaScript** | Vanilla JS (sin dependencias),事件委托, accesibilidad ARIA |
| **Fuentes** | Google Fonts: Fraunces (títulos), Inter (cuerpo), JetBrains Mono (código) |

**No se utilizan frameworks ni librerías externas.** Todo el portal está construido con tecnologías web nativas para garantizar:

- Carga rápida y ligera
- Compatibilidad universal con navegadores modernos
- Mantenimiento sencillo
- Independencia de dependencias de terceros

---

## Contenido por unidad

### Unidad I — Fundamentos

- **Guía de instalación:** Configuración completa del entorno de desarrollo (JDK 21 + NetBeans) con instrucciones para Windows, macOS y Linux
- **TDA:** Explicación del concepto de tipos de datos abstractos con ejemplo práctico de cuenta bancaria
- **Recursividad:** Visualización interactiva de la pila de llamadas con ejemplos trabajados
- **Arreglos:** Animación de recorrido y manipulación de elementos
- **Genéricos:** Molde interactivo de tipo variable para entender clases parametrizadas

### Unidad II — Estructuras básicas

- **Listas enlazadas:** Concepto de estructuras dinámicas con implementación en Java
- **Pilas y Colas:** Operaciones fundamentales con explicaciones de LIFO y FIFO
- **Algoritmos:** Implementación visual de algoritmos de ordenamiento (burbuja, selección, inserción) y búsqueda (lineal, binaria)

### Unidad III — Estructuras avanzadas

- **Árboles:** Árbol binario de búsqueda con los cuatro algoritmos de recorrido
- **Diccionarios:** Estructura clave-valor con función hash
- **Conjuntos:** Operaciones de teoría de conjuntos con diagramas de Venn interactivos

---

## Características del portal

### Diseño

- Tema oscuro (dark mode) con paleta de colores consistente
- Tipografía optimizada para lectura en pantalla
- Diseño responsive para escritorio, tablet y móvil
- Navegación intuitiva entre temas

### Interactividad

- **Quizzes de autocomprobación:** Preguntas con respuestas expandibles
- **Visualizaciones animadas:** Recorridos de estructuras de datos en tiempo real
- **Analogías cotidianas:** Comparaciones con situaciones de la vida real
- **Código resaltado:** Sintaxis coloreada para facilitar la lectura

### Accesibilidad

- Navegación completa con teclado (Tab, Enter, Espacio)
- Atributos ARIA para lectores de pantalla
- Contraste de colores WCAG compliant
- Estructura semántica HTML

### Contenido complementario

- **Apuntes visuales:** Imágenes PNG con diagramas de cada estructura de datos
- **Banco de ejercicios:** Colección de ejercicios progresivos con nivel de dificultad
- **Comparativa Java vs C#:** Diferencias de sintaxis para estudiantes multilingüe

---

## Guía de uso

### Requisitos previos

- Un navegador web moderno (Chrome, Firefox, Edge, Safari)
- No se requiere instalación de servidor local

### Instrucciones

1. Abre el archivo `index.html` en tu navegador
2. Selecciona el tema que deseas estudiar haciendo clic en la tarjeta correspondiente
3. Navega por el contenido usando los botones de "anterior" y "siguiente" al final de cada página
4. Realiza los quizzes de autocomprobación para verificar tu comprensión
5. Consulta el banco de ejercicios para practicar

### Estructura de navegación

```
index.html (Inicio)
    ├── Unidad I
    │   ├── Guía de instalación
    │   ├── TDA
    │   ├── Recursividad
    │   ├── Arreglos
    │   └── Genéricos
    ├── Unidad II
    │   ├── Listas Enlazadas
    │   ├── Pilas
    │   ├── Colas
    │   └── Algoritmos
    └── Unidad III
        ├── Árboles
        ├── Diccionarios
        └── Conjuntos
```

---

## Archivos especiales

| Archivo | Descripción |
| ------- | ----------- |
| `java-vs-csharp-sintaxis.html` | Comparación detallada de sintaxis entre Java y C# para consola y POO |
| `banco-ejercicios-estructura-de-datos.html` | Banco de ejercicios progresivos organizados por tema con nivel de dificultad y soluciones |
| `Apuntes/*.png` | Imágenes de apoyo visual para estudio offline |

---

## Autor

**MTI Luis Alberto Mendoza San Juan**

Elaboró el programa de asignatura y los objetos de aprendizaje.

---

## Licencia

Este proyecto es un recurso educativo. El contenido está diseñado para uso académico dentro del programa de la Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital.
