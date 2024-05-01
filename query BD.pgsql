CREATE DATABASE crud_escuela;

CREATE TABLE alumnos(
    nombre varchar(100) NOT NULL,
    rut varchar(10) UNIQUE NOT NULL,
    curso varchar(30) NOT NULL,
    nivel varchar(2) NOT NULL
);

SELECT * FROM alumnos;
