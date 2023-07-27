// Bài tập 1
// function sum()
// {
//     var a = parseInt(prompt("Nhập số a"));
//     var b = parseInt(prompt("Nhập số b"));
//     var sum = a + b;
//   document.write("Tổng hai số "+ a + " + " + b + " = " + sum);
// }
// sum();

// Bài tập 2
// function myFunction() {
//     let str = arguments[0];
    
//     alert("chuỗi là: " + str);
    
//     alert("độ dài chuỗi là: " + str.length);


// }

// myFunction("dagfadvsdghgfadg"); 

// Bài tập 3

// function myFunction(){
// let str = arguments[0] ;
// let res = str.toUpperCase();
// alert(res);
// }
// myFunction("svgdvdsg");

// Bài tập 4

// function reverseString(str) {
//   var newString= "";
//   for (var i = str.length - 1; i >= 0; i--);{
//     newString+=str[i];
    
//   }

//   return newString;
  
// }  
// reverseString('hello')  ;

// Bài tập 5

// const numArray = [9, 5, 3, 2, 8, 6, 1]

// numArray.sort((a, b) => a - b);
// console.log(numArray);

// Bài tập 6
function snt(n)
{
    
    var flag = true;
 
    
    if (n < 2){
        flag = false;
    }
    else{
      
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }
}
