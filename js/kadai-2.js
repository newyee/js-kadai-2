'use strict';
window.addEventListener('DOMContentLoaded', function(e){
  document.querySelector("#button").addEventListener('click',function(){
    if(tag_p){
      console.log('tag_p');
      tag_p.innerHTML = '';
    }
    let fizz_num = document.getElementById("fizz_num").value;
    let buzz_num = document.getElementById("buzz_num").value;
    let err_msg = '';
    let empty_err = false;
    if(fizz_num === '' || buzz_num === ''){
      err_msg = '1以上99以下の整数を入力してください'
      empty_err = true;
    }
    if(empty_err === false){
      fizz_num = Number(fizz_num);
      buzz_num = Number(buzz_num);
      if(fizz_num || buzz_num){
        if(!Number.isInteger(fizz_num) || !Number.isInteger(buzz_num) ){
          err_msg = '1以上99以下の整数を入力してください';
        }
      }else{
        err_msg = '1以上99以下の整数を入力してください';
      }
    }
    console.log('ok')
    if(err_msg){
      let tag_p = document.getElementById("tag_p");
      let display_err_msg = document.createTextNode(err_msg);
      tag_p.appendChild(display_err_msg);
    }
    if(!err_msg){
      let display_fizz_value = '';
      let display_buzz_value = '';
      let display_fizz_buzz_value = '';
      for(let i = 1; i < 100; i++){
        if(i % fizz_num === 0 && i % buzz_num === 0){
          display_fizz_buzz_value = document.createTextNode(`FizzBuzz: ${i}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_buzz_value);
        }else if(i % fizz_num === 0){
          display_fizz_value = document.createTextNode(`Fizz: ${i}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_value);
        }else if(i % buzz_num === 0){
          display_buzz_value = document.createTextNode(`Buzz: ${i}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_buzz_value);
        }
      }
    }
  })
})