//SEQUENCIA PARA CRIAR O PROJETO
- Criar arqivo package
Rodar o projeto
## npm init

Acessar o projeto no navegador
## npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, - g: significa globalmente
## npm install -g nodemon

- INSTALAR O BANCO DE DADOS MySQL

VERIFICAR O BANCO DE DADOS MySQL NO PRONT DE COMANDO
## mysql -h localhost -u root -p
Instalar o Workbench para gerenciar o banco de dados de forma gráfica

- Comando básicos de MySQL

CRIAR A BASE DE DADOS
### create database celke character set utf8mb4 collate utf8mb4_unicode_ci;

InnoDB - relacionamento entre chave primaria com chave estrangeira

charset=utf8mb4 - com ele pode ter caracteris especiais, como: ç, ~, ^ etc.

collate=utf8mb4_unicode_ci; - refere-se a como vai comporta-se quando pesquisar algum valor no banco de dados

CRIAR A TABELA
### create table `products`(
### `id` int NOT NULL auto_increment,
### `name` varchar(220) not null collate utf8mb4_unicode_ci,
### `price` decimal(5,20) not null collate utf8mb4_unicode_ci,
### primary key(`id`)
### );


SELECIONAR REGISTRO NO BANCO DE DADOS
### SELECT id, name, price FROM users;


Sequelize é uma biblioteca javascript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

await - enquanto não finalizar uma linha, não pode ir para uma proxima instrução

ASC - PADRÃO OU CRESCENTE
DESC - REGISTRO MAIS RECENTE PRIMEIRO E O MAIS ANTIGO POR ULTIMO

where - quando quer colocar uma condição
findByPk - verificar o id

### create table `users`(
### `id` int NOT NULL auto_increment,
### `name` varchar(220) collate utf8mb4_unicode_ci default null,
### `email` varchar(220) collate utf8mb4_unicode_ci default null,
### primary key(`id`)
### )engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;

### INSERT INTO users (name, email)
### values
### ('Thays', 'thays@gmail.com'),
### ('Thays1', 'thays1@gmail.com'),
### ('Thays2', 'thays2@gmail.com'),
### ('Thays3', 'thays3@gmail.com'),
### ('Thays4', 'thays4@gmail.com'),
### ('Thays5', 'thays5@gmail.com'),
### ('Thays6', 'thays6@gmail.com');

### SELECT id, name, email FROM users;
### SELECT id, name, email FROM users limit 2 offset 4;
### SELECT id, name, email FROM users WHERE email = 'thays@gmail.com' limit 1;
### SELECT id, name, email FROM users WHERE email = 'thays@gmail.com' or name = 'Thays' LIMIT 1;
### SELECT id, name, email FROM users ORDER BY id ASC;
### SELECT id, name, email FROM users ORDER BY id DESC;

### update users SET name = 'Thayssss', email = 'thaysss@gmail.com' where id = 3;

CADASTRAR REGISTRO NO BANCO DE DADOS
### INSERT INTO users (name, email)
### values
### ('Thays', 'thays@gmail.com');


LIMITAR QUANTIDADE DE REGISTROS SELECIONADO NO BANCO DE DADOS
### SELECT id, name, email FROM users limit 3;


LIMITAR QUANTIDADE DE REGISTROS SELECIONADO NO BANCO DE DADOS E INDICAR O INICIO
### SELECT id, name, email FROM users limit 2 offset 4;
EX: pg 1 = 1,2
pg 2 = 3,4
pg 3 = 5,6

ACRESCENTAR CONDIÇÃO NA BUSCA DE REGISTROS 
### SELECT id, name, email FROM users WHERE email = 'thays@gmail.com';
OU
### ;SELECT id, name, email FROM users WHERE email = 'thays@gmail.com' LIMIT 1;

ACRESCENTAR MAIS DE UMA CONDIÇÃO NA BUSCA DE REGISTROS
### SELECT id, name, email FROM users WHERE email = 'thays@gmail.com' AND name = 'Thays' LIMIT 1;
OU
### SELECT id, name, email FROM users WHERE email = 'thays@gmail.com' OR name = 'Thays' LIMIT 1;

ORDENAR OS REGISTROS RETORNADO DO BANCO DE DADOS
MAS ANTIGOS PRIMEIRO
### SELECT id, name, email FROM users ORDER BY id ASC;
OU EM FORMA DECRESCENTE
### SELECT id, name, email FROM users ORDER BY id DESC;

EDITAR REGISTRO NO BANCO DE DADOS
### update users SET name = 'Thayssss', 
### email = 'thaysss@gmail.com' where id = 3;

apagar registro no banco de dados
### delete FROM users where id = 2;
