ENV_NAME    ?= development

dotenv-encrypt:
	sops -e --input-type dotenv .env.development > .env.development.enc
	sops -e --input-type dotenv .env.production > .env.production.enc

## dotenv-decrypt: encrypts your .env files using sops
dotenv-decrypt:
	sops -d --input-type json --output-type dotenv .env.development.enc > .env.development
	sops -d --input-type json --output-type dotenv .env.production.enc > .env.production

codegen:
	source ".env.${ENV_NAME}" && \
		yarn generate