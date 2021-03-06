CREATE DATABASE db_trading;

USE db_trading;

CREATE TABLE trade_users(
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

CREATE TABLE trade_posiciones(
    id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    fecha_reg varchar(10) NOT NULL,
    fecha_inicio varchar(10) NULL,
    monto DECIMAL(7,2) NOT NULL,
    activo BOOLEAN NOT NULL,
    visible BOOLEAN NOT NULL DEFAULT = 1
);

ALTER TABLE trade_posiciones ADD PRIMARY KEY (id);

ALTER TABLE trade_posiciones MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE datos_cuenta (
    id INT(11) NOT NULL, 
    banco varchar(50) NOT NULL, 
    tipo varchar(20) NOT NULL, 
    numero varchar(20) NOT NULL, 
    descripcion varchar(100)
);

ALTER TABLE datos_cuenta ADD PRIMARY KEY (id);

ALTER TABLE datos_cuenta MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;