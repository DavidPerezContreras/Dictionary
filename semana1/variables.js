



// Var: Function-scoped, can be re-declared and updated, not block-scoped
function varExample() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  varExample();




  
  // Let: Block-scoped, can be updated but not re-declared within the same scope
  function letExample() {
    let y = 1;
    if (true) {
      let y = 2;  // different variable
      console.log(y);  // 2
    }
    console.log(y);  // 1
  }
  letExample();




  
  // Const: Block-scoped, cannot be updated or re-declared, must be initialized at declaration
  function constExample() {
    const z = 1;
    // z = 2;  // Error: Assignment to constant variable
    console.log(z);  // 1
  
    const obj = { name: "Alice" };
    obj.name = "Bob";  // This is allowed, the reference is constant, not the content
    console.log(obj.name);  // Bob
  }
  constExample();
  