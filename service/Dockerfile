FROM mcr.microsoft.com/dotnet/core/sdk:3.1

# Install the vs debugger
RUN apt update && \
    apt install unzip && \
    curl -sSL https://aka.ms/getvsdbgsh | /bin/sh /dev/stdin -v latest -l /vsdbg

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt install nodejs

WORKDIR /source/service
COPY service .
COPY ui ../ui
COPY npm ../npm

CMD dotnet watch --project CopyToMeService run --urls https://+:5000 --verbosity normal