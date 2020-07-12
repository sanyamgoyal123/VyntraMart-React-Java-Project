package com.vyantramart.VyntraMart.dao;

import java.util.List;

import com.vyantramart.VyntraMart.to.Category;

public interface CategoryDao {
	List<Category> list();
	Category get(int id);
	boolean add(Category category);
	boolean update(Category category);
	boolean delete(Category category);
	//List<Category> view();
	List<Category> findByCategoryName(String name);
	
}
