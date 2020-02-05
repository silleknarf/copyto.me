FROM mcr.microsoft.com/dotnet/core/sdk:3.1

# Install the vs debugger
RUN apt update && \
    apt install unzip && \
    curl -sSL https://aka.ms/getvsdbgsh | /bin/sh /dev/stdin -v latest -l /vsdbg

WORKDIR /source
COPY . .
CMD dotnet run --urls https://0.0.0.0:5000