"""create user table

Revision ID: b128598da9df
Revises: 
Create Date: 2022-09-11 17:28:19.383862

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b128598da9df'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('email', sa.String(100), nullable=False),
        sa.Column('password', sa.String(40), nullable=False),
    )


def downgrade() -> None:
    op.drop_table('users')
