build:
	cd appApp && $(MAKE) build
	cd webApp && $(MAKE) build

run:
	docker compose up

stop:
	docker compose down