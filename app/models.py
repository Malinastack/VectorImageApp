from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base
from pydantic import BaseModel, constr

class User(BaseModel):

    id: int
    email: constr(max_length=100)
    password: constr(max_length=40)

