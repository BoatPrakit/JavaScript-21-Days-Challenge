(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript  
  // function simulateAPI(test,timeout){
  //   setTimeout(() => console.log(test),timeout);
  // }
  // simulateAPI("A",1000);
  // simulateAPI("B",500);
  // simulateAPI("C",100);

  // 2. Callback
  // function simulateAPI(txt,timeout,callback){
  //   setTimeout(() => {
  //     console.log(txt)
  //     if(callback)
  //     callback();
  //   },timeout);
  // }
  // simulateAPI("A",1000,()=>{
  //   simulateAPI("B",500,()=>{
  //     simulateAPI("C",100);
  //   })
  // })

  // 3. Promise
  // function simulateAPI(txt,timeout){
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(txt === 'B') return reject('B abort');
  //       console.log(txt);
  //       resolve();
  //     },timeout);
  //   })
  // }
  // simulateAPI("A",1000)
  // .then(()=>{
  //   return simulateAPI("B",500);
  // })
  // .then(()=>{
  //   return simulateAPI("C",100);
  // }).catch((error)=>{
  //   console.error(error);
  // })
  
  // 4. Async/Await
  function simulateAPI(txt,timeout){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(txt === 'B') return reject('B abort');
        console.log(txt);
        resolve();
      },timeout);
    })
  }
  async function run(){
    try{
      await simulateAPI("A",1000);
    await simulateAPI("B",500);
    await simulateAPI("C",100);
    }catch(error){
      console.error(error);
    }
  }
  run();
})();
