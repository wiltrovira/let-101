function foo( x ) {
    let y;
  
    if (x === 1) {
      y = 2;
    }
    console.log( y );
  }
  
  foo( 1 );
  console.log( y );


  /*
  The function above declares the y variable at the top of the function, 
  thus giving it a larger scope than our first example. We can see that y is accessible anywhere 
  inside this function, but not outside of it, that last console.log(y) 
  statement will produce a ReferenceError. Before we move on to const, let’s reiterate our thesis: 
  let should completely replace var in ES6. The examples above should show you that let is more powerful, 
  while still allowing almost all of the flexibility of var. I’m not the first one to say it, 
but I’m a believer now.
    */
