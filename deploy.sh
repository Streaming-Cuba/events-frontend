cd /home/streaming/webapps/events-frontend
git pull https://$1:$2@github.com/Streaming-Cuba/events-frontend.git
pm2 stop events-frontend
yarn build
pm2 restart events-frontend