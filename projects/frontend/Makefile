build:
	docker-compose up --build

up:
	docker-compose up

down:
	docker-compose down

test:
	docker exec -it frontend_web_1 npm run test

build-prod:
	docker build -t amiroous/frontend:latest .
	docker run -p 9090:80 --name=frontend-app amiroous/frontend
