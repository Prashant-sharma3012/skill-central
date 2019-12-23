// run sql
docker run --name skillcentral -e MYSQL_ROOT_PASSWORD=dev -e MYSQL_DATABASE=skillcentral -p 3306:3306 -v C:\docker_mysql_volume\skillcentral -d mysql