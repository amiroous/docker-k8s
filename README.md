# Docker with Kubernetes (k8s)


## Docker CLI

### Basics
`docker help`
`docker <COMMAND> --help`
`docker version`
`docker system info`
`docker system df`
`docker container stats` Display a live stream of container(s) resource usage statistics

`docker login`
`docker logout`

`docker create <IMAGE_NAME> <COMMAND>`
`docker start <CONTAINER_ID>`, `docker start -a <CONTAINER_ID>`
`docker stop <CONTAINER_ID>`
`docker kill <CONTAINER_ID>`
`docker run <IMAGE_NAME> <COMMAND>`

`docker run -it <IMAGE_NAME> <COMMAND>`
`docker exec -it <CONTAINER_ID> <COMMAND>`

`docker ps`, `docker ps --all`
`docker logs <CONTAINER_ID>`

`docker container prune`
`docker image prune`
`docker volume prune`
`docker network prune`
`docker system prune`


### 1. Container
> If you don't specify (container, image, network, ..) after `docker ...`, default would be (container)
> `docker ps` = `docker container ps`

`docker container ls`, `docker ps`
`docker container stop <CONTAINER_ID>`
`docker container rm <CONTAINER_ID>`
`docker stop $(docker ps -aq)` Stops All Containers
`docker rm $(docker ps -aq)` Removes All Containers
`docker ps -a | awk '{ print $1,$2 }' | grep <IMAGE_NAME> | awk '{print $1 }' | xargs -I {} docker rm {}` Removed All Containers for an Image

`docker container run -p <HOST_PORT>:<CONTAINER_PORT> --name <CONTAINER_NAME> <IMAGE_NAME> -it <IMAGE_NAME> <COMMAND>`
`docker container run --publish <HOST_PORT>:<CONTAINER_PORT> --name <CONTAINER_NAME> <IMAGE_NAME> --detach <COMMAND>`
    - `--name` Assign a name to the container
    - `--publish` Publish a container’s port(s) to the host <HOST_PORT>:<CONTAINER_PORT>
    - `--detach` Run container in background and print container ID
    
`docker port <CONTAINER_ID>` List port mappings for the container
`docker port <CONTAINER_ID> <PRIVATE_PORT>` List specific port mappings for the container

`docker container inspect --format '{{ .NetworkSettings.IPAddress }}' <CONTAINER_NAME>`
`docker container exec -it <CONTAINER_NAME> <COMMAND>`
`docker container logs <CONTAINER_NAME>` Fetch the logs of a container
`docker container logs -f <CONTAINER_NAME>` Fetch the logs of a container and tail it
`docker container top <CONTAINER_NAME>` Display the running processes of a contain

### 2. Image
`docker image ls`
`docker image ls -a`
`docker image pull <IMAGE[:TAG]>`
`docker image push <IMAGE[:TAG]>`
`docker image tag <SOURCE_IMAGE[:TAG]> <TARGET_IMAGE[:TAG]>`
`docker image build -t [:TAG] .`
`docker image build -t <YOUR_DOCKER_ID/REPO_NAME/VERSION> .`
`docker history <IMAGE[:TAG]>`
`docker image rm <IMAGE>`
`docker rmi $(docker images -q)` Removes All Images

### 3. Volume
> If you start a container with a volume that does not yet exist, Docker creates the volume for you.
`docker volume ls`
`docker volume create <VOLUME_NAME>`
`docker volume inspect <VOLUME_NAME>`
`docker volume rm <VOLUME_NAME>`

### 4. Network
`docker network ls`
`docker network ls -a`
`docker network inspect <NETWORK_ID>`

`docker network create --driver <NETWORK_ID>` Create a network
`docker network connect <NETWORK_ID> <CONTAINER_NAME>` Connect a container to a network
`docker network disconnect <NETWORK_ID> <CONTAINER_NAME>` Disconnect a container to a network
`docker network rm <NETWORK_ID>`




## Dockerfile

- Use an Existing Docker Image as a Base
- Download and Install Dependencies
- Command to be Run, when a Container Instantiated from this Image Starts

- `docker build .`, `docker build <DOCKERFILE>`


docker rm $(docker volume -q)