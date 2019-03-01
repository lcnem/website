
install:
	@cd angular &&\
	npm i

build:
	@cd angular &&\
	ng build --prod

start:
	@cd angular &&\
	ng serve

test:
	@cd angular &&\
	ng test --watch=false

e2e:
	@cd angular &&\
	ng e2e

deploy/angular: build
	@cd firebase &&\
	firebase deploy --only hosting

deploy/functions:
	@cd firebase &&\
	firebase deploy --only functions

deploy/rules:
	@cd firebase &&\
	firebase deploy --only rules
