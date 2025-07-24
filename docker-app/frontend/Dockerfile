FROM nginx:alpine

# Nginx default configunu sil
RUN rm /etc/nginx/conf.d/default.conf

# Özel config dosyasını kopyala
COPY nginx.conf /etc/nginx/conf.d

# Uygulama dosyalarını kopyala
COPY ./app /usr/share/nginx/html

# İzinleri ayarla (Bu kritik kısım)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod 644 /usr/share/nginx/html/*

# 8080 portunu aç
EXPOSE 8080

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]