#!/bin/bash

set -euo pipefail

yarn build

aws s3 cp ./build "s3://material-ui-sample-bucket/" --recursive
