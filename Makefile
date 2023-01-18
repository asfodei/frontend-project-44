install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .
getting:
		git add .
		git commit -m .
		git push
