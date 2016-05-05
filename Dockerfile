# Use Node v5 as the base image.
FROM node:5

# Add the package.json to the image, install dependencies.
WORKDIR /opt/goal-parser/service
ADD package.json .
RUN npm install --production

# Now add the source and expose.
ADD . .
EXPOSE 3000

# Run our app.
CMD ["npm", "run", "watch"]
