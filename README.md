# 띵맵

|     | 목차        |
| --- | ----------- |
| 1   | 서비스 소개 |
| 2   | 사용기술    |
| 3   | 핵심 기능   |
| 4   | 기술 스택   |
| 5   | 기타 사항   |

<img src='./public/logo.svg' width='1000px' height='500px'/>

## 서비스 소개

띵맵은 마인드 맵을 만들 수 있는 웹사이트입니다

[페이지 디자인](https://www.figma.com/file/pfrQPY21Q3AMi2Tev4OylE/Untitled?node-id=0%3A1)

## 사용기술

- React
- JavaScript
- Styled-Component
- React-Router-Dom

## 핵심 기능

## 동작 시연

## 기타 사항

<details>
  <summary>프로젝트 시작 babel에러</sommary>
  <div markdown='1'>
    There might be a problem with the project dependency tree.
    It is likely not a bug in Create React App, but something you need to fix locally.

    The react-scripts package provided by Create React App requires a dependency:

    "babel-jest": "^26.6.0"

    Don't try to install it manually: your package manager does it automatically.
    However, a different version of babel-jest was detected higher up in the tree:

    C:\Users\Hanjo\coding\ttingmap\node_modules\babel-jest (version: 25.5.1)

    Manually installing incompatible versions is known to cause hard-to-debug issues.

    If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
    That will permanently disable this message but you might encounter other issues.

    To fix the dependency tree, try following the steps below in the exact order:

    1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
    2. Delete node_modules in your project folder.
    3. Remove "babel-jest" from dependencies and/or devDependencies in the package.json file in your project folder.
    4. Run npm install or yarn, depending on the package manager you use.

    In most cases, this should be enough to fix the problem.
    If this has not helped, there are a few other things you can try:

    5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
        This may help because npm has known issues with package hoisting which may get resolved in future
      versions.

    6. Check if C:\Users\Hanjo\coding\ttingmap\node_modules\babel-jest is outside your project directory. For example, you might have accidentally installed something in your home folder.

    7. Try running npm ls babel-jest in your project folder.
      This will tell you which other package (apart from the expected react-scripts) installed babel-jest.

    If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
    That would permanently disable this preflight check in case you want to proceed anyway.

    P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

  </div>
</details>

만약 해당 에러가 표시된다면 `.env`파일을 최상위 폴더에 생성 후 아래의 내용을 입력하세요

```
SKIP_PREFLIGHT_CHECK=true
```
