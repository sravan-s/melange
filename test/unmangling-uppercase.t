Test a case where dependency has upper case module

  $ mkdir -p lib/.objs/melange app/.objs/melange
  $ mkdir -p output/lib output/app

  $ echo "let t = 1" > lib/A.ml
  $ echo "let t = A.t" > app/b.ml

Compile cmjs, pass bs-module-name with proper casing

  $ melc --bs-module-name A -bs-package-output lib/ -bs-stop-after-cmj -nopervasives lib/A.ml -o lib/.objs/melange/a.cmj

  $ melc --bs-module-name b -bs-package-output app/ -I lib/.objs/melange app/b.ml -nopervasives -bs-stop-after-cmj -o app/.objs/melange/b.cmj

Linking

  $ melc -bs-module-type commonjs -nopervasives lib/.objs/melange/a.cmj -o output/lib/A.js

  $ melc -bs-module-type commonjs -nopervasives -I lib/.objs/melange app/.objs/melange/b.cmj -o output/app/b.js

b.js produces a require to a.js, but with lower case

  $ cat output/app/b.js
  // Generated by Melange
  'use strict';
  
  var A = require("../lib/A.js");
  
  var t = A.t;
  
  exports.t = t;
  /* No side effect */

But the file is upper case

  $ tree --noreport output/lib
  output/lib
  `-- A.js
