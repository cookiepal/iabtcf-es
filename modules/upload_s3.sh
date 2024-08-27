#!/bin/bash
read -p "Enter Bucket Name: " BUCKET_NAME
read -p "Enter Distribution Id: " DISTRIBUTION_ID
read -p "Enter Profile Name: " PROFILE_NAME

yarn build

modules=("cmpapi" "core" "stub")

mkdir -p lib

for module in "${modules[@]}"; do
  mkdir -p "lib/$module"
done

for module in "${modules[@]}"; do
  echo "Processing module: $module"

  cd "$module" || exit

  npx rollup -c

  cd ..

  cp $module/lib/*.js lib/"$module"/index.min.js
done

aws s3 sync lib/ s3://${BUCKET_NAME}/lib/ --profile ${PROFILE_NAME} --region "us-east-1" 

aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths "/lib/*" --profile ${PROFILE_NAME} --region "us-east-1"

rm -rf lib
