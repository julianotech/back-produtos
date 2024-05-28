#!/bin/bash

set -e
set -u

function create_db() {
  local dbname=$1
  echo "-";
  echo "@>> Creating database '${dbname}'";

  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  DO \$$
  BEGIN
    IF EXISTS (SELECT FROM pg_database WHERE datname = '$dbname') THEN
        RAISE NOTICE 'Database already exists';
    ELSE
        PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE ${dbname}');
        RAISE NOTICE 'Database created';
    END IF;
  END \$$;
EOSQL
}

function create_dblink() {
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c 'CREATE EXTENSION dblink;'
}
