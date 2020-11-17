C5_BIN = concrete/bin/concrete5.php

PHP                     = php
NPM                     = npm
DIR_PACKAGES            = "packages"
MAKE                    = make
SM_CLI			        = server-manager-cli
MAIN_PAGE_LAYOUT        = home
DEFAULT_THEME			= base

-include packages/*/Makefile

install:
	make pre-check
	make composer-install
	make import-database
	make install-default-packages
	make require-packages packages="$(packages)"
	make override-theme theme=$(DEFAULT_THEME)
	$(PHP) $(C5_BIN) system:page:set-layout 1 $(MAIN_PAGE_LAYOUT) $(MAIN_PAGE_LAYOUT) 1
	$(NPM) i
	$(NPM) run dev
	$(PHP) $(C5_BIN) c5:clear-cache
	make generate-orm-dependencies
	cat .htaccess.dist  > .htaccess
	make cleanup

install-default-packages:
	make install-package package=twig
	make install-package package=symfony_forms
	make install-package package=base
	make install-package package=ck_editor4
	make install-package package=gdpr
	make install-package package=divided_content
	make install-package package=accordion
	make install-package package=featured_content
	make install-package package=navigation
	make install-package package=hero
	make install-package package=breadcrumb
	make install-package package=image_gallery
	make install-package package=share_this_page
	make install-package package=service_card
	make install-package package=file_list
	make install-package package=google_map
	make install-package package=soundcloud
	make install-package package=form
	make install-package package=afixia_seo_redirects
	make install-package package=modal_manager
	make install-package package=timeline
	make install-package package=opening_hours
	make install-package package=text_slider
	make install-package package=team_member_list
	make install-package package=testimonial
	make install-package package=material_dashboard
	make install-package package=animations

update:
	make build-update

asset-rebuild:
	$(NPM) run dev

arfc:
	$(NPM) run dev -- --package="base" --theme="base"

hmr-core:
	$(NPM) run hmr -- --package="base" --theme="base"

build-update:
	make composer-install
	make generate-orm-dependencies
	$(NPM) i
	$(NPM) run dev

pre-check:
	@ if [ ! -f .env ]; then echo "Error! .env was not found. Exiting..."; exit 1; fi
	@ if [ ! -d .install ]; then echo "Error! 'install' command cannot be run on already installed applications"; exit 1; fi

composer-install:
	composer install --prefer-dist --profile --no-ansi --no-scripts --no-interaction --ignore-platform-reqs

import-database:
	@echo Importing database, please wait...
	@cd .install && $(PHP) ../vendor/bin/doctrine dbal:import -q init.sql
	@echo Successful database import

generate-orm-dependencies:
	@$(PHP) concrete/bin/concrete5.php orm:generate:proxies
	@$(PHP) concrete/bin/concrete5.php system:entity:update

require-packages:
	$(PHP) $(C5_BIN) c5:clear-cache
	@for i in $(subst  , ,${packages}); \
	do \
		$(MAKE) require-package package=$$i ;\
	done

install-package:
	@if [ -d packages/$(package) ]; then $(PHP) $(C5_BIN) c5:package-install $(package); else echo ERROR: Package: \"$(package)\" 'not found'; fi

require-package:
	composer require concrete5/$(package); \
	$(PHP) $(C5_BIN) c5:package-install $(package);

override-theme:
	$(PHP) $(C5_BIN) system:theme:override $(theme)

cleanup:
	rm -rf .install

cc:
	$(PHP) concrete/bin/concrete5.php c5:clear-cache
	$(PHP) concrete/bin/concrete5.php orm:clear-cache:metadata
	$(PHP) concrete/bin/concrete5.php orm:clear-cache:result
	$(PHP) concrete/bin/concrete5.php orm:clear-cache:query

run:
	$(PHP) -S 127.0.0.1:8080


server-manager-deploy:
	$(SM_CLI) deploy:asset-dir application/css/dist --inWebRoot
	$(SM_CLI) deploy:asset-dir application/js/dist --inWebRoot
	$(SM_CLI) deploy:exec 'git pull' --inWebRoot
	$(SM_CLI) deploy:exec 'make composer-install' --inWebRoot
	$(SM_CLI) deploy:exec 'make cc' --inWebRoot
	$(SM_CLI) deploy:exec 'make generate-orm-dependencies' --inWebRoot

server-manager-install:
	make pre-check
	make composer-install
	make import-database
	make install-default-packages
	make require-packages packages="$(packages)"
	make override-theme theme=$(DEFAULT_THEME)
	$(PHP) $(C5_BIN) system:page:set-layout 1 $(MAIN_PAGE_LAYOUT) $(MAIN_PAGE_LAYOUT) 1
	$(SM_CLI) install:optionalPackages
	cat .htaccess.dist  > .htaccess
	$(SM_CLI) deploy:asset-file .htaccess --inWebRoot
	$(SM_CLI) deploy:asset-dir application/files --inWebRoot
	make cleanup

