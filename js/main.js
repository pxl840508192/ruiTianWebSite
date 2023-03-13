const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 2} 00:00:00`);

// Set background year
year.innerText = currentYear + 2;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;


}


// Run every second
setInterval(updateCountdown, 1000);


$(document).ready(function (){
  axios.defaults.baseURL = 'http://192.168.8.107:8080';
  axios({
    url:'/pet/getPets',
    method:'post',
    data : {
      userId:7
    },
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log("请求结果:"+res.status)
    if(res.status==200){
      console.log("请求成功:"+JSON.stringify(res.data))
    }else{
      console.log("请求失败:"+JSON.stringify(res.data))
    }
  }).catch(function(error){
    console.log("请求失败:"+error)
  })
});
