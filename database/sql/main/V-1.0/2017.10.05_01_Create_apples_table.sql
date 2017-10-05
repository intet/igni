--liquibase formatted sql
--changeset Sivodedov Dmitry:CREATE_TABLE_Users
CREATE TABLE apples (
  id       BINARY(16)             NOT NULL PRIMARY KEY,
  user VARCHAR_IGNORECASE(50) NOT NULL,
  amount INTEGER NOT NULL
);
--rollback drop table Users;

--changeset Sivodedov Dmitry:CREATE_TRIGGER_TRIG_BI_DM_USERS splitStatements:false
CREATE TRIGGER TRIG_BI_DM_APPLES BEFORE INSERT ON APPLES
  REFERENCING NEW AS NEW
FOR EACH ROW
  BEGIN ATOMIC
    IF NEW.id IS NULL
    THEN
      -- noinspection SqlResolve
      SET NEW.id = UUID();
    END IF;
  END;

--rollback drop TRIGGER TRIG_BI_DM_USERS on Users;