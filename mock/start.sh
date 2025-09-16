echo "waiting 5 seconds" &&
sleep 5 &&
echo "test api container health" &&
curl -I http://api:3000/v1/health &&
echo "api container OK" &&
echo "starts prism mock server" &&
prism mock http://api:3000/v1/docs/json -h 0.0.0.0