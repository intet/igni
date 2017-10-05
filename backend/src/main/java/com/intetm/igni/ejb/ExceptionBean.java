package com.intetm.igni.ejb;

import javax.ejb.Stateless;

@Stateless
public class ExceptionBean {

    public void exception() throws Exception {
        throw new Exception();
    }

    public void runTimeException() {
        throw new RuntimeException();
    }
}

