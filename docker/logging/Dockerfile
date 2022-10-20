FROM python:3.10
COPY ./services/logging/requirements.txt /data/
RUN pip install --no-cache-dir --upgrade -r /data/requirements.txt
COPY ./services/logging/ /data/
WORKDIR /data/src
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]