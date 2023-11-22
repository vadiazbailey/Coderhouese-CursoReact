# Curso coderhouse
El proyecto desarrollado es una e-commerce de lenceria para mujeres llamada Afrodita. En el home se puede ver todos los productos, y en el menu se pueden seleccionar las categorias para ver los productos en especifico. Se pueden agregar al cart y se realiza un breve checkout para confirmar las compras, con la validacion de los input.

## Descripción

Este proyecto utiliza React, una biblioteca de JavaScript para construir interfaces de usuario interactivas. React se basa en la idea de componentes reutilizables y permite el desarrollo de aplicaciones de una manera declarativa y eficiente.

## Requisitos previos
Asegúrate de tener Node.js y npm instalados en tu máquina antes de comenzar. Puedes descargarlos desde el [sitio web oficial de Node.js](https://nodejs.org/).

## Instalación de Node.js y npm
Si no tienes Node.js y npm instalados, descárgalos e instálalos desde el [sitio web oficial de Node.js](https://nodejs.org/). npm se instalará automáticamente junto con Node.js.

## Crear un Proyecto de React desde Cero
Para crear un nuevo proyecto de React, puedes utilizar Create React App, una herramienta que facilita la creación y configuración de proyectos de React.

```bash
npx create-react-app mi-nuevo-proyecto
cd mi-nuevo-proyecto
```

Reemplaza "mi-nuevo-proyecto" con el nombre que desees para tu proyecto. Este comando creará una nueva carpeta con la estructura básica de un proyecto de React.

## Instalación
Una vez que hayas clonado o creado tu proyecto de React, navega al directorio del proyecto:

```bash
cd mi-nuevo-proyecto
```

Instala las dependencias del proyecto:

```bash
npm install
```

### Instalación de Bootstrap
Este proyecto utiliza Bootstrap para el diseño y la interfaz de usuario. Para instalar Bootstrap, ejecuta el siguiente comando:

```bash
npm install bootstrap
```

Luego, importa los estilos de Bootstrap en tu aplicación. Abre el archivo `src/index.css` y agrégales la siguiente línea:

```css
/* src/index.css */
@import "~bootstrap/dist/css/bootstrap.min.css";
```

Si deseas agregar componentes de Bootstrap a tu aplicación React utilizando `react-bootstrap`, puedes seguir estos pasos:

1. **Instalación de React Bootstrap:**

   Asegúrate de tener instalado `react-bootstrap` y las dependencias de Bootstrap. Puedes instalarlos con el siguiente comando:

   ```bash
   npm install react-bootstrap bootstrap
   ```

2. **Uso de Componentes de React Bootstrap:**

   Después de la instalación, puedes utilizar los componentes de Bootstrap en tu aplicación. Aquí hay un ejemplo de cómo podrías integrar un botón de Bootstrap en tu aplicación:

   ```jsx
   // src/components/EjemploBootstrap.js
   import React from 'react';
   import { Button } from 'react-bootstrap';

   const EjemploBootstrap = () => {
     return (
       <div>
         <h2>Ejemplo de Bootstrap</h2>
         <Button variant="primary">Botón de Bootstrap</Button>
       </div>
     );
   };

   export default EjemploBootstrap;
   ```
Puedes explorar más componentes y opciones en la [página de la documentación de React Bootstrap](https://react-bootstrap.netlify.app/), donde encontrarás una lista completa de componentes disponibles y ejemplos de cómo usarlos. Asegúrate de seguir las instrucciones de importación y configuración proporcionadas en la documentación.

### Instalación de React Icons
React Icons se utiliza en este proyecto para integrar íconos de manera sencilla. Para instalar React Icons, ejecuta el siguiente comando:

```bash
npm install react-icons
```

En tu componente React, puedes utilizar React Icons de la siguiente manera:

```jsx
import { FaReact } from 'react-icons/fa';

const MiComponente = () => {
  return (
    <div>
      <p>Este es un ícono de React: <FaReact /></p>
    </div>
  );
};

export default MiComponente;
```
Esta es una manera básica de integrar ejemplos de íconos en tu aplicación utilizando `react-icons`. Puedes explorar más íconos y opciones en la [página de la documentación de react-icons](https://react-icons.github.io/react-icons/), donde encontrarás una lista completa de íconos disponibles y ejemplos de cómo usarlos.

### Configuración de Firebase
Este proyecto utiliza Firebase para la integración de servicios en la nube. Para instalar Firebase y configurarlo, ejecuta los siguientes comandos:

```bash
npm install firebase
```

Crea un archivo llamado `firebase.js` en el directorio `src` y agrega la siguiente configuración:

```javascript
// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // Importa los servicios que necesites

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

// Exporta los servicios que necesites (ejemplo: firestore)
export const firestore = firebase.firestore();
```

Asegúrate de reemplazar `'TU_API_KEY'`, `'TU_AUTH_DOMAIN'`, y demás con los valores específicos de tu proyecto en la [consola de Firebase](https://console.firebase.google.com/).

## Comandos Principales
```bash
npm start
```
Ejecuta la aplicación en modo de desarrollo. Abre http://localhost:3000 en tu navegador para ver la aplicación. La página se recargará automáticamente si realizas modificaciones en el código fuente.

## Estructura del Proyecto
- `src/`: Contiene el código fuente de la aplicación.
- `public/`: Contiene archivos estáticos que se copiarán en el directorio de compilación.
- `node_modules/`: Contiene las dependencias de npm.
- `package.json`: Archivo de configuración del proyecto que incluye las dependencias y scripts.

## Más Información
Para obtener más información sobre React, consulta la [documentación oficial de React](https://reactjs.org/).

