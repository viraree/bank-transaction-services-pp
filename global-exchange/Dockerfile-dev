FROM node:12

# Create app directory
WORKDIR /global-exchange

# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code

COPY . .

#Expose port and start application
EXPOSE 3100

CMD [ "npm", "start" ]