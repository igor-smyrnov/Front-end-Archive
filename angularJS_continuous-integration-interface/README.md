# Continuous integration interface #

![Preview](preview.jpg?raw=true "Preview")

### Realizowane funkcje ###

* Pobieranie danych z API Travis Ci i GitHub
* Wyshukiwarka/filter
* Sortowanie według pola
* Paginacja
* Routing (404, według paginacji, według id)

### Wykorzystane moduły npm/bower ###

* angular
* angular-ui-routing - routing
* angular-utils-pagination - paginacja
* bootstrap - HTML/CSS framework
* express - framework dla node.js, server
* gulp, gulp-inject, gulp-jasmine - dla automatycznego wstrzykiwania
* jquery - dla poprawnego działania bootstrap
* bower - instalator komponentów
* karma, karma-chrome-launcher, karma-jasmine, jasmine-core, angular-mocks - dla testów

### Oprogramowanie ###

* WebStorm
* Postman

### Uruchamianie projektu ###

* `npm start` - zainstaluje wszystkie komponenty, zrobi wstrzykiwanie w index.html i uruchomi server
* `npm test` - zainstaluje wszystkie komponenty, zrobi wstrzykiwanie w index.html i uruchomi testy
