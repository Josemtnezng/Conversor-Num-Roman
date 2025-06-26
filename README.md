# 🏛️ Conversor de Números a Romanos

¡Un elegante y sencillo conversor de números arábigos a su equivalente en numeración romana! Este proyecto ha sido desarrollado utilizando tecnologías web fundamentales y se ejecuta en un entorno de desarrollo moderno gestionado con NPM.



## ✨ Características Principales

-   **Interfaz Sencilla**: Un campo de texto y un botón. ¡No necesitas más!
-   **Funcionalidad Directa**: Introduce un número del 1 al 3999 y obtén su versión romana al instante.
-   **Estilo Romano Inmersivo**: Utiliza una paleta de colores, una tipografía y una imagen de fondo que evocan la grandeza del Imperio Romano.
-   **Entorno de Desarrollo con NPM**: Usa `live-server` para un desarrollo ágil con recarga automática en el navegador.
-   **Diseño Adaptable (Responsive)**: La interfaz se ve genial tanto en un monitor de escritorio como en la pantalla de un móvil.
-   **Accesibilidad**: Funciona tanto con un clic en el botón como pulsando la tecla "Enter".

## 🚀 Tecnologías Utilizadas

-   **HTML5**: Para la estructura semántica de la página.
-   **CSS3**: Para el diseño visual, el fondo, los colores y la adaptabilidad.
-   **JavaScript (Vanilla JS)**: Para toda la lógica de conversión y la manipulación del DOM.
-   **Node.js + NPM**: Para la gestión de paquetes y el servidor de desarrollo local.

## ⚙️ Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, necesitarás tener Node.js instalado.

#### Prerrequisitos
-   **Node.js** (incluye NPM): Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

#### Pasos

1.  **Clona el repositorio** en tu máquina local:
    ```bash
    git clone [https://github.com/tu-usuario/conversor-romano.git](https://github.com/tu-usuario/conversor-romano.git)
    cd conversor-romano
    ```

2.  **Instala las dependencias** del proyecto (en este caso, `live-server`):
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**:
    ```bash
    npm start
    ```
    ¡Y listo! Este comando abrirá automáticamente el proyecto en tu navegador y se recargará cada vez que guardes un cambio en el código.

## 🛠️ Explicación del Código

El proyecto se construyó siguiendo una lógica clara y separando las responsabilidades:

1.  **HTML (`index.html`)**: Se creó la estructura básica con un `input` para el número, un `button` para la acción de convertir y un párrafo (`p`) para mostrar el resultado.

2.  **CSS (`styles.css`)**: Se definió el estilo visual, importando la fuente "Cinzel", aplicando una imagen de fondo con superposición y asegurando que el diseño fuera adaptable a móviles con `media queries`.

3.  **JavaScript (`script.js`)**: Aquí es donde ocurre toda la magia. El código está estructurado en tres partes principales:

    #### a. Inicialización y Selección de Elementos
    Todo el script está envuelto en un `addEventListener` que espera al evento `DOMContentLoaded`. Esto es una buena práctica para asegurar que el código no se ejecute hasta que toda la estructura HTML esté completamente cargada, evitando errores.
    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        // Obtenemos referencias a los elementos del HTML que vamos a usar
        const numeroInput = document.getElementById('numeroInput');
        const convertirBtn = document.getElementById('convertirBtn');
        const resultadoP = document.getElementById('resultado');
        // ... el resto del código va aquí ...
    });
    ```

    #### b. El Algoritmo de Conversión: `convertirARomano()`
    Esta es la función principal que contiene la lógica de conversión.
    -   **La Tabla de Conversión**: Se define un array de objetos llamado `tablaRomana`. Cada objeto contiene un par de `valor` y `simbolo`.
        ```javascript
        const tablaRomana = [
            { valor: 1000, simbolo: 'M' }, { valor: 900, simbolo: 'CM' },
            // ... y así sucesivamente ...
            { valor: 1, simbolo: 'I' }
        ];
        ```
        Es **crucial** que este array esté **ordenado de mayor a menor**. El algoritmo se basa en este orden para funcionar correctamente.

    -   **El Algoritmo "Codicioso" (Greedy Algorithm)**: La función recorre la `tablaRomana`. Para cada valor (ej: 1000), utiliza un bucle `while` para "restar" ese valor del número introducido tantas veces como sea posible, añadiendo el símbolo correspondiente al resultado cada vez.
        > Por ejemplo, para el número **94**:
        > 1. No es mayor que 1000, 900...
        > 2. Es mayor que 90. Se añade **"XC"** al resultado y al número se le resta 90 (quedan 4).
        > 3. No es mayor que 50, 40, 10, 9, 5...
        > 4. Es mayor que 4. Se añade **"IV"** al resultado y al número se le resta 4 (queda 0).
        > 5. El resultado final es **"XCIV"**.

    #### c. Manejo de Eventos y Lógica de la Interfaz
    -   La función `manejarConversion()` es la que se encarga de conectar la lógica con la interfaz. Obtiene el valor del `input`, lo convierte a un número entero con `parseInt()` y lo valida.
    -   Si el número es válido, llama a `convertirARomano()` y muestra el resultado. Si no, muestra un mensaje de error temático.
    -   Finalmente, se añaden dos `addEventListener`: uno para el `click` en el botón y otro para la tecla `Enter` en el campo de texto. Ambos ejecutan la misma función `manejarConversion()`, mejorando la experiencia de usuario.

## 📁 Estructura del Proyecto

```
/conversor-romano
│
├── 📄 index.html      # La estructura de la página
├── 📄 styles.css       # Los estilos y el diseño
├── 📄 script.js        # La lógica de conversión
│
├── 📄 package.json      # Define el proyecto y las dependencias de desarrollo
├── 📄 package-lock.json  # Registra las versiones exactas de las dependencias
└── 📁 node_modules/    # Carpeta donde se instalan las dependencias
```

---

### 📚 Recursos Utilizados

Aquí tienes los enlaces directos a las herramientas y recursos que se han usado para construir este proyecto:

-   **Fuente "Cinzel"**: [https://fonts.google.com/specimen/Cinzel]
-   **Imagen de Fondo**: [https://images.pexels.com/photos/165173/pexels-photo-165173.jpeg]
-   **Guía de Propiedades CSS (MDN)**: [https://developer.mozilla.org/es/docs/Web/CSS]
-   **Guía de JavaScript y DOM (MDN)**: [https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model]
