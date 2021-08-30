rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:tgbf2674/Vue3UI-website.git &&
git push origin master --force &&
cd ..
