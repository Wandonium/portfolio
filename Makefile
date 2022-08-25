build: 
	docker build -t wandonium/portfolio .
	docker push wandonium/portfolio

run: 
	docker run --name portfolio -d -p 80:80 --rm wandonium/portfolio:latest

run-prod:
	docker-compose up -d