const express = require('express');
const os = require('os');
const typeIs = require('type-is');
const app = express();
const port = 3000;

// find the correct local network IP address
function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    for (const netInfo of networkInterfaces[interfaceName]) {
      // Check if the network is IPv4 and not interface
      if (netInfo.family === 'IPv4' && !netInfo.internal) {
        return netInfo.address;
      }
    }
  }
  return '127.0.0.1'; // Fallback to localhost if no network if no network found
}


const ip = getLocalIP();

app.get('/api', (req, res) => {
  res.json({
    message: "Hello world",
    data: {
      name: "satria",
      age: 27
    }
  })
})



app.listen(port, ip, () => {
  console.log(`API is running at http://${ip}:${port}/`)
});
