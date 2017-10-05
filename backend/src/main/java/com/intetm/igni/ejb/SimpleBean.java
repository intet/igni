package com.intetm.igni.ejb;

import com.intetm.igni.db.dao.AppleDao;
import com.intetm.igni.db.entity.Apple;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.transaction.Transactional;

@Stateless
public class SimpleBean {

    
    @EJB
    AppleDao appleDao;
    
    @EJB
    ExceptionBean exceptionBean;
    
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public void addApple(){
        Apple apple = new Apple("one", 1);
        appleDao.persist(apple);
    }

    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public Apple getApple(String name){
        return appleDao.getApple(name);
    }

    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int increment(String name){
        Apple apple = appleDao.getApple(name);
        apple.setAmount(1);
        appleDao.merge(apple);
        return apple.getAmount();
    }

    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int test2(String name) throws Exception {
        Apple apple = appleDao.getApple(name);
        apple.setAmount(2);
        appleDao.merge(apple);
        apple.getAmount();
        throw new Exception("aaa!!!");

    } 
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int test3(String name) throws Exception {
        Apple apple = appleDao.getApple(name);
        apple.setAmount(3);
        appleDao.merge(apple);
        exceptionBean.exception();
        return apple.getAmount();
    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int test4(String name) throws Exception {
        Apple apple = appleDao.getApple(name);
        apple.setAmount(4);
        appleDao.merge(apple);
        try {
            exceptionBean.exception();
        }
        catch (Exception ex){
            
        }
        return apple.getAmount();
    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int test5(String name) throws Exception {
        Apple apple = appleDao.getApple(name);
        apple.setAmount(5);
        appleDao.merge(apple);
        exceptionBean.runTimeException();
        return apple.getAmount();

    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
    public int test6(String name) throws Exception {
        Apple apple = appleDao.getApple(name);
        apple.setAmount(6);
        appleDao.merge(apple);
        try {
            exceptionBean.runTimeException();
        }
        catch (RuntimeException ex){

        }
        return apple.getAmount();
    }
    
}
