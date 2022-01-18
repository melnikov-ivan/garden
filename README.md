# Smart-Garden

- moisture sensors over esphome

Public charts https://imelnikov.ru/garden/

```
cat secrets.yaml
# WiFi
wifi.ssid: 'your wifi network'
wifi.password: 'your secret pass'

# Cloud
yndx.api.url: 'yndx api gateway url'
```


## MQTT 
### Yandex
- требует tls сертификата сервера, для шифрования переписки
- http-bridge требует iam-token, срок жизни которого 12 часов. Но его можно получить через команду.
```
curl -X POST  -d "{'topic': '/registries/arecmlsnsumegmha1ict/events', 'body': 'test'}" \
https://iot-devices.api.cloud.yandex.net/iot-devices/v1/registries/arecmlsnsumegmha1ict/publish 
``` 

### Google
- требует tls сертификат сервера
- http требует jwt-token (срок жизни которого можно управлять) и кодировать тело запроса.
- jwt требует приватный и публичный ключи для проверки на сервере
```
curl -X POST -H 'authorization: Bearer <JWT>' 
     -H 'content-type: application/json' \
     --data '{"binary_data": "DATA"}' -H 'cache-control: no-cache' \
    'https://cloudiotdevice.googleapis.com/v1/projects/{project-id}/locations/{cloud-region}/registries/{registry-id}/devices/{device-id}:publishEvent'
```

## Monitoring 
### Yandex
- требует iam-token (12 часов)
- получается отправить метрики в специальном формате json

### Google 

Тоже что-то есть


## Api-gateway
### Yandex

- по сути создается секретный урл, который передает запросы функции.
- Можно сохранить в ydb, или отправить в мониторинг
