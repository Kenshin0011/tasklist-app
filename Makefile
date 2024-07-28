##############################
# Variables
##############################
# Docker Exec
DC := docker compose
DC_EXEC := $(DC) exec --user root

##############################
# Commands
##############################
.PHONY: app-*
pod:
	cd frontend/ios/App && pod install

app-up:
	cd frontend && ionic cap copy && ionic cap open ios

.PHONY: docker-*
#: Dockerイメージを構築する
build:
	@$(DC) build --no-cache
#: Dockerのセットアップを実行する
docker-setup:
	@make build
	@make up
	@make app-setup
#: Dockerコンテナを起動する
up:
	@$(DC) up -d
down:
	@$(DC) down
