package com.intetm.igni.db.entity;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = Apple.TABLE)
public class Apple {
    public static final String TABLE = "apples";
    public static final String COLUMN_ID = "id";
    public static final String COLUMN_USER = "user";
    public static final String COLUMN_COUNT = "amount";

    @Id
    @Column(name = COLUMN_ID, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(name = COLUMN_USER)
    private String user;

    @Column(name = COLUMN_COUNT)
    private int amount;


    public Apple() {
    }

    public Apple(String user, int amount) {
        this.user = user;
        this.amount = amount;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
