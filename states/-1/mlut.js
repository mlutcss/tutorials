import { jitEngine } from 'https://unpkg.com/@mlut/core@2.5.1/dist/index.js';

const bodyContent = document.body.outerHTML;
const headElm = document.head;
const styleElm = headElm.querySelector('style') ?? document.createElement('style');

const sassConfig = `
@use '@mlut/core/tools';
@use '@mlut/core/dist/sass/css/styles/variables';
@use '@mlut/core/dist/sass/css/helpers/btn';
@use '@mlut/core/dist/sass/addons/demo-theme';

html {
  --ml-accent500: rgba(231, 233, 234, 0.5);
  --ml-accent900: #e7e9ea;
  --ml-accent850: #0f1419;
  --ml-accent600: #333639;
  --ml-accent200: #1d9bf0;
  --ml-accent300: #fa4646;
  --ml-accent400: #6bc4ff;
  --ml-secondary900: #4a4a4a;
  --ml-secondary850: #bdbdbd;
  --ml-secondary400: rgba(0,0,0,0.40);
  --ml-secondary300: rgba(0,0,0,0.20);
  --ml-secondary200: rgba(0,0,0,0.10);
}
`;

await jitEngine.init(['style.scss', sassConfig]);
jitEngine.putContent('index.html', bodyContent);
styleElm.innerHTML = await jitEngine.generateCss();
headElm.appendChild(styleElm);
