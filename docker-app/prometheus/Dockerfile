# Resmi Prometheus imajını kullan
FROM prom/prometheus:latest

# Varsayılan yapılandırmayı kopyala (isteğe bağlı: özelleştirmek için)
COPY prometheus.yml /etc/prometheus/prometheus.yml

# Prometheus'u başlat
EXPOSE 9090
CMD ["--config.file=/etc/prometheus/prometheus.yml"]