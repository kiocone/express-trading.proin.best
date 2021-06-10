CREATE DATABASE db_trading;

USE db_trading;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username varchar(30) NOT NULL,
    password varchar(30) NOT NULL,
    nombre1 varchar(20) NOT NULL,
    nombre2 varchar(20),
    apellido1 varchar(20) NOT NULL,
    apellido2 varchar(20),
    email varchar(30) NOT NULL,
    telefono varchar(18) NOT NULL,
    direccion varchar(60) NOT NULL
);

ALTER TABLE users ADD PRIMARY KEY (id);

ALTER TABLE users MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

CREATE TABLE posiciones(
    id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    fecha_reg varchar(10) NOT NULL,
    fecha_inicio varchar(10) NULL,
    monto DECIMAL(7,2) NOT NULL,
    activo BOOLEAN NOT NULL
);

ALTER TABLE posiciones ADD PRIMARY KEY (id);

ALTER TABLE posiciones MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;