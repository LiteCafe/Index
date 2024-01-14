version=$(git rev-parse --short HEAD)
echo "VERSION=$version" >> $GITHUB_ENV
echo "Latest commit version: $version"

find . -type f -name "*.html" > html_files.txt
cat html_files.txt

while IFS= read -r file; do
  sed -i "s/{{VERSION}}/$version/g" "$file"
  echo "Updated version in $file"
done < html_files.txt