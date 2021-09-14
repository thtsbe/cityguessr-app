yarn build --prod

docker build -t thtsbe/cityguessr-app:latest .

docker push thtsbe/cityguessr-app:latest
