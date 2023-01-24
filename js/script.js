let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg);`
        minuteArrow.style = `transform: rotate(${minutes}deg);`
        hourArrow.style = `transform: rotate(${hours}deg);`
        
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        setTimeout(() => clock(),1000)
        
}
clock()


// setTimeout() - создает нам задержку и говорит через сколько миллисекунд нам нужно что то выполнять

// Рекурсия - это когда функция вызывает саму  себя

// let i = 0;

// function rek() {
//     console.log(i);
//     i++
//     rek()
    
// }

// rek()
 


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function() {
        for(let x = 0; x < links.length;x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}


let btn = document.querySelector('.stopwatch__btn'),
    milSecBtn = document.querySelector('.stopwatch__millisec'),
    secBtn = document.querySelector('.stopwatch__seconds'),
    minBtn = document.querySelector('.stopwatch__minutes'),
    hourBtn = document.querySelector('.stopwatch__hours');

btn.addEventListener('click', function(){
    if(btn.innerHTML == 'START'){
        btn.innerHTML = 'STOP';
        timer()
    } else if(btn.innerHTML == 'STOP') {
        btn.innerHTML = 'CLEAR';
        clearTimeout(stopper)
    } else if(btn.innerHTML =='CLEAR'){
        btn.innerHTML = 'START';
        milSecBtn.innerHTML = 0;
        secBtn.innerHTML = 0;
        minBtn.innerHTML = 0;
        hourBtn.innerHTML = 0;
    }
})
let stopper;
function timer(){
    milSecBtn.innerHTML++

    stopper = setTimeout(() => timer(),100)
    if( milSecBtn.innerHTML == 10){
        secBtn.innerHTML++
        milSecBtn.innerHTML = 0
    }else if(secBtn.innerHTML == 60){
        secBtn.innerHTML = 0;
        minBtn.innerHTML++
    } else if(minBtn.innerHTML == 60){
        minBtn.innerHTML = 0;
        hourBtn.innerHTML++
    }
}

