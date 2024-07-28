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
#: アプリのセットアップを実行する
app-setup:
	@make app-sync
#: アプリをネイティブプロジェクトに同期する
app-sync:
	@$(DC_EXEC_FRONT_NODE) sh -c "yes no | yarn cap sync"

app-copy:
	npx cap copy ios

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
