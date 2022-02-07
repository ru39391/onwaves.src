/* countdown */
const local = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

let counterDate;
let counterDateArr = [];

document.querySelectorAll('.counter').forEach(counter => {
  let counterHidden = counter.querySelector('.counter__hidden');
  let counterWrapper = counter.querySelector('.counter__wrapper');
  counterDate = counter.querySelector('.counter__date').textContent;
  counterDateArr = counterDate.split(',');
  $(counterHidden).countdown({
      timestamp: new Date(Number(counterDateArr[0]),Number(counterDateArr[1]),Number(counterDateArr[2]),Number(counterDateArr[3]),Number(counterDateArr[4])),
      //timestamp: new Date(2021, 5, 3, 12, 34),
      callback: (days, hours, minutes, seconds) => {
          let message = '';
          let daysText, hoursText, minutesText, secondsText = '';
  
          daysText = local(days, ['день', 'дня', 'дней']);
          hoursText = local(hours, ['час', 'часа', 'часов']);
          minutesText = local(minutes, ['минута', 'минуты', 'минут']);
          secondsText = local(seconds, ['секунда', 'секунды', 'секунд']);

          if(days != 0){
              message += `<span class="counter__item"><span class="text-lg">${days}</span> ${daysText}</span>`;
          }            
          message += `<span class="counter__item"><span class="text-lg">${hours}</span> ${hoursText}</span>`;
          message += `<span class="counter__item"><span class="text-lg">${minutes}</span> ${minutesText}</span>`;
          message += `<span class="counter__item"><span class="text-lg">${seconds}</span> ${secondsText}</span>`;   
  
          counterWrapper.innerHTML = message;
      }
  });
});