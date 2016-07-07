package com.intetm.igni.ws;

import com.intetm.igni.db.dao.UserDao;
import com.intetm.igni.db.dao.WordDao;
import com.intetm.igni.db.entity.User;
import com.intetm.igni.db.entity.Word;
import com.intetm.igni.security.Roles;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.RolesAllowed;
import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.inject.Inject;
import javax.print.DocFlavor;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import java.util.List;

@Path("/wordService")
@DeclareRoles(Roles.USER)
@Produces(MediaType.APPLICATION_JSON)
@Stateless
public class WordService {

    @Inject
    private UserDao userDao;

    @Inject
    private WordDao wordDao;

    @Inject
    private Logger logger;

    @Context
    SecurityContext securityContext;

    @Path("/getBook")
    @GET
    @RolesAllowed("user")
    public String getBookTitle() {
        String name = securityContext.getUserPrincipal().getName();
        List<User> users = userDao.selectAll();
        return name;
    }

    @Path("/getWords")
    @RolesAllowed(Roles.USER)
    public List<Word> getWords(){
        return wordDao.selectAll();
    }

    @Path("/saveWord")
    @RolesAllowed(Roles.USER)
    @POST
    public void saveWord(Word word){
        wordDao.persist(word);
    }
}