package com.vyantramart.VyntraMart.dao;

import java.util.List;

import com.vyantramart.VyntraMart.to.Product;

public interface ProductDao {
	Product get(int productId);
	List<Product> list();
	
	boolean add(Product product);
	boolean update(Product product);
	boolean delete(Product product);
	
	List<Product> listActiveProducts();
	List<Product> listActiveProductsById(int categoryId);
	List<Product> getLatestActiveProducts(int count);

}
