cd /home/streaming/webapps/events-frontend
git pull https://github.com/Streaming-Cuba/events-frontend.git
pm2 stop events-frontend
yarn 
yarn build
pm2 restart events-frontend