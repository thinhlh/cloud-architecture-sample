FROM tiangolo/uvicorn-gunicorn-fastapi
COPY ../../services/logging/requirements.txt /data/
RUN pip3 install -r /data/requirements.txt
COPY ../../services/logging/ /data/
WORKDIR /data/src
EXPOSE 8000
CMD [ "uvicorn", "main:app", "--port ", "8000" ]
