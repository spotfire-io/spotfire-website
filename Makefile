ENV_NAME    ?= development

dotenv-encrypt:
	sops -e --input-type dotenv .env.development > .env.development.enc
	sops -e --input-type dotenv .env.production > .env.production.enc

## dotenv-decrypt: encrypts your .env files using sops
dotenv-decrypt:
	sops -d --input-type json --output-type dotenv .env.development.enc > .env.development
	sops -d --input-type json --output-type dotenv .env.production.enc > .env.production

download-schema:
	source ".env.${ENV_NAME}" &&\
	yarn apollo client:download-schema \
		--endpoint="$$GATSBY_GRAPHQL_API_ENDPOINT" \
		src/schema/${ENV_NAME}.json

codegen: download-schema
	source ".env.${ENV_NAME}" &&\
	yarn apollo client:codegen \
		--localSchemaFile="src/schema/${ENV_NAME}.json" \
		--includes="src/queries/*.ts" \
		--target typescript \
		types