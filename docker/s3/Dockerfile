FROM python:3.10
COPY ./services/s3/requirements.txt /data/
RUN pip install --no-cache-dir --upgrade -r /data/requirements.txt
COPY ./services/s3/ /data/
COPY ./services/s3/data /statics
WORKDIR /data/src
EXPOSE 80
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80", "--workers","3"]