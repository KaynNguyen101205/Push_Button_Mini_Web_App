FROM python:3.8-slim-buster

WORKDIR /app

COPY ./lab3v2/backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./lab3v2/backend .
 
EXPOSE 5000

CMD ["python", "app.py"]
