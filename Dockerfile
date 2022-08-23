FROM python:3.10-slim-buster
WORKDIR /app
COPY pyproject.toml .
ENV PYTHONPATH=${PYTHONPATH}:${PWD}
COPY . .
RUN pip3 install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

EXPOSE 8000
