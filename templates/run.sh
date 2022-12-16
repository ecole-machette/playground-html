echo "TECHIO> redirect-streams 'Sortie brut'"
php $1



php $1 > output.html
echo "TECHIO> open -s /project/target/ output.html"