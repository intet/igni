package com.intetm.igni.ws;

import javax.annotation.security.DeclareRoles;
import javax.servlet.ServletException;
import javax.servlet.annotation.HttpConstraint;
import javax.servlet.annotation.ServletSecurity;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@WebServlet("/video")
@DeclareRoles("user")
@ServletSecurity(@HttpConstraint(rolesAllowed = {"user"}))
public class VideoListServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("list", Collections.emptyList());
        getServletContext().getRequestDispatcher("/WEB-INF/jsp/list.jsp").forward(req, resp);
    }
}