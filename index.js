function foo() {
    console.log( x );
    console.log( y );
  
    var x = 1;
    if (x === 1) {
      let y = 2;
    }
    console.log( y );
  }
  
  foo();
  console.log( x );

  /*
  In the example above we create a new function (and var scope) with foo and then call the function. 
  As expected, the last console.log() statement will produce a ReferenceError because x 
  is only defined (scoped) inside the foo() function. The first console statement will execute 
  just fine due to variable hoisting. In this case, x will evaluate to undefined. The second console 
  statement, however, is more interesting. In fact, both of the log(y) calls will fail because the let 
  keyword allows much tighter scoping than var. The y variable only exists inside of that if block, 
  and no where else! Dave Methvin calls that area before the let declaration the “Temporal Dead Zone.”
  
  */
