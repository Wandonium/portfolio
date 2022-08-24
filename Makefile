build: 
	docker build -t portfolio .

run: 
	docker run --name portfolio -d -p 80:80 --rm portfolio:latest