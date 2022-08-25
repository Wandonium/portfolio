build: 
	docker build -t wandonium/portfolio .
	docker push wandonium/portfolio

run: 
	docker run --name portfolio -d -p 80:80 --rm wandonium/portfolio:latest

run-prod:
	docker-compose up -d

SSH_STRING:=wando@102.37.136.131

ssh:
	ssh ${SSH_STRING}

copy:
	scp -r ./* ${SSH_STRING}:~/portfolio-projects/portfolio