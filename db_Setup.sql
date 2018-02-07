drop database sampledb;

create database sampledb;

use sampledb;

create table usertable (
firstname varchar(255) not null,
lastname varchar(255) not null,
email varchar(255) not null,
pass varchar(255) not null,
primary key (email)
);


insert into usertable
values ("admin","admin","admin@gmail.com","admin");

insert into usertable
values ("hadas","ganim","hadasg11@gmail.com","1234");

