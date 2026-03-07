@echo off
copy /Y "C:\Users\goro_yamaoka\OneDrive - 株式会社あかがね\顧客ニュース収集.html" "C:\Users\goro_yamaoka\Desktop\my-daily-page\顧客ニュース収集.html"
cd /d "C:\Users\goro_yamaoka\Desktop\my-daily-page"
git add -A
git commit -m "daily update %date%"
git push origin main
