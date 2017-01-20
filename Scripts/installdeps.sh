#!/bin/bash

cd /root/
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install stable
node -e "console.log('Running Node.js ' + process.version)"
npm install
