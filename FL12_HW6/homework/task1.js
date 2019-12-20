var a = prompt("Введіть перше число");
          if (a != null && a !== "abc") {
            var b = prompt("Введіть друге число");
            if (b != null && a !== "abc") {
                var c = prompt("Введіть третє число");
                if (c != null && a !== "abc") {
                    var disc = (b*b - 4*a*c);
                    if (disc < 0) {
                        alert("Дискримінант < 0");
                        console.log("no solution ");
                    }
                    else if (disc == 0) {
                        var x = (-b)/(2*a);
                        alert("Х = " + x);
                        console.log("x = " + x);
                    }
                    else if (disc > 0) {
                        var sqrtD = Math.sqrt(disc);
                        var x1 = (-b + sqrtD);
                        var x2 = (-b - sqrtD);
                        alert("X1 = " + x1, "X2 = " + x2);
                        console.log("X1, X2 = " + x1 + x2);
                    }
                }
                else alert("Invalid input data");
            }
            else alert("Invalid input data");
          }
          else alert("Invalid input data");