angular/install:
	@cd angular && \
	npm i

angular/build:
	@cd angular && \
	npm run build

angular/build/prod:
	@cd angular && \
	npm run build-prod

firebase/install:
	@cd firebase/functions && \
	npm i

firebase/build:
	@cd firebase/functions && \
	npm run build

firebase/deploy/hosting:
	@cd firebase && \
	firebase use staging && \
	firebase deploy --only hosting

firebase/deploy/hosting/prod:
	@cd firebase && \
	firebase use default && \
	firebase deploy --only hosting

firebase/deploy/functions:
	@cd firebase && \
	firebase use staging && \
	firebase deploy --only functions

firebase/deploy/functions/prod:
	@cd firebase && \
	firebase use default && \
	firebase deploy --only functions

firebase/deploy/firestore:
	@cd firebase && \
	firebase use staging && \
	firebase deploy --only firestore:rules

firebase/deploy/firestore/prod:
	@cd firebase && \
	firebase use default && \
	firebase deploy --only firestore:rules

ci/test:
	@cd angular && \
	npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI

ci/e2e:
	@cd angular && \
	npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js

ci/deploy:
	@which firebase || sudo npm install -g firebase-tools
	@cd firebase && \
	firebase use staging && \
	firebase deploy --only hosting,functions --token $(FIREBASE_TOKEN_TEST)

ci/deploy/prod:
	@which firebase || sudo npm install -g firebase-tools
	@cd firebase && \
	firebase use default && \
	firebase deploy --only hosting --token $(FIREBASE_TOKEN)
