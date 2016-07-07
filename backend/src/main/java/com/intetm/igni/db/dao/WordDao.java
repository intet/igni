package com.intetm.igni.db.dao;

import com.intetm.igni.db.entity.Word;

import javax.ejb.EJB;
import java.util.UUID;

@EJB(name = "WordDao", beanInterface = WordDao.class)
public class WordDao extends AbstractDao<Word,UUID> {
    public WordDao() {
        super(Word.class);
    }

}
