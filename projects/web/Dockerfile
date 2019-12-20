# Use an Existing Docker Image as a Base
FROM node:alpine

# Set Working Directory
WORKDIR /usr/app

# Copy Files & Install Dependencies
COPY ./package.json ./
RUN npm install

COPY ./ ./

# Command to be Run, when a Container Instantiated from this Image Starts
CMD ["npm", "start"]
