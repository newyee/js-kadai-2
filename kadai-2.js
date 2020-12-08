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
    // let fizz_num_err_msg = '';
    // let buzz_num_err_msg = '';
    let err_msg = '';
    let empty_err = false;
    if(fizz_num === '' || buzz_num === ''){
      err_msg = '1以上99以下の整数を入力してください'
      empty_err = true;
    }
    if(empty_err === false){
      fizz_num = Number(fizz_num);
      buzz_num = Number(buzz_num);
      // console.log(buzz_num)
      // console.log('ok')
      if(fizz_num || buzz_num){
        if(!Number.isInteger(fizz_num) || !Number.isInteger(buzz_num) ){
          err_msg = '1以上99以下の整数を入力してください';
        }
      }else{
        err_msg = '1以上99以下の整数を入力してください';
      }
      // console.log(buzz_num_err_msg);
    }
    console.log('ok')
    if(err_msg){
      let tag_p = document.getElementById("tag_p");
      console.log('ng')
      let display_err_msg = document.createTextNode(err_msg);
      tag_p.appendChild(display_err_msg);
    }
    if(!err_msg){
      // console.log('ok'err_msg
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
        // fizz_num = fizz_num * i;
        // buzz_num = buzz_num * i;

        // max_value = Math.max(fizz_num,buzz_num);
        // if(max_value >= 100){
        //   break;
        // }
        // console.log('fizz_num',fizz_num)
        // console.log(buzz_num)
        if(i % fizz_num == 0 && i % buzz_num == 0){
          display_fizz_buzz_value = document.createTextNode(`FizzBuzz: ${i}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_buzz_value);
        }else if(i % fizz_num == 0){
          display_fizz_value = document.createTextNode(`Fizz: ${fizz_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_fizz_value);
        }else if(i % buzz_num == 0){
          display_buzz_value = document.createTextNode(`Buzz: ${buzz_num}`);
          tag_p.appendChild(document.createElement("BR"));
          tag_p.appendChild(display_buzz_value);
        }
        // if(i == 1){
        //   console.log('i == 1')
        //   let current_fizz_value = document.createTextNode(`Fizz: ${fizz_num}`);
        //   let current_buzz_value = document.createTextNode(`Buzz: ${buzz_num}`);
        //   tag_p.appendChild(document.createElement("BR"));
        //   tag_p.appendChild(current_fizz_value);
        //   tag_p.appendChild(document.createElement("BR"));
        //   tag_p.appendChild(current_buzz_value);
        //   continue;
        // }
        // if(buzz_num > fizz_num){
        //   // console.log('buzz_num > fizz_num')
        //   first_num = fizz_num;
        //   secound_num = buzz_num;
        //   if(secound_num % base_fizz_num == 0){
        //     display_fizz_value = document.createTextNode(`Fizz: ${first_num}`);
        //     display_fizz_buzz_value = document.createTextNode(`FizzBuzz: ${secound_num}`);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_fizz_value);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_fizz_buzz_value);
        //   }else{
        //     display_buzz_value = document.createTextNode(`Buzz: ${first_num}`);
        //     display_fizz_value = document.createTextNode(`Fizz: ${secound_num}`);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_buzz_value);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_fizz_value);
        //   }
        // }else{
        //   console.log('buzz_num <= fizz_num')
        //   first_num = buzz_num;
        //   secound_num = fizz_num;
        //   if(secound_num % base_buz_num == 0){
        //     display_buzz_value = document.createTextNode(`Buzz: ${first_num}`);
        //     display_fizz_buzz_value =document.createTextNode(`FizzBuzz: ${secound_num}`)
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_buzz_value);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_fizz_buzz_value);
        //   }else{
        //     display_fizz_value = document.createTextNode(`Fizz: ${first_num}`);
        //     display_buzz_value = document.createTextNode(`Buzz: ${secound_num}`);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_fizz_value);
        //     tag_p.appendChild(document.createElement("BR"));
        //     tag_p.appendChild(display_buzz_value);
        //   }
        // }
        // fizz_num = base_fizz_num;
        // buzz_num = base_buzz_num;
        // console.log('max_value',max_value);
      }
    }
  })
})