
echo Deleting the old build...
rm -rf i18n

echo Starting the new build...
static-i18n --fix-paths false --locales-path www/locales/ -l -i bg -i en www/default

echo Copying static files...
cp -r www/static/ i18n/

echo Copmiling default...
cp i18n/en/* i18n/
sed -i 's/..\/static\\/static\//g' i18n/index.html

echo Updating versions...

GIT_HASH=$(git rev-parse --short HEAD)

sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/index.html 2>/dev/null
sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/en/index.html 2>/dev/null
sed -i '' -e "s/v=1/v=${GIT_HASH}/g" i18n/bg/index.html 2>/dev/null

echo Done.

exit 0