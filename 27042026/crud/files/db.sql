CREATE DATABASE IF NOT EXISTS `crud_db`;
USE `crud_db`;
create table if not exists `users` (
    `id` int auto_increment primary key,
    `nombre` varchar(255) not null,
    `correo` varchar(255) not null unique
) engine=InnoDB default charset=utf8mb4;