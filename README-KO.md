# Jun-Sang Yoo — 정적 Academic Portfolio

이 폴더는 기존의 오래된 al-folio/Jekyll 빌드를 대체하는 **순수 HTML/CSS/JavaScript 홈페이지**입니다.
Ruby, Bundler, Jekyll, npm 빌드, upstream fork가 필요하지 않습니다.

## 무엇이 바뀌었나

- `/` : About, research, news, selected publications, education
- `/publications/` : 전체 논문, 연도 필터, 검색, 초록 펼치기
- 2026년 MASS(ECCV)와 T2M4AR(ICIP) 포함
- 모바일 반응형, 다크 모드, 접근성, SEO 메타데이터
- `.nojekyll`을 사용하므로 GitHub Pages가 파일을 그대로 서비스
- 기존 `.github/workflows/deploy.yml`은 자동 실행되지 않는 안내용 workflow로 대체

## 가장 안전한 적용 방법

### 1. 현재 저장소를 로컬에 받은 경우

```bash
git clone https://github.com/junsang7777/junsang7777.github.io.git
cd junsang7777.github.io
```

현재 저장소의 새 논문 이미지 두 파일을 별도로 보존하십시오.

```bash
cp assets/img/MASS.png /tmp/MASS.png
cp assets/img/t2m4ar.png /tmp/t2m4ar.png
```

그 다음 이 배포 패키지의 내용을 저장소 루트에 덮어쓰고, 두 이미지를 복원합니다.

```bash
cp /tmp/MASS.png assets/img/MASS.png
cp /tmp/t2m4ar.png assets/img/t2m4ar.png
git add -A
git commit -m "Replace legacy Jekyll site with static academic portfolio"
git push origin master
```

기존 Jekyll 파일은 남아 있어도 `.nojekyll` 환경에서는 서비스에 사용되지 않습니다. 저장소를 깔끔하게 만들려면 나중에 `_bibliography`, `_layouts`, `_plugins`, `_sass`, `Gemfile`, `_config.yml` 등을 삭제해도 됩니다.

### 2. GitHub Pages 설정 변경 — 필수

저장소에서 다음 순서로 설정합니다.

1. **Settings**
2. **Pages**
3. **Build and deployment → Source: Deploy from a branch**
4. Branch: **master**
5. Folder: **/(root)**
6. **Save**

이후 `master`에 push할 때마다 별도 빌드 없이 정적 사이트가 배포됩니다. 기존 `gh-pages` 브랜치는 더 이상 배포 소스로 사용하지 않습니다.

## GitHub 웹 화면에서만 적용하는 경우

1. ZIP을 풀고 파일들을 저장소 루트에 업로드합니다.
2. 기존 `assets/img/MASS.png`, `assets/img/t2m4ar.png`는 삭제하지 않습니다.
3. `.nojekyll`과 `.github/workflows/deploy.yml`까지 업로드합니다.
4. 위의 Pages 설정을 `master / (root)`로 바꿉니다.

새 논문 이미지가 없는 별도 저장소에서도 동작하도록 fallback SVG가 포함되어 있습니다. 현재 저장소에 있는 실제 `MASS.png`, `t2m4ar.png`가 존재하면 실제 이미지가 자동으로 우선 표시됩니다.

## 로컬 미리보기

파일을 직접 더블클릭하지 말고 간단한 HTTP 서버를 사용하십시오.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 논문 수정

논문 정보는 한 파일에서 관리합니다.

```text
assets/js/publications-data.js
```

새 논문을 추가할 때 배열 맨 앞에 객체를 추가하면 홈페이지의 selected publications와 전체 publications 페이지에 동시에 반영됩니다.

## 주요 경로

```text
index.html                         홈페이지
publications/index.html            전체 논문 페이지
assets/css/site.css                전체 스타일
assets/js/publications-data.js     논문 데이터
assets/js/site.js                  다크 모드, 메뉴, 카드 렌더링
assets/js/publications-page.js     검색 및 연도 필터
.nojekyll                          Jekyll 빌드 비활성화
```
