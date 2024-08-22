let h = document.querySelectorAll('.h')
let m = document.querySelectorAll('.m')
let s = document.querySelectorAll('.s')
let am = document.querySelectorAll('.am span')

let days = document.querySelectorAll('.days span')
let month = document.querySelectorAll('.month span')

let date = document.querySelector('.date')

function runclock() 
{
    var time = new Date();
    
    days[time.getDay()].classList.add('active') 

    month[time.getMonth()].classList.add('active')

    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    // 12hrs format//

    if(hrs>12)
    {
        hrs = hrs - 12;
        am[1].classList.add('active')
    }
    else
    {
        if(hrs==0)
        {
            hrs = 12;
        }
        am[0].classList.add('active')
  }
  hrs= hrs<10?'0' + hrs : hrs
  min= min<10?'0' + min : min
  sec= sec<10?'0' + sec : sec

  hrs = hrs.toString();
  min = min.toString();
  sec = sec.toString();

  h[0].innerHTML = hrs[0];
  h[1].innerHTML = hrs[1];
  m[0].innerHTML = min[0];
  m[1].innerHTML = min[1];
  s[0].innerHTML = sec[0];
  s[1].innerHTML = sec[1];


}
setInterval(runclock,1000)