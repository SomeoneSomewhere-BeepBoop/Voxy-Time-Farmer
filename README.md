# 📚 Selenium Vocabulary Review Bot

Este repositorio contiene un script en **Node.js** que utiliza **Selenium WebDriver** para automatizar la interacción con el **Vocabulario** de Voxy en un navegador Chrome. El script abre múltiples pestañas, simula la acción de aprendizaje de vocabulario y repite esta acción automáticamente para completar una cantidad de progresos.

## 📋 Requisitos

Antes de ejecutar el script, asegúrate de cumplir con los siguientes requisitos:

- **Node.js** y **npm** instalados.
- **Selenium WebDriver** para Node.js (`selenium-webdriver` package).
- **Google Chrome** instalado.
- ChromeDriver compatible con tu versión de Chrome.
- Una cuenta en Voxy.

## 🛠 Instalación

1. Clona este repositorio.
2. Instala las dependencias de Node.js:

   ```bash
   npm init -y
   npm i selenium-webdriver
    ```

3. Configura la variable username en el código con tu nombre de usuario de Windows:

    ```bash
    const username = "<YOUR_USERNAME_HERE>";
    ```

4. Verifica que el perfil y la ruta de usuario de Chrome en userDataDir y profile coincidan con tu instalación de Chrome.

## 🚀 Uso

### El script está diseñado para:
- Abrir múltiples pestañas en Chrome para la URL de Voxy.
- Repetir la interacción "flip" y "ya lo sé" en cada pestaña, simulando el estudio de vocabulario.
- Repetir esta interacción tantas veces como sea necesario para acumular tiempo de práctica.

### ⚙️ Configuración de parámetros
- Cantidad de pestañas: Cambia el valor de la constante ``amountOfTabs`` si deseas abrir más o menos pestañas.
- Cantidad de repeticiones: Cambia el valor de la constante ``amountOfLoops`` para ajustar la cantidad de iteraciones.

## 🏃 Ejecución del script
Inicia el script con el siguiente comando:

```bash
node nombre_del_archivo.js
```

## 🚨 Advertencia

Este script es solo para fines educativos y no debe usarse para violar los términos de uso de Voxy.