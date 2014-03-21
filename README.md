Hey Ingz, getur verið að þú hafir verið að reyna að installa sama pakka aftur?
Ég fékk allavega sömu villu þannig. ANywho, held þetta virki, ég testa á hinni tölvunni minni á morgun.

Þarft líklegast að gera npm install til þess að fá karma-jasmine pakkann

**`grunt watch`** (í staðin fyrir **karma start**)

Grunt watch keyrir fyrir þig **Karma**, Jshint, Uglify og Concat í hvert einasta skipti sem thu gerir breytingar. Eg stillti á PhantomJS browser thví tha opnast enginn gluggi fyrir Karma í hvert skipti.


`npm install` til að installa þeim dependencies sem eru í package.json (node_modules/)

`bower install` til að installa þeim dependencies sem eru í bower.json (bower_components/)


===


1) npm install
2) bower install *
 - angular
 - angular-route
 - angular-mocks
 - jquery
 - bootstrap

to run tests: karma start 
to run client: run.bat / python -m SimpleHTTPServer 8080
