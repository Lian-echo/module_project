FROM nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html
