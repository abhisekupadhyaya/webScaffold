build:
	cd appSoft && $(MAKE) build
	cd webSoft && $(MAKE) build

run:
	docker compose up

stop:
	docker compose down