from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from starlette.config import Config
from starlette.datastructures import Secret
from databases import DatabaseURL
from config import DATABASE_URL, database_url

SQLALCHEMY_DATABASE_URL = database_url

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()