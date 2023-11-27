from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()

app.mount("/", StaticFiles(directory=r"C:\Users\anton\OneDrive\Рабочий стол\vvpd4\my-app\build", html=True),
          name="static")

if __name__ == "__main__":
    uvicorn.run("server:app", port=8080, reload=True)

