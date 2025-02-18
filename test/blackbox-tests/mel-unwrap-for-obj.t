Test `@mel.unwrap` in `@mel.obj`

  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > external func :
  >   param:string ->
  >   polyParam:([ \`Str of string | \`Int of int ][@mel.unwrap]) ->
  >   unit -> _ = ""
  > [@@mel.obj]
  > external funcOpt :
  >   param:string ->
  >   ?polyParam:([ \`Str of string | \`Int of int ][@mel.unwrap]) ->
  >   unit -> _ = ""
  > [@@mel.obj]
  > let x = func ~param:"x" ~polyParam:(\`Str "hi") ()
  > let y = funcOpt ~param:"x" ~polyParam:(\`Str "hello") ()
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  let x = {
    param: "x",
    polyParam: "hi"
  };
  
  let y = {
    param: "x",
    polyParam: "hello"
  };
  
  exports.x = x;
  exports.y = y;
  /* No side effect */
