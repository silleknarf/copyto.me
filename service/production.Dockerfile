FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build

WORKDIR /source/CopyToMeService
COPY --from=copyto.me:latest /source/CopyToMeService ./
RUN dotnet publish -c release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 as runtime
WORKDIR /source/CopyToMeService/out
COPY --from=build /source/CopyToMeService/out ./

ENTRYPOINT ["dotnet", "CopyToMeService.dll"]