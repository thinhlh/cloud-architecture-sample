from datetime import date, datetime
from fastapi.routing import APIRouter

router = APIRouter()


@router.get('/log')
def logging():
    data = 'At ' + str(datetime.now()) + ' called /log'
    print(data)
    try:
        with open(f'../logs/{date.today()}.log', "a+") as f:
            f.write(data + "\n")
        return {"message": None, "success": True, "data": data}
    except:
        return {"message": None, "success": False, "data": None}
