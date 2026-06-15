# Dongwon Seo — Research Portfolio

서동원(Dongwon Seo)의 연구 포트폴리오 정적 사이트입니다.
GitHub Pages로 호스팅됩니다: https://dongwon-research.github.io

## 구조
- `index.html` — 페이지 구조 (+ 오른쪽 아래 편집 버튼)
- `style.css` — 스타일
- `script.js` — `data.json`을 불러와 화면을 그리는 로직
- `data.json` — **실제 콘텐츠 데이터** (프로필/논문/학회/학업/수상)
- `.pages.yml` — Pages CMS 편집 화면 설정

## 콘텐츠 수정 방법 (권장: 웹에서 클릭 편집)
1. 사이트(https://dongwon-research.github.io) 오른쪽 아래 **연필 버튼**을 누르거나,
   https://app.pagescms.org/dongwon-research/dongwon-research.github.io/main/file/portfolio 로 접속
2. GitHub 계정으로 로그인 (최초 1회 권한 허용)
3. 양식으로 내용을 수정하고 **Save** → 자동으로 GitHub에 커밋됨
4. 30초~2분 뒤 사이트에 반영

> 저자 칸은 **그냥 평문으로** 입력하면 됩니다. 맨 위 "자동으로 굵게 표시할 저자 이름"
> 목록에 적힌 이름은 모든 논문에서 자동으로 굵게 표시됩니다.
> 저널은 "저널/학회 이름"(자동 강조 서식)과 "저널 추가 정보" 칸으로 나뉘어 있습니다.

## 콘텐츠 수정 방법 (코드로 직접)
`data.json`을 편집한 뒤 커밋/푸시해도 됩니다 (GitHub 웹 편집기 또는 로컬):

```
git add data.json
git commit -m "Update content"
git push
```
