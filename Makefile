
install:
	@cd angular &&\
	npm i

build:
	@cd angular &&\
	npm run build

start:
	@cd angular &&\
	ng serve

test:
	@cd angular &&\
	npm run test --watch=false

test/ci:
	@cd angular &&\
	npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI

e2e:
	@cd angular &&\
	npm run e2e

e2e/ci:
	@cd angular &&\
	npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js

deploy/angular: build
	@cd firebase &&\
	firebase deploy --only hosting

deploy/angular/ci:
	@which firebase || sudo npm install -g firebase-tools
	@cd firebase &&\
	firebase deploy --only hosting --token $(FIREBASE_TOKEN)

deploy/functions:
	@cd firebase &&\
	firebase deploy --only functions

deploy/rules:
	@cd firebase &&\
	firebase deploy --only rules

deploy:
	@make deploy/angular
	@make deploy/functions
	@make deploy/rules
