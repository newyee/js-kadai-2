'use strict';
document.getElementById("button").onclick = function(){
  let fizz_num = document.getElementById("fizz_num").value;
  
  let buzz_num = document.getElementById("buzz_num").value;
  let fizz_num_err_msg = '';
  let buzz_num_err_msg = '';
  let empty_err = false;
  if(fizz_num === ''){
    fizz_num_err_msg = 'fizz_numの値を入力して下さい';
    empty_err = true;
  }
  if(buzz_num === ''){
    buzz_num_err_msg = 'buzz_numの値を入力して下さい';
    empty_err = true;
  }
  if(empty_err === false){
    fizz_num = Number(fizz_num);
    buzz_num = Number(buzz_num);
    // console.log(buzz_num)
    // console.log('ok')
    if(fizz_num){
      if(!Number.isInteger(fizz_num)){
        fizz_num_err_msg = 'FizzNumに整数を入力して下さい';
      }
    }else{
      fizz_num_err_msg = 'FizzNumに整数を入力して下さい';
    }
    if(buzz_num){
      console.log(buzz_num);
      if(!Number.isInteger(buzz_num)){
        buzz_num_err_msg = 'BuzzNumに整数を入力して下さい';
        // console.log(buzz_num_err_msg);
      }
    }else{
      buzz_num_err_msg = 'BuzzNumに整数を入力して下さい';
      // console.log(buzz_num_err_msg);
    }
    // console.log(buzz_num_err_msg);
  }
  console.log(buzz_num_err_msg);
  console.log(fizz_num_err_msg);
  if(!buzz_num_err_msg && !fizz_num_err_msg){
    // console.log('ok')
    let tag_p = document.getElementById("tag_p");
    let current_fizz_value = document.createTextNode(`Fizz: ${fizz_num}`);
    let current_buzz_value = document.createTextNode(`Buzz: ${buzz_num}`);
    tag_p.appendChild(document.createElement("BR"));
    tag_p.appendChild(current_fizz_value);
    tag_p.appendChild(document.createElement("BR"));
    tag_p.appendChild(current_buzz_value);

    var max_value = 0;
    var first_num = 0;
    var secound_num = 0;
    var fizz_buzz = 0
    const base_fizz_num = fizz_num;
    const base_buzz_num = buzz_num;
    let display_fizz_value = '';
    let display_buzz_value = '';
    let display_fizz_buzz_value = '';
    for(var i = 2; max_value < 100; i++){
      fizz_num = fizz_num * i;
      buzz_num = buzz_num * i;
      // console.log(fizz_num)
      if(buzz_num > fizz_num){
        // console.log('buzz_num > fizz_num')
        first_num = fizz_num;
        secound_num = buzz_num;
        if(secound_num % base_fizz_num == 0){
          display_fizz_value = document.createTextNode(`Fizz: ${first_num}`);
          display_fizz_buzz_value = document.createTextNode(`FizzBuzz: ${secound_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_value);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_buzz_value);
        }else{
          display_buzz_value = document.createTextNode(`Buzz: ${first_num}`);
          display_fizz_value = document.createTextNode(`Fizz: ${secound_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_buzz_value);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_value);
        }
      }else{
        // console.log('buzz_num <= fizz_num')
        first_num = buzz_num;
        secound_num = fizz_num;
        if(secound_num % base_buz_num == 0){
          display_buzz_value = document.createTextNode(`Buzz: ${first_num}`);
          display_fizz_buzz_value =document.createTextNode(`FizzBuzz: ${secound_num}`)
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_buzz_value);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_buzz_value);
        }else{
          display_fizz_value = document.createTextNode(`Fizz: ${first_num}`);
          display_buzz_value = document.createTextNode(`Buzz: ${secound_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_value);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_buzz_value);
        }
      }
      max_value = Math.max(first_num,secound_num);
      // console.log('max_value',max_value);
    }
  }

}