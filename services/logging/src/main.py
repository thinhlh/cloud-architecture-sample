from fastapi import FastAPI
from routers import logging
app = FastAPI()

app.include_router(logging.router)
