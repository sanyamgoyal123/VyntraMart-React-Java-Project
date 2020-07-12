package com.vyantramart.VyntraMart.daoimp;


import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.vyantramart.VyntraMart.dao.CategoryDao;
import com.vyantramart.VyntraMart.to.Category;


@Repository("categorydao")
@Transactional
public class CategoryDAOImpl implements CategoryDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public List<Category> list() {
		String selectActiveCategory = "FROM Category WHERE active = :active";
		/* Query query = sessionFactory.getCurrentSession().createQuery(selectActiveCategory);
		query.setParameter("active", true);
		
		return query.getResultList(); */
		return sessionFactory
				.getCurrentSession()
					.createQuery(selectActiveCategory,Category.class)
						.setParameter("active",true)
							.getResultList();
	}
	
	// getting single category based on ID
	@Override
	public Category get(int id) {
		
		return sessionFactory.getCurrentSession().get(Category.class, Integer.valueOf(id));
	}
	@Override
	public boolean add(Category category) {
		try {
			sessionFactory.getCurrentSession().persist(category);
			
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return false;
	}
	@Override
	 public boolean update(Category category) {
		try {
			sessionFactory.getCurrentSession().update(category);
			
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
			
		}
		return false;
	} 
	@Override
	public boolean delete(Category category) {
		category.setActive(false);
		
		try {
			sessionFactory.getCurrentSession().delete(category);
			
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return false;
	}
	@Override
	public List<Category> findByCategoryName(String name)
	{
		
		String Categoryname = "FROM Category WHERE name=name";
		return  sessionFactory
				.getCurrentSession()
				.createQuery(Categoryname,Category.class)
					.setParameter("Categoryname",Categoryname)
						.getResultList();
     }
}
