const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); // Import chrome options
const username = "<YOUR_USERNAME_HERE>";
const amountOfLoops = 20; // Cantidad de iteraciones.
const amountOfTabs = 60; // Cantidad de pestañas

async function openTabs() {
    // Especifica la ruta a los datos de Chrome
    const userDataDir = `C:\\Users\\${username}\\AppData\\Local\\Google\\Chrome\\User Data`; // Change this path accordingly
    const profile = 'Default'; // Especifica el usuario, dejar Default si no creaste otro.

    console.log(`Al finalizar las iteraciones, dentro de APRÓXIMADAMENTE ${amountOfLoops} minutos, se obtendran ${amountOfTabs*amountOfLoops} horas en Voxy.`);
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments(`--user-data-dir=${userDataDir}`).addArguments(`--profile-directory=${profile}`))
        .build();

    //Array para guardar las referencias de cada pestaña
    const tabs = [];

    try {
        // Cambia la valor de '60' por el numero de pestañas que quieras abrir
        for (let i = 0; i < amountOfTabs; i++) {
            if (i > 0) {
                await driver.switchTo().newWindow('tab');
            }
            await driver.get('https://app.voxy.com/v2/#/practice/word-bank/vocabulary-review');
            tabs.push(await driver.getWindowHandle());
        }

        //Selecicona la cantidad de veces que quieres que el proceso se repita. La cantidad de minutos será (cantidad de repeticiones) * (cantidad de pestañas).
        //Por default, se realizarán 20 repeticiones de 60 pestañas, dando un total de 20 horas de progreso, en 20 minutos.
        for (let loop = 0; loop < amountOfLoops; loop++) {
            console.log(`Empezando la iteración número ${loop + 1}`);

            // Espera un click en "vocabulary-item__flip" en cada pestaña. Si el código falla en la primera iteración, aumenta el tiempo de espera en flipButton, o reduce la cantidad de pestañas.
            for (const tab of tabs) {
                await driver.switchTo().window(tab);
                const flipButton = await driver.wait(
                    until.elementLocated(By.className('vocabulary-item__flip')),
                    20000
                );
                await flipButton.click();
            }

            // Espera de 1 minuto (Máximo por palabra en banco de palabras)
            await driver.sleep(60000);

            // Selecciona "Ya lo sé" en cada pestaña.
            for (const tab of tabs) {
                await driver.switchTo().window(tab);
                const knownButton = await driver.wait(
                    until.elementLocated(By.id('assessment-known-button')),
                    10000
                );
                await knownButton.click();
            }

            // Espera 3 segundos
            await driver.sleep(3000);

            // Comienza la iteracion de pestañas de nuevo
            for (const tab of tabs) {
                await driver.switchTo().window(tab);
                const flipButton = await driver.wait(
                    until.elementLocated(By.className('vocabulary-item__flip')),
                    10000
                );
                await flipButton.click();
            }

            // Espera 1 minuto
            await driver.sleep(60000);

            //  Presiona el botón de "Ya lo se" en cada pestaña.
            for (const tab of tabs) {
                await driver.switchTo().window(tab);
                const knownButton = await driver.wait(
                    until.elementLocated(By.id('assessment-known-button')),
                    10000
                );
                await knownButton.click();
            }
        }
    } finally {
        await driver.quit();
    }
}

openTabs();
