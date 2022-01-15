## Smart-Garden

- moisture sensors over esphome

Public charts https://imelnikov.ru/garden/

|   a  | Yandex | Google |
|------|--------|--------|
| MQTT 
| - требует tls сертификата сервера, для шифрования переписки
- http-bridge требует iam-token, срок жизни которого 12 часов. Но его можно получить через команду.
- POST https://iot-devices.api.cloud.yandex.net/iot-devices/v1/registries/arecmlsnsumegmha1ict/publish 
| - требует tls сертификат сервера
- http требует jwt-token (срок жизни которого можно управлять) и кодировать тело запроса.
- jwt требует приватный и публичный ключи для проверки на сервере
```
curl -X POST -H 'authorization: Bearer <JWT>' 
     -H 'content-type: application/json' \
     --data '{"binary_data": "DATA"}' -H 'cache-control: no-cache' \
    'https://cloudiotdevice.googleapis.com/v1/projects/{project-id}/locations/{cloud-region}/registries/{registry-id}/devices/{device-id}:publishEvent'
```
|
| Monitoring |
- требует iam-token (12 часов)
- получается отправить метрики в специальном формате json
|
google monitoring 
|
