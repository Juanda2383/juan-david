# Task MVP

Este proyecto es un **MVP de lista de tareas** construido con React Native y Expo, pensado para seguir el temario de tu curso y poner en práctica desde la Sesión 1.

---

## Requisitos previos

- **Node.js** v14 o superior
- **npm** (incluido con Node.js) o **Yarn**
- **Android Studio** (AVD) y/o **Xcode** (Simulator) si vas a probar en emuladores
- **Expo Go** en tu dispositivo móvil (opcional, para pruebas en físico)
- **Windows PowerShell**
  - En algunas máquinas puede haber restricciones de **Execution Policy** que impiden ejecutar scripts (`npx`, `npm`).
  - Si recibes un error como _“execution of scripts is disabled on this system”_, abre PowerShell **como Administrador** y ejecuta:
    ```powershell
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```
    Esto aplica solo para la sesión abierta y te permitirá correr los comandos de `npx` y `npm` sin cambiar la política global.
  - **Si después de esto sigues obteniendo el mismo error**, prueba alguna de estas opciones:
    - Cambia la política para el usuario actual:
      ```powershell
      Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force
      ```
    - Lanza el comando directamente desde `cmd`:
      ```powershell
      cmd /C "npx create-expo-app@latest task-mvp"
      ```
    - Invoca el script batch de npx:
      ```powershell
      npx.cmd create-expo-app@latest task-mvp
      ```
    - Alternativamente, si tienes Yarn instalado, puedes usar:
      ```bash
      yarn create expo-app task-mvp
      ```

---

## Instalación inicial

> ❗️ **Expo CLI** global está deprecado. Usaremos `create-expo-app` vía `npx`.

```bash
# 1. Crea la plantilla Expo
npx create-expo-app@latest task-mvp --template blank

# 2. Entra al directorio del proyecto
cd task-mvp

# 3. Instala dependencias
npm install
# o
yarn

## Dependendencias principales

# React Navigation
npm install @react-navigation/native @react-navigation/stack

# Peers de React Navigation
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# AsyncStorage para persistencia
npm install @react-native-async-storage/async-storage


## Estructura del proyecto
task-mvp/
├─ App.js

├─ app.json

├─ package.json

├─ node_modules/

├─ assets/

├─ navigation/

│  └─ AppNavigator.jsx

├─ screens/

│  ├─ TaskListScreen.jsx

│  └─ AddTaskScreen.jsx

└─ components/

   └─ TaskItem.jsx


- App.js: Punto de entrada. Importa y renderiza AppNavigator.

- navigation/AppNavigator.js: Stack de pantallas (Lista y Crear tarea).

- screens/

-- TaskListScreen.js: Muestra el listado de tareas.

-- AddTaskScreen.js: Formulario para agregar nuevas tareas.

-- components/TaskItem.js: Componente para renderizar cada tarea.

## Como ejecutar la app?

-- npm start
