```
yarn install
```
```
yarn dist
```

# Exam APP :: remote testing with Real-Time checking

### of Monitors, Chat apps, Auto close apps, Block Screen capture and block Gestures

- ver 5.5.1

1. Killing background apps func is disabled at default.
2. Update the readme.md
3. Update the package.json
4. Detecting the screen capture apps, External Monitors.
5. Block the System that doesn't match the requirements.
6. Block the gestures.
7. Block the screen capture.
8. Require the permission of the camera, microphone and screen capture. for WebRTC.
9. Block the chat apps.


# How to

### 0. yarn install

### 1. 앱 아이콘 변경 및 앱 이름 변경 
- image 폴더에 제작하려는 앱의 이름과 동일한 png 파일을 넣는다.
- src/module/config.js 파일의 productName을 제작하려는 앱의 이름으로 변경한다.
- src/module/config.js 파일의 icon 경로를 제작하려는 앱의 이름으로 변경한다.

### 2. 앱 버전 변경
- package.json 파일의 version을 변경한다. ( 년도.월.일 )

### 3. 업데이트 레포지토리 설정
- package.json 파일의 repository.url을 변경한다.
- src/module/config.js 파일의 publish.repo를 변경한다. ( repository.url과 동일하게 )
- 레포지토리가 없다면 github에 레포지토리를 생성한다. ( Release_${앱 이름} 형식으로 생성한다. )

### 4. 내부 연결 URL 변경
- properties.js 파일의 url을 변경한다.
- main.js 파일의 url을 변경한다.

### 5. 앱 설치 파일 생성
- yarn package 로 앱을 생성
- 지정된 레포지토리에 새로운 릴리즈를 생성한다 ( TAG는 semver 형식으로 생성한다. ex> v0.0.1 )

### 6. 앱 업데이트
- package.json 파일의 version을 변경한다. ( 년도.월.일 )
- yarn dist로 앱을 생성, 지정된 레포지토리에 새로운 릴리즈를 생성한다 ( TAG는 semver 형식으로 생성한다. ex> v0.0.1 )
