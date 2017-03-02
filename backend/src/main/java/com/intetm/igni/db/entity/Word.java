package com.intetm.igni.db.entity;

import com.google.gson.Gson;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;
@Entity
@Table(name = Word.TABLE)
public class Word {
    public static final String TABLE = "words";
    public static final String COLUMN_ID = "id";
    public static final String COLUMN_ORIGINAL = "original";
    public static final String COLUMN_TRANSLATION = "translation";
    public static final String COLUMN_COUNT_ATTEMPTS = "count_attempts";
    public static final String COLUMN_COUNT_SUCCESS = "count_success";
    public static final String COLUMN_COUNT_FAIL = "count_fail";
    public static final String COLUMN_LINE_SUCCESS = "line_Success";

    @Id
    @Column(name = COLUMN_ID, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(name = COLUMN_ORIGINAL)
    private String original;

    @Column(name = COLUMN_TRANSLATION)
    private String translation;

    @Column(name = COLUMN_COUNT_ATTEMPTS)
    private int countAttempts;

    @Column(name = COLUMN_COUNT_SUCCESS)
    private int countSuccess;

    @Column(name = COLUMN_COUNT_FAIL)
    private int countFail;

    @Column(name = COLUMN_LINE_SUCCESS)
    private int lineSuccess;

    public Word(){

    }

    public static Word valueOf(String json) {
        Gson gson = new Gson();
        Word result = gson.fromJson(json, Word.class);
        return result;
    }

}
