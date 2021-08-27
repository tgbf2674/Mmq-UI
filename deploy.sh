rm -rf dist &&
yarn build &&
git init &&
git add . &&
git commit -m 'fc' &&
git branch -M master &&
git remote add origin git@github.com:tgbf2674/Vue3UI-website.git &&
git push -f -u origin master &&
cd ..
