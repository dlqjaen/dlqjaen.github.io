---
path: '/posting/backend-understanding'
date: '2021-01-25'
title: '백엔드 용어 정리'
description: ''
tags: ['Basic']
---

## 백엔드를 이해해보자

### 키워드

- 람다
- AWS
- API 게이트웨이
- 프록시
- 로드벨런서
- 쿠버네티스
- 키바나
- S3 버킷
- DynamoDB
- 엘라스틱서치
- Kinesis
- Amazon EFS 파일 시스템
- 컨테이너
- 도커
- AWS 파게이트
- ECS 클러스터
- EKS 클러스터
- 네크워크 7계층
- 클라우드 워치 이벤트



### Lambda(람다)

- 서버를 `프로비저닝`하거나 관리하지 않고도 코드를 실행할 수 있게 해주는 컴퓨팅 서비스
- 사용한 컴퓨팅 시간에 대해서만 비용을 지불
- 이벤트 드리븐방식으로 동작
- 유사 서비스
  - 마이크로소프트 - 에저 펑션
  - 구글 클라우드 플렛폼 - 클라우드 펑션, 클라우드 런
- 메모리 크기를 128MB ~ 3,008MB에서 64MB 단위로 결정 메모리양에 따라 CPU용량과 기타 리소스가 할당
- 최대 실행시간 15분 제한 시간 지정가능
- 코드 용량이 최대 250MB이다
- 요금측정: 리퀘스트 비용(USD) * 사용시간 * 컴퓨팅 단위
- 아마존 리눅스2를 기반으로 실행
- 람다 트리거
  - 클라우드 워치 이벤트
    - 시간 - 크론잡, 콜드 스타트를 막기위한 5분이내 람다실행
    - 다른 서비스의 이벤트
  - S3 객체 이벤트
  - 아마존 이벤트브릿지 ([Amazon EventBridge 통합](https://aws.amazon.com/ko/eventbridge/integrations/))
  - API 게이트웨이()
    - REST API
    - HTTP API
  - 로드 벨런서
    - 고정 비용 발생
- AWS 람다 엣지
  - 클라우드 프론트 엣지(CDN 파일을 전송해주는 캐시 서버)에서 실행
  - 엣지 로케이션을 통해 제공 헤더조작, SEP, 실시간 이미지 변환 용도로 사용
  - 일반 람다 함수보다 실행시간 및 리소스 제약이 크다
- AWS 람다 레이어
  - 함수에서 공통적으로 사용되는 부분을 레이어로 만들어 험수들 간에 공유
- 프로비전닝 컨커런시
  - 코드 스타트 문제를 해결하기 위해 미리 람다 함수를 실행할 수 있도록 준비해두는 기능
  - 람다는 요청을 받은 즉시 환경을 준비하고 실행
  - 콜드 스타트: 환경이 준비되어있지 않은 상태에서 함수를 실행하는 것
  - 함수를 여러 번 실행하면 실행 환경이 재사용됨 (5분)
  - 동시 호출이 급작스럽게 늘어나는 상황에서 낮은 레이턴시가 중요한 경우 프로비저닝 컨커런시로 해결가능
- 스텝 펑션
  - AWS 람다 함수들을 조합하여 위크플로우를 구성하는 서비스
  - 순차적 단계를 관리 할 수 있게 해주는 것
- RDS 프록시
  - 클라이언트와 RDS 데이터베이스 사이에서 커넥션을 관리해주는 서비스
  - 데이터베이스를 조작하는 람다의 호출증가로 데이터베이스 메모리 부족등의 문제를 완화할 수 있음
- 프레임워크
  - SAM(서버리스 애플리케이션 모델)
    - 람다와 dynamodb를 도커환경에서 테스트해볼 수 있음
    - 베타버전
  - 파이썬의 자파
  - 루비의 제트
  - 노드js의 서버리스, 에이펙스
- AWS 람다 활용 사례
  - 당근마켓: 썸네일 생성, 실시간 이미지 리사이즈
  - 로켓펀치: 사이드 위젯의 트레픽 처리
- X-RAY
  - 연결된 다른 함수와의 유기적인 연결을 파악하기 쉽다
  - 지연시간등을 다이어그램으로 확인가능
- ECS Fargate (10분 ~ 1시간 컴퓨팅 작업)
  - 사용자가 만든 도커이미지를 별도의 EC2 인스턴스나 기타설정없이 실행하고 실행된 시간만큼만 금액을 지불
  - ECS, EC2(1시간 이상 컴퓨팅 작업)