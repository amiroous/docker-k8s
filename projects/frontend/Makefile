build:
	docker-compose up --build

up:
	docker-compose up

down:
	docker-compose down

test:
	docker exec -it amiroous/docker-k8s-app npm run test

build-prod:
	docker build -t amiroous/docker-k8s-app:latest .
	docker run -p 9090:80 --name=frontend-app amiroous/frontend
