package com.intetm.igni.db.dao;

import com.intetm.igni.db.entity.Apple;
import com.intetm.igni.db.entity.User;

import javax.ejb.Stateless;
import java.util.UUID;

@Stateless
public class AppleDao extends AbstractDao<Apple, UUID> {

    public AppleDao() {
        super(User.class);
    }

    @Override
    public void persist(Apple apple) {
        if (apple.getId() == null) {
            apple.setId(UUID.randomUUID());
        }
        super.persist(apple);
    }
    public Apple getApple(String name){
        return (Apple) createQuery("select a from Apple a where a.user = :user").setParameter("user", name).getSingleResult();
    }
}
