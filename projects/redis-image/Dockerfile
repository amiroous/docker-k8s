# Use an Existing Docker Image as a Base
FROM alpine

# Download and Install Dependencies
RUN apk add --update redis

# Command to be Run, when a Container Instantiated from this Image Starts
CMD ["redis-server"]
