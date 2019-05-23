UPDATE product
SET DESCRIPTION = $2
WHERE product_id = $1;
SELECT *
FROM product;