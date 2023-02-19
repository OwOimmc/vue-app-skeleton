# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim

RUN apt update && apt upgrade -y && \
    apt install -y git && \
    apt clean

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Install pip requirements
COPY api/requirements.txt .
RUN python -m pip install -r requirements.txt

COPY api/ /app/api/

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" scrapper && chown -R scrapper /app
USER scrapper


WORKDIR /app/api

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# CMD /bootstrap.sh
CMD [ "python", "api.py"]
