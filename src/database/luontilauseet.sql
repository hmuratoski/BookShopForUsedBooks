DROP TABLE BOOK;
DROP TABLE CATEGORY;
DROP TABLE ORDERS;
DROP TABLE ORDER_ITEMS;
DROP TABLE USER;
DROP TABLE ADMIN;


CREATE TABLE ORDERS (
	orderId integer PRIMARY KEY,
	customerId integer nullable,
	orderStatus varchar,
	orderDate datetime,
	shippedDate datetime,
	fname varchar,
	lname varchar,
	phone varchar,
	email varchar,
	address varchar,
	city varchar,
	stateProvince varchar,
	postalcode varchar
);

CREATE TABLE BOOK (
	bookId INTEGER PRIMARY KEY,
	categoryId integer,
	bookName varchar,
	price float,
	author varchar,
	description varchar,
	year smallint,
	condition varchar,
	active integer
);

CREATE TABLE CATEGORY (
	categoryId integer PRIMARY KEY,
	categoryName varchar
);

CREATE TABLE ORDER_ITEMS (
	orderId integer,
	bookId integer,
	quantity integer,
	price float
);

CREATE TABLE USER (
	customerId integer PRIMARY KEY,
	username varchar,
	password varchar,
	fname varchar,
	lname varchar,
	phone varchar,
	email varchar,
	address varchar,
	city varchar,
	stateProvince varchar,
	postalcode varchar
);

CREATE TABLE ADMIN (
	username varchar,
	level integer
);

INSERT INTO BOOK(bookId,categoryId,bookName,price,author,description,year,condition) VALUES('1','1','Matematiikan alkeet','25','Mikko Matikka','Ala-asteen lyhyt matematiikka','2011','3'),('2','1','Matematiikan perusteet','30','Mikko Matikka','Ylä-aste matematiikka','2012','2'),('3','1','Lukion matematiikka','15','Mikko Matikka','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor porttitor, sodales magna id, iaculis augue. Morbi consequat mollis dui ut aliquet. Cras efficitur nisi quis suscipit elementum. Morbi tristique bibendum urna et lacinia. Nullam commodo et ligula et vestibulum. Phasellus varius dolor vel ex venenatis, eu ultricies neque ullamcorper. Aenean facilisis fringilla justo eget vestibulum. In vehicula nisi vitae felis elementum semper. Nulla non est a purus vestibulum ultricies nec nec neque. Duis ultrices gravida lacinia. Praesent a aliquam ex, non dignissim velit. Pellentesque justo arcu, porta sit amet ullamcorper at, suscipit eu nibh. Quisque vitae imperdiet odio.\\n\\nSed lobortis a felis in cursus. Donec egestas dui est, eget maximus arcu vehicula in. Nulla facilisi. Donec rhoncus odio augue, ut auctor ligula dignissim commodo. Cras aliquet sed dolor non fringilla. Praesent faucibus eros ex, nec porttitor velit semper id. Etiam quis aliquet ex. Vivamus maximus mi quis eros lacinia vestibulum et ac turpis. Nunc dictum nunc at urna aliquam, et viverra metus facilisis.\\n\\nMauris eget mauris tortor. Nunc fringilla metus sed consectetur cursus. Sed sagittis dolor egestas semper ornare. Donec posuere risus at lorem tristique placerat. In eu elementum purus, vel porta metus. Phasellus fringilla sapien elit, vitae egestas justo efficitur eget. Mauris vel eros rutrum, rutrum neque vel, porta nisl.','2015','1'),('4','2','Suomen kielen alkeet','60','Arttu Mokoma','Opi suomea, viikossa!','2018','3'),('5','3','Kemia 1','55','Niko Pyhtilä','Kemian alkeet','1995','2'),('6','4','Maantiede 1','75','Pekka Rinne','Maantiede alakoululaisille','1952','1'),('7','5','Suomen historia','87','Moona Meikäläinen','Suomen historia','2011','3');
INSERT INTO CATEGORY(categoryId,categoryName) VALUES('1','Matematiikka'),('2','Kielet'),('3','Kemia'),('4','Maantiede'),('5','Historia');

INSERT INTO USER(customerId,username,password,fname,lname,phone,email,address,city,stateProvince,postalcode) VALUES('1','n2saju00','$2y$10$UEybnWq8MW6tFB7vZ8Fd5OFaXjkAZPSOarTLvlKNJHeVqtKrCvD0e','Juho','Sandelin','0122034892','n2saju00@students.oamk.fi','Kasarmintie','Oulu','NULL','90130'),('2','testi4321','$2y$10$3d5bbeH4pL7xnvJ5sDiOceAnTvMOuUvBMDOO/BzEvTvayzbsXt73O','Joku','Tyyppi','0219348266','email@email.com','Kellokatu 5','Turku','NULL','29198');
