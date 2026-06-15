# Dongwon Seo — Research Portfolio

서동원(Dongwon Seo)의 연구 포트폴리오 정적 사이트입니다.
GitHub Pages로 호스팅됩니다: https://haonol.github.io

## 구조
- `index.html` — 페이지 구조
- `style.css` — 스타일
- `script.js` — 콘텐츠 데이터(`siteData`)와 렌더링 로직

## 콘텐츠 수정 방법
순수 정적 사이트라 서버/DB가 없습니다. 내용을 바꾸려면
`script.js` 상단의 `siteData` 객체를 직접 편집한 뒤 커밋/푸시하세요.

```
git add script.js
git commit -m "Update content"
git push
```

푸시 후 1~2분이면 사이트에 반영됩니다.
