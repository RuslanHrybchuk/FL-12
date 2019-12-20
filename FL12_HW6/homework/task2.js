var a = prompt("Введіть перше число");
        if (a != null && a !== "abc" && typeof(a) !== undefined) {
          var b = prompt("Введіть друге число");
          if (a != null && a !== "abc" && typeof(a) !== undefined) {
              var c = prompt("Введіть третє число");
              if (a != null && a !== "abc" && typeof(a) !== undefined) {            
        
                  if (a == 0 || b == 0 || c == 0) {
                      alert("A triangle must have 3 sides with a positive definite length ");
                      console.log("A triangle must have 3 sides with a positive definite length ");
                  } 
                  else if (a + b - c > 0 && a + c - b > 0 && b + c - a > 0) {

                    if (a == b && a == c && b == c){
                        alert("Equilateral triangle");
                        console.log("Equilateral triangle");
                    }  
                    else if (a == b || a == c || b == c){
                        alert("Isosceles triangle");
                        console.log("Isosceles triangle");
                      } 
                      else{
                        alert("Scalene triangle");
                        console.log("Scalene triangle");
                      }

                  } else {
                    alert("Triangle doesn’t exist");
                    console.log("Triangle doesn’t exist");
                  }
              }
              else alert("input values should be ONLY numbers");
          }
          else alert("input values should be ONLY numbers");
        }
        else alert("input values should be ONLY numbers");