cd /home/streaming/apps/events-frontend
sudo git pull https://github.com/Streaming-Cuba/events-frontend.git -s recursive -X theirs
yarn --ignore-engines
pm2 restart events-frontend