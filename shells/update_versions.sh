echo Updating versions...

GIT_HASH=$(git rev-parse --short HEAD)

sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/index.html 2>/dev/null
sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/en/index.html 2>/dev/null
sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/bg/index.html 2>/dev/null

exit 0