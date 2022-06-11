## Getting started

### Upload

localhost:3001/upload/newimage
form data
POST
'imagefile' as file key 

curl -X POST \
  http://localhost:3001/upload/newimage \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -H 'postman-token: 37fdef54-acac-e79b-da02-f6b83d62a572' \
  -F imagefile=@bearhi.jpg


### Download
localhost:3001/download/1654947354826-331912686-bearhi.jpg
GET

curl -X GET \
  http://localhost:3001/download/1654947354826-331912686-bearhi.jpg \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 4a10d2d8-131a-624f-b9db-61c4cb55d833'