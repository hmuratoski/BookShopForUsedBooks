CREATE TABLE ORDER (
	orderId varchar PRIMARY KEY,
	customerId varchar,
	orderStatus varchar,
	orderDate varchar,
	shippedDate varchar
);

CREATE TABLE BOOK (
	bookId varchar PRIMARY KEY,
	categoryId varchar,
	bookName varchar,
	price varchar,
	author varchar,
	description varchar
);

CREATE TABLE CATEGORY (
	categoryId varchar PRIMARY KEY,
	categoryName varchar
);

CREATE TABLE ORDER_ITEMS (
	orderId varchar,
	bookId varchar,
	quantity binary,
	price varchar
);

CREATE TABLE USER (
	customerId varchar, PRIMARY KEY,
	username varchar,
	password varchar,
	fname varchar,
	lname varchar,
	phone varchar,
	email varchar,
	address varchar,
	city varchar,
	stateprovince varchar,
	postalcode varchar,
);
