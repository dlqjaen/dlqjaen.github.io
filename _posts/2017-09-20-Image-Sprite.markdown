---
layout: post
title: "Image Sprite"
date: 2017-09-20 23:10:43 +0900
<!-- img: -->
categories: CSS
---
웹의 성능을 향상시키는 방법은 여러가지가 있지만 웹 사이트에서 빠질 수 없는 이미지를 불러오는 방식에서도 웹 성능을 향상시킬 수 있습니다.

그 방법이 Image Sprite기법입니다.

### Image Sprite 기법
Image Sprtite 기법은 웹에서 자주쓰이는 이미지들을 하나의 큰 이미지(배경이 투명한 이미지)에 필요한 이미지들을 모아 딱 한 번만 이미지를 불러온 후 background-image, background-position 속성을 이용해서 필요한 곳에 필요한 이미지의 부분만 보여주는 방식을 말 합니다.

매번 이미지들을 불러왔을 경우 이미지들을 계속 다운받아 화면에 출력해야 하기에 이미지를 다운로드 하는 시간 + 화면에 출력하는 시간이 걸리지만 Image Sprite 기법을 사용했을 경우에는 웹사이트 초기 로딩시 한 번만 다운받아 이미지를 사용하기에 웹 로딩이 생기지 않습니다.

또 한정된 자원을 사용해야하는 모바일 환경에서 Image Sprite기법은 웹 페이지 로딩시간을 단축시켜줍니다.

### Image Sprite를 도와주는 도구
Image Sprite기법을 사용하기 위해선 일일이 그래픽 프로그램에서 여러 개의 그림을 하나의 이미지로 합쳐야 하고 실제 웹에서 CSS 적용을 위한 그림의 좌표값을 얻기란 번거로울 수가 있습니다. 

그래서, 이런 작업을 자동화해주는 도구들이 개발돼서 한둘씩 생겨나고 있는데, 대표적으로 Website Performance | CSS Sprite Generator가 있습니다. 

이곳에서는 이미지들을 하나로 묶은 압축 파일(zip)을 올려놓으면 약간의 설정만으로 Sprite 이미지와 함께 CSS 적용 rule까지 한꺼번에 얻을 수 있어서 편합니다.

### 참고
[CSS 이미지 스프라이트 자동화 (With Grunt-spritesmith)](https://windtale.net/blog/css-image-sprite-automation-with-grunt-spritesmith/){: target="_blank" }