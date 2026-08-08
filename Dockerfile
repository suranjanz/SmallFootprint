# FORCE REBUILD: 2026-08-08 13:10:23
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY . .
EXPOSE 10000
ENV ASPNETCORE_URLS=http://0.0.0.0:10000
ENV DOTNET_USE_POLLING_FILE_WATCHER=false
ENTRYPOINT ["dotnet", "SmallFootprintAPI.dll"]



















