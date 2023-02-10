import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hola</h1>
                <p>Bienvenido al <strong>Lirmi Challenge</strong><i> Front-end</i> esta aplicación cuenta con una sola página, construida con:</p>
                <ul>
                    <li><a href='https://dotnet.microsoft.com/es-es/apps/aspnet'>ASP.NET Core</a> y <a href='https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/?redirectedfrom=MSDN'>C#</a> para código del lado del servidor multiplataforma</li>
                    <li><a href='https://reactjs.org/blog/2022/03/29/react-v18.html'>React</a> para el código del lado del cliente</li>
                    <li><a href='https://m3.material.io/'>Material UI</a> para el diseño y el estilo</li>
                    <li><i>Dejamos los ejemplos del proyecto que vienen por defecto porque creemos que podrian ser de ayuda</i></li>
                </ul>
                <p>Para comenzar igual hemos configurado lo siguiente:</p>
                <ul>
                    <li><strong>Navegación del lado del cliente</strong>. Por ejemplo, hacer click en <em>Counter</em> luego <em>Back</em> para volver aquí.</li>
                    <li><strong>Integración con el servidor de desarrollo</strong>. En el modo de desarrollo el servidor <code>create-react-app</code> se ejecuta en segundo plano automáticamente, por lo que sus recursos del lado del cliente se crean dinámicamente a pedido y la página se actualiza cuando modifica cualquier archivo.</li>
                    <li><strong>Construcciones de producción eficientes</strong>. En el modo de producción, las funciones de tiempo de desarrollo están deshabilitadas y su <code>dotnet publish</code> La configuración produce archivos JavaScript minificados y agrupados de manera eficiente.</li>
                </ul>
                <p>El subdirectorio <code>ClientApp</code> es una aplicación React estándar basada en la plantilla <code>create-react-app</code> Si abre un símbolo del sistema en ese directorio, puede ejecutar <code>npm</code> comandos como <code>npm test</code> o <code>npm install</code>.</p>
                <p><strong>Criterios de aceptación relacionados con la interacción de la UI:</strong></p>
                <ul>
                    <li>Construir una UI que renderice por pantalla la siguiente página en <a href='https://www.figma.com/file/9IfTN12KxDGmNlwOtxJGOw/Lirmi-Challenge-Front-End '>Figma</a></li>
                    <li>Los tres switch de la columna derecha (pista, solucionario y personalizar mensaje) muestra o esconde una caja de texto en la parte inferior de la actividad, como se muestra en la segunda pantalla de Figma.</li>
                    <li>Las cards de experiencias de la columna izquierda de la UI se pueden ordenar con drag and drop. Es decir, la experiencia 3 la puedo dejar en la posición 1.</li>
                    <li>El select de estado (activo, por validar, borrador, inactivo) de las experiencias se puede cambiar de un estado a otro.</li>
                </ul>
            </div>
        );
    }
}