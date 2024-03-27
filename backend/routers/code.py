from fastapi import APIRouter


router_code = APIRouter(
    prefix="/code",
    tags=["Code"],
    responses={404: {"description": "Not found"}},
)


@router_code.get("/")
async def get_code():
    return {"message": "Hello World"}
