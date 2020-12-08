'use strict';
window.addEventListener('DOMContentLoaded', function(e){
  document.querySelector("#button").addEventListener('click',function(){
    if(tag_p){
      console.log('tag_p');
      tag_p.innerHTML = '';
      // tag_p.removeChild(tag_p.firstChild);
    }
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
    console.log('ok')
    if(fizz_num_err_msg || buzz_num_err_msg){
      let tag_p = document.getElementById("tag_p");
      console.log('ng')
      let display_fizz_err = document.createTextNode(fizz_num_err_msg);
      let display_buzz_err = document.createTextNode(buzz_num_err_msg);
      tag_p.appendChild(display_fizz_err);
      tag_p.appendChild(document.createElement("BR"));
      tag_p.appendChild(display_buzz_err);
    }
    if(!buzz_num_err_msg && !fizz_num_err_msg){
      // console.log('ok')
      // tag_p = document.getElementById("tag_p");
      let max_value = 0;
      let first_num = 0;
      let secound_num = 0;
      // let fizz_buzz = 0
      const base_fizz_num = fizz_num;
      const base_buzz_num = buzz_num;
      let display_fizz_value = '';
      let display_buzz_value = '';
      let display_fizz_buzz_value = '';
      for(let i = 1; i < 100; i++){
        fizz_num = fizz_num * i;
        buzz_num = buzz_num * i;
        max_value = Math.max(fizz_num,buzz_num);
        if(max_value >= 100){
          break;
        }
        console.log('fizz_num',fizz_num)
        console.log(buzz_num)
        if(i == 1){
          console.log('i == 1')
          let current_fizz_value = document.createTextNode(`Fizz: ${fizz_num}`);
          let current_buzz_value = document.createTextNode(`Buzz: ${buzz_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(current_fizz_value);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(current_buzz_value);
          continue;
        }
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
          console.log('buzz_num <= fizz_num')
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
        fizz_num = base_fizz_num;
        buzz_num = base_buzz_num;
        // console.log('max_value',max_value);
      }
    }
  })
})