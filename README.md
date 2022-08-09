# challenge-meli

## Node app.

- Ejecutar npm start para correr la app.
- Automaticamente se creara nuestra base de datos con la tabla que contiene nuestros datos (archivos .txt) 
- Nuestra app correra en el puerto 3001, root local http://localhost:3001/www.melichallenge.test/text_name=&termino=, donde obtendremos el mensaje de "success"
- Para filtrar por nombre de texto y término, desde nuestro endpoint será http://localhost:3001/text_name=:TEXTNAME&termino=:term, donde TEXTNAME sera el nombre del texto,
y term sera el término a filtrar.
- Para filtrar un término en la totalidad de los textos usaremos el endpoint http://localhost:3001/termino=:term donde term sera el término a filtrar por todos los contenidos
de los textos.

## React APP

- Correr la app con npm start desde una nueva terminal.
- Nuestra app correra automaticamente en el puerto 3000
- Filtrar por término ingresando el término en la barra de busqueda y activamos la busqueda con el botón.
- Filtrar por término dentro de un texto ingresando en nombre del texto y el término en la barra de busqueda y activamos la busqueda con el botón (no activo).
