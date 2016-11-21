
CREATE DATABASE valemobi; 
USE valemobi; 

CREATE TABLE categoria ( 
	cat_id INT NOT NULL AUTO_INCREMENT, 
	cat_nome VARCHAR(30) UNIQUE, 
    cat_deletado VARCHAR(1) DEFAULT NULL, 
    PRIMARY KEY (cat_id) 
); 

INSERT INTO categoria(cat_nome) VALUES('Teste'); 
INSERT INTO categoria(cat_nome) VALUES('Teste2'); 
SELECT * FROM categoria WHERE (cat_deletado IS NULL); 

CREATE TABLE produto ( 
	pro_id INT NOT NULL AUTO_INCREMENT, 
    pro_fk_categoria INT NOT NULL,
	pro_nome VARCHAR(100) UNIQUE, 
    pro_lote_min INT NOT NULL,
    pro_deletado VARCHAR(1) DEFAULT NULL, 
    PRIMARY KEY (pro_id),
    FOREIGN KEY (pro_fk_categoria) REFERENCES categoria(cat_id)
); 

INSERT INTO produto (pro_fk_categoria,pro_nome, pro_lote_min) VALUES (1,'Computador',10); 
INSERT INTO produto (pro_fk_categoria,pro_nome, pro_lote_min) VALUES (2,'Mouse',15); 
#UPDATE produto SET pro_fk_categoria = 1, pro_nome='foi'  WHERE pro_id = 1
#SELECT * FROM produto WHERE (pro_deletado IS NOT NULL); 

SELECT
pro_id,
pro_nome,
cat_nome,
pro_lote_min
FROM produto 
INNER JOIN categoria ON produto.pro_fk_categoria = categoria.cat_id
WHERE (pro_deletado IS NULL) AND pro_id=1; 

CREATE TABLE parceiro ( 
	par_id INT NOT NULL AUTO_INCREMENT, 
    par_nome VARCHAR(100) UNIQUE, 
	par_cnpj VARCHAR(18) NOT NULL,
    par_tel VARCHAR(17) DEFAULT NULL,
	par_email VARCHAR(50) DEFAULT NULL,
    par_deletado VARCHAR(1) DEFAULT NULL, 
    PRIMARY KEY (par_id) 
); 

INSERT INTO parceiro (par_nome, par_cnpj,par_tel,par_email) VALUES ('Parceiro 1','56.302.123/0001-31','(11)98124-1323','parceiro1@email.com'); 
INSERT INTO parceiro (par_nome, par_cnpj,par_tel,par_email) VALUES ('Parceiro 2','56.302.123/0001-32','(11)98124-1325','parceiro2@email.com'); 
SELECT * FROM parceiro WHERE (par_deletado IS NULL); 

CREATE TABLE cliente ( 
	cli_id INT NOT NULL AUTO_INCREMENT, 
	cli_nome VARCHAR(100) NOT NULL, 
    cli_cpf VARCHAR(14) NOT NULL,
    cli_tel VARCHAR(17) DEFAULT NULL,
	cli_email VARCHAR(50) DEFAULT NULL,
    cli_deletado VARCHAR(1) NULL, 
	PRIMARY KEY(cli_id) 
); 

INSERT INTO cliente (cli_nome,cli_cpf,cli_tel,cli_email) VALUES ('Cliente1', '531.499.148-92','(11)98124-1321','cliente1@email.com'); 
INSERT INTO cliente (cli_nome,cli_cpf,cli_tel,cli_email) VALUES ('Cliente2', '531.499.148-93','(11)98124-1311','cliente2@email.com'); 
SELECT * FROM cliente WHERE (cli_deletado IS NULL); 

CREATE TABLE estoque( 
	est_fk_produto INT NOT NULL, 
    est_qtd INT UNSIGNED NOT NULL DEFAULT 0, 
    est_qtd_alu_doador INT UNSIGNED NOT NULL DEFAULT 0, 
    est_qtd_alu_tomador INT UNSIGNED NOT NULL DEFAULT 0, 
    FOREIGN KEY (est_fk_produto) REFERENCES produto(pro_id) 
); 

INSERT INTO estoque (est_fk_produto, est_qtd) VALUES (1,60); 
INSERT INTO estoque (est_fk_produto, est_qtd) VALUES (2,100); 
SELECT * FROM estoque; 
SELECT  
	estoque.est_fk_produto AS Codigo_Produto, 
    produto.pro_nome AS Produto, 
    estoque.est_qtd AS Quantidade_em_stoque, 
    estoque.est_qtd_alu_doador AS Quantidade_Doador, 
    estoque.est_qtd_alu_tomador AS Quantidade_Tomador 
FROM estoque  
INNER JOIN produto 
ON estoque.est_fk_produto = produto.pro_id; 
 

CREATE TABLE CEV ( 
	cev_id INT NOT NULL AUTO_INCREMENT, 
    cev_fk_produto INT NOT NULL , 
    cev_fk_cliente INT NOT NULL, 
    cev_tipo VARCHAR (6) NOT NULL, 
    cev_quantidade INT NOT NULL, 
    cev_tomador INT UNSIGNED NOT NULL DEFAULT 0, 
    cev_valor NUMERIC(18,3) NOT NULL, 
    cev_data DATETIME DEFAULT CURRENT_TIMESTAMP, 
	FOREIGN KEY (cev_fk_produto) REFERENCES produto(pro_id), 
	FOREIGN KEY (cev_fk_cliente) REFERENCES cliente(cli_id), 
    PRIMARY KEY(cev_id) 
) 

INSERT INTO CEV (cev_fk_produto,cev_fk_cliente,cev_tipo,cev_quantidade,cev_valor) VALUES (1,1,'venda',10,25.10);

SELECT * FROM CEV;

SELECT 
	CEV.cev_fk_produto AS Cod_Produto,
    produto.pro_nome AS Produto,
    CEV.cev_fk_cliente AS Cod_Cliente,
    cliente.cli_nome AS Cliente,
    CEV.cev_tipo AS Tipo,
    CEV.cev_quantidade AS Quantidade,
    CEV.cev_tomador AS Tomador,
    CEV.cev_valor AS Valor,
    (SELECT DATE(CEV.cev_data)) AS Data,
    (SELECT TIME(CEV.cev_data)) AS Hora
FROM CEV

    INNER JOIN produto ON CEV.cev_fk_produto = produto.pro_id 
    INNER JOIN cliente ON CEV.cev_fk_cliente = cliente.cli_id;