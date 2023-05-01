.PHONY: help clean install build dev

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  clean       to clean repository"
	@echo "  install     to install npm packages"
	@echo "  build       to install npm packages and build"
	@echo "  dev         to run dev server"

clean:
	rm -rf `find . -type d -name node_modules`
	rm -rf `find . -type d -name .svelte-kit`
	rm -rf `find . -type d -name build`
	rm -rf `find . -type d -name coverage`
	rm -rf `find . -type d -name .turbo`
	rm -rf `find . -type d -name dist`
	rm -rf `find . -type d -name package`

install:
	make clean
	pnpm i

build:
	make install
	pnpm build

dev:
	pnpm --filter="./sites/geofront.io" dev
