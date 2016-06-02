package com.intetm.igni.db.dao;

import com.intetm.igni.db.entity.User;

import javax.ejb.Stateless;
import java.util.UUID;

@Stateless
public class UserDao extends AbstractDao<User, UUID> {

    public UserDao() {
        super(User.class);
    }

    @Override
    public void persist(User user) {
        if (user.getId() == null) {
            user.setId(UUID.randomUUID());
        }
        super.persist(user);
    }

    public boolean isUserExsist(String userName) {
        return count(User.COLUMN_USER_NAME, userName) != 0;
    }
}
