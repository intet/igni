package com.intetm.igni.db.entity;

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

    @Id
    @Column(name = COLUMN_ID, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(name = COLUMN_ORIGINAL)
    private String original;

    @Column(name = COLUMN_TRANSLATION)
    private String translation;


}
