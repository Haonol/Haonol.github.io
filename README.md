# Dongwon Seo — Research Portfolio

서동원(Dongwon Seo)의 연구 포트폴리오 정적 사이트입니다.
GitHub Pages로 호스팅됩니다: https://haonol.github.io

## 구조
- `index.html` — 페이지 구조
- `style.css` — 스타일
- `script.js` — `data.json`을 불러와 화면을 그리는 로직
- `data.json` — **실제 콘텐츠 데이터** (프로필/논문/학회/학업/수상)
- `.pages.yml` — Pages CMS 편집 화면 설정

## 콘텐츠 수정 방법 (권장: 웹에서 클릭 편집)
1. https://app.pagescms.org 접속 → GitHub 계정으로 로그인
2. `Haonol/Haonol.github.io` 저장소 선택 (최초 1회 권한 허용)
3. 양식으로 내용을 수정하고 **Save** → 자동으로 GitHub에 커밋됨
4. 1~2분 뒤 https://haonol.github.io 에 반영

> 논문의 저자/저널 칸에서 특정 글자를 굵게 하려면 `<strong>이름</strong>`,
> 저널명을 이탤릭(강조색)으로 하려면 `<em>저널명</em>` 형식을 사용하세요.

## 콘텐츠 수정 방법 (코드로 직접)
`data.json`을 편집한 뒤 커밋/푸시해도 됩니다 (GitHub 웹 편집기 또는 로컬):

```
git add data.json
git commit -m "Update content"
git push
```
