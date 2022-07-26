### INTALACIÓN CON CREATE REACT APP

- me situo en la carpeta donde quiero crear el proyecto
- npx create-react-app nombre-del-proyecto 
- con cd voy a la carpeta nombre-de-proyecto (la creada arriba)   
- npm start --> inicializa el proyecto (lo tengo que hacer DESDE ADENTRO de la carpeta)

React nos compila en vivo y se recarga automaticamente. Ver el local host en el navegador. 

## ARCHIVOS
- index.js es el padre de todos los componentes
- 

## COMPONENTES vs ELEMENTOS
- Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en c/u de forma aislada
- Los componentes SIEMPRE deben tener un padre. El padre de todo es app.js
- Los componentes empiezan con mayúscula  --> Componente
- Si los escribo con minúscula, react va a pensar que es una etiqueta
- Los elementos son la combinación de javascript con html, es el JSX. Cada "etiqueta" es un elemento. Van dentro de los componentes.

## JSX: componentes vs. elementos (y props vs. atributos)
- Los componentes utilizan props y los elementos utilizan atributos.
- props = propiedades


Ejemplo de uso de props:

-- Esto lo coloco en el padre -- index.js
<App saludo="Hola desde las props!" />

-- Esto lo coloco en el hijo -- App.js
function App(props) {
    return (
        <a>
            { props.saludo }
        </a>
    );
}, 

## COMPONENTES DE LA TODO LIST
Los componentes de la todo list son:
-- Counter: para llevar un conteo de las tareas totales y las completadas.
-- Search: para filtrar los TODOs de la lista.
-- List: en donde tendremos cada uno de los TODOs.
-- Item: será cada uno de los TODOs.
-- Add Todo: botón para agregar un nuevo TODO.

## CSS EN REACT
- CSS en React es muy similar a CSS en HTML. La diferencia es que en lugar de escribir class, escribimos className.
- Se lo puede trabajar en linea, en el mismo archivo como un objeto o en un archivo aparte.
Archivo aparte: mismoNombreQueElJs.css . Luego lo importo en el css. 

        


