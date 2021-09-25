CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL,
    CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
);

START TRANSACTION;


DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20210925004457_InitialMigration') THEN
    CREATE SCHEMA IF NOT EXISTS issues;
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20210925004457_InitialMigration') THEN
    CREATE TABLE issues."Issues" (
        "Id" uuid NOT NULL,
        "SectionId" uuid NOT NULL,
        "Title" text NULL,
        "Description" text NULL,
        "SectionPosition" integer NOT NULL,
        CONSTRAINT "PK_Issues" PRIMARY KEY ("Id")
    );
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20210925004457_InitialMigration') THEN
    INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
    VALUES ('20210925004457_InitialMigration', '5.0.10');
    END IF;
END $EF$;