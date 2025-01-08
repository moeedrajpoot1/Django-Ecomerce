FROM node:18
WORKDIR /code

#ARG 

COPY package.json package-lock.json ./
RUN npm install


# Copy the rest of the application files
COPY . .

# Build the application (adjust the build command based on your framework)
RUN npm run dev

# Use a lightweight web server to serve the static files
# In this example, we use the Node.js image to serve the app. Alternatively, you can use nginx.
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
#CMD ["serve", "-s", "build", "-l", "3000"]


CMD [ "npm run dev","3000" ]
