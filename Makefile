setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

update-deps:
	npx ncu -u

test-steps:
	node --test --test-name-pattern task1
	node --test --test-name-pattern task2
	node --test --test-name-pattern task3
	node --test --test-name-pattern task4
	node --test --test-name-pattern task5
