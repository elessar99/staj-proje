# Backend için Python image
FROM python:3.11-slim

WORKDIR /app

COPY ./backend /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
