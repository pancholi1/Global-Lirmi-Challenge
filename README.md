## Global-Lirmi-Challenge

### Bienvenido al Lirmi Challenge Front-end esta aplicación cuenta con una sola página, construida con:

* [ASP.NET Core](https://dotnet.microsoft.com/es-es/apps/aspnet) y [C#](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/?redirectedfrom=MSDN) para código del lado del servidor multiplataforma
* [React](https://reactjs.org/blog/2022/03/29/react-v18.html) para el código del lado del cliente
* [Material UI](https://m3.material.io/) para el diseño y el estilo
* *Dejamos los ejemplos del proyecto que vienen por defecto porque creemos que podrian ser de ayuda*

#### Para comenzar igual hemos configurado lo siguiente:

* **Navegación del lado del cliente** Por ejemplo, hacer click en *Counter* luego *Back* para volver aquí.

* **Integración con el servidor de desarrollo.** En el modo de desarrollo el servidor create-react-app se ejecuta en segundo plano automáticamente, por lo que sus recursos del lado del cliente se crean dinámicamente a pedido y la página se actualiza cuando modifica cualquier archivo.

* **Construcciones de producción eficientes.** En el modo de producción, las funciones de tiempo de desarrollo están deshabilitadas y su ```dotnet publish``` La configuración produce archivos JavaScript minificados y agrupados de manera eficiente.

El subdirectorio ```ClientApp``` es una aplicación React estándar basada en la plantilla ```create-react-app``` Si abre un símbolo del sistema en ese directorio, puede ejecutar ```npm``` comandos como ```npm test``` o ```npm install```.

#### Criterios de aceptación relacionados con la interacción de la UI:

* Construir una UI que renderice por pantalla la siguiente página en [Figma](https://www.figma.com/file/9IfTN12KxDGmNlwOtxJGOw/Lirmi-Challenge-Front-End)

* Los tres switch de la columna derecha (pista, solucionario y personalizar mensaje) muestra o esconde una caja de texto en la parte inferior de la actividad, como se muestra en la segunda pantalla de Figma.

* Las cards de experiencias de la columna izquierda de la UI se pueden ordenar con drag and drop. Es decir, la experiencia 3 la puedo dejar en la posición 1.
* El select de estado (activo, por validar, borrador, inactivo) de las experiencias se puede cambiar de un estado a otro.
