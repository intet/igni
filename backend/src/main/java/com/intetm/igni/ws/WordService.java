package com.intetm.igni.ws;

import com.intetm.igni.db.dao.AppleDao;
import com.intetm.igni.db.dao.UserDao;
import com.intetm.igni.db.entity.Apple;
import com.intetm.igni.db.entity.User;
import com.intetm.igni.ejb.SimpleBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/wordService")
@Produces(MediaType.APPLICATION_JSON)
@Stateless
public class WordService {

    @EJB
    private UserDao userDao;

    @EJB
    private SimpleBean simpleBean;

    @Inject
    private Logger logger;

    @Path("/getBook")
    @GET
    public List<User> getBookTitle() {
        List<User> users = userDao.selectAll();
        return users;
    }

    @Path("/addApple")
    @GET
    public String addApple() {
        simpleBean.addApple();
        return "success";
    }

    @Path("/getApple")
    @GET
    public Apple getApple() {
        return simpleBean.getApple("one");
    }

    @Path("/increment")
    @GET
    public int increment() {
        return simpleBean.increment("one");
    }

    @Path("/test1")
    @GET
    public int test1() throws Exception {
        simpleBean.increment("one");
        throw new Exception("aaa!!!");
    }

    @Path("/test2")
    @GET
    public int test2() throws Exception {
        return simpleBean.test2("one");
    }

    @Path("/test3")
    @GET
    public int test3() throws Exception {
        return simpleBean.test3("one");
    }

    @Path("/test4")
    @GET
    public int test4() throws Exception {
        return simpleBean.test4("one");
    }

    @Path("/test5")
    @GET
    public int test5() throws Exception {
        return simpleBean.test5("one");
    }

    @Path("/test6")
    @GET
    public int test6() throws Exception {
        return simpleBean.test6("one");
    }

}