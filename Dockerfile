# 使用nginx作为基础镜像
FROM nginx
# 添加本地的nginx.conf文件到服务器的nginx下
# ADD nginx.conf /etc/nginx/nginx.conf
# 拷贝dist文件到容器中 /usr/share/nginx/html/:容器里存放前端打包文件的路径
COPY ./dist /usr/share/nginx/html/
