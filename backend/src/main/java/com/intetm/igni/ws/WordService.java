package com.intetm.igni.ws;

import com.intetm.igni.db.dao.UserDao;
import com.intetm.igni.db.entity.User;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/wordService")
@DeclareRoles("user")
@Produces(MediaType.APPLICATION_JSON)
@Stateless
public class WordService {

    @EJB
    private UserDao userDao;

    @Path("/getBook")
    @GET
    @RolesAllowed("user")
    public List<User> getBookTitle() {
        List<User> users = userDao.selectAll();
        return users;
    }
}