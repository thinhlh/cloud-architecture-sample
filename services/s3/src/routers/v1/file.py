from fastapi.routing import APIRouter
from fastapi.responses import FileResponse
from fastapi import UploadFile, HTTPException
import os
import shutil

router = APIRouter(prefix="/v1")


@router.post("/file/upload")
def upload_file(file: UploadFile):
    static_directory = os.getcwd()+'/data'
    if not os.path.exists(static_directory):
        os.mkdir(static_directory)
    path = f'{static_directory}/{file.filename}'
    with open(path, mode='wb+') as f:
        f.write(file.file.read())

    return file.filename


@router.get("/files", response_class=FileResponse)
def get_file(file: str):
    path = os.getcwd()+f'/data/{file}'
    if os.path.exists(path=path):
        return path
    else:
        raise HTTPException(404, 'File not found')
