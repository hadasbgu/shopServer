drop database sampledb;

create database sampledb;

use sampledb;

create table usertable (
nickname varchar(255) not null,
email varchar(255) not null,
pass varchar(255) not null,
primary key (email)
);


insert into usertable
values ("admin","admin@gmail.com","admin");

insert into usertable
values ("hadas","hadasg11@gmail.com","1234");


create table categorytable (
categoryid varchar(10) not null,
categoryname varchar(255) not null,
primary key (categoryid)
);

insert into categorytable
values(1,"shirt");

insert into categorytable
values(2,"pants");

create table producttable(
productid varchar(10) not null,
productName VARCHAR(40),
color VARCHAR(40),
categoryid  varchar(255),
foreign key (categoryid) references categorytable(categoryid),
primary key (productid)
);



insert into producttable
value(1000, "lether pants", "blue", 2);
