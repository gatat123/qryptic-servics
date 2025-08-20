# Qryptic Company Website

모던한 기업 웹사이트 - Next.js 13.4 기반의 반응형 웹 애플리케이션

## 🚀 기술 스택

- **Framework**: Next.js 13.4.3
- **UI Library**: React 18.2.0
- **Animation**: GSAP 3.11.5
- **Styling**: SASS
- **Form Handling**: Formik 2.4.2
- **Slider**: Swiper 9.0.0
- **Layout**: Isotope Layout 3.0.6

## 📁 프로젝트 구조

```
qryptic-company-website/
├── public/           # 정적 파일 (이미지, 아이콘 등)
├── src/
│   ├── app/         # Next.js 13 App Directory
│   ├── data/        # 콘텐츠 데이터 (마크다운, JSON)
│   └── styles/      # SCSS 스타일시트
├── package.json     # 프로젝트 의존성
└── next.config.js   # Next.js 설정
```

## 🛠 설치 및 실행

### 요구사항
- Node.js 16.8 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로덕션 빌드
```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎨 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 UI
- **애니메이션**: GSAP를 활용한 부드러운 애니메이션 효과
- **이미지 슬라이더**: Swiper를 통한 터치 지원 슬라이더
- **포트폴리오 갤러리**: Isotope Layout으로 구현된 필터링 가능한 갤러리
- **폼 처리**: Formik을 사용한 견고한 폼 유효성 검사
- **SEO 최적화**: Next.js의 내장 SEO 기능 활용

## 📝 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - 코드 린팅

## 🚀 배포

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. "Import Project" 클릭
3. GitHub 레포지토리 선택
4. 배포 설정 확인 후 "Deploy"

### GitHub Pages 배포
Next.js는 정적 사이트 생성을 지원합니다:
```bash
npm run build
npm run export
```

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.

## 🤝 기여

버그 리포트, 기능 제안, Pull Request는 언제든 환영합니다!

## 📧 문의

프로젝트 관련 문의사항은 이슈 트래커를 이용해주세요.

---

**GitHub Repository**: [https://github.com/gatat123/qryptic-servics](https://github.com/gatat123/qryptic-servics)
