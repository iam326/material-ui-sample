#!/bin/bash

set -euo pipefail

readonly TEMPLATE_FILE="$(pwd)/template.yaml"
readonly STACK_NAME="material-ui-sample-stack"
readonly BUCKET_NAME="material-ui-sample-bucket"

aws cloudformation validate-template \
  --template-body "file://${TEMPLATE_FILE}"

aws cloudformation deploy \
  --stack-name ${STACK_NAME} \
  --template-file ${TEMPLATE_FILE} \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    WebHostingBucketName=${BUCKET_NAME}
