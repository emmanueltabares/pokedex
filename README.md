<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio
2. ejecutar

```
mpn install
```

3. Tener Nest CLI instalado

```
mpn i -g @nestjs/cli
```

4. Levantar la base de datos
   
```
docker-compose up -d
```

5. Clonar archivo __.envExample__ y renombrar la copia a __.env__

6. LLenar las variables de entorno definidas en __.env__
  
7. Ejecutar la aplicacion de desarrollo en dev:

```
npm run start:dev
```

## Stack
* Nest
* MongoDB