(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = SECOND*60;
  const HOUR = MINUTE*60;
  const DAY = HOUR*24;

  function setElement(id,text){
    const setElem = document.getElementById(id);
    setElem.innerText = text;
  }
  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31,2020 23:59:59').getTime();
    const unixTimeLeft = newYear-now;
    
    // const daysElement = document.getElementById('days');
    // daysElement.innerText = Math.floor(unixTimeLeft/DAY);
    setElement('days',Math.floor(unixTimeLeft/DAY));
    setElement('hours',Math.floor(unixTimeLeft%DAY/HOUR));
    setElement('minutes',Math.floor(unixTimeLeft%HOUR/MINUTE));
    setElement('seconds',Math.floor(unixTimeLeft%MINUTE/SECOND));

  
  }
  function run(){
    countDown();
    setInterval(countDown,SECOND);
  }
  run();
})();
