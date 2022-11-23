let inputArrow = document.querySelectorAll('.setting-window__choice__input');
let activeWindow = document.querySelector('.setting-window__wrap');
let windowBackground = document.querySelector('.setting-window__background');
let settingBlock = document.querySelector('.setting-block');
let timerWr = document.querySelector('#timer_wr');
let minElem = document.querySelector('#min');
let secElem = document.querySelector('#sec');
let mainButton = document.querySelector('.main-button');
let space = document.querySelector('#space');
let closeWindow = document.querySelector('.setting-window__close');
let arrowButtonTop = document.querySelectorAll('.setting-window__choice__button__top');
let placeholderValue;
let arrowButtonBottom = document.querySelectorAll('.setting-window__choice__button_bottom');
let apply = document.querySelector('.Apply');
let choiceFonts;
let circleFonts = document.querySelectorAll('.setting-window__fonts__circle');
let choiceColor;
let colorCircle = document.querySelectorAll('.setting-window__color__circle');
let panelElem = document.querySelectorAll('.panel-elem');
let startTime;
let pomodoro = document.querySelector('#pomodoroBtn');
let shortBreak = document.querySelector('#short-Break');
let longBreak = document.querySelector('#long-Break');
let progress = document.querySelector('.progress');
let mainDoc = document.querySelector('.main');
let circleElem = document.querySelectorAll('circle');
let styleStrokeDasharray;
let styleStrokeDashoffset;
let Circle1Second;
let arrTime;
let e;

/* Основой объект */
let applyObj = {
    'pomodoroPlay': inputArrow[0].getAttribute("placeholder"),
    'short': inputArrow[1].getAttribute("placeholder"),
    'long': inputArrow[2].getAttribute("placeholder"),
    'fontFamily': "Kumbh Sans",
    'color': 'rgb(248, 112, 112)',
    'panelElem' : 0
};
/* Открыть окно с настройками */
settingBlock.addEventListener('click', function() {
    activeWindow.classList.add('setting-window__wrap__active');
    windowBackground.classList.add('background__active');
    if (activeWindow.classList.contains('setting-window__wrap__active')) {
        timerWr.style.display = 'none';
        minElem.style.display = 'none';
        secElem.style.display = 'none';
        mainButton.style.display= 'none';
        space.style.display = 'none';
    }
    inputArrow[0].placeholder = localStorage.getItem('pomodoroPlay');
    inputArrow[1].placeholder = localStorage.getItem('short');
    inputArrow[2].placeholder = localStorage.getItem('long');

})
function showZero (num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
function deadLine () {
    let featureDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes() + x, new Date().getSeconds() + 1 + z);
    return featureDate;
}

function calcTime (e) {

    minutesTimesTemp = Date.parse(e) - Date.parse(new Date());
    minutes = Math.floor(minutesTimesTemp / (1000 * 60));
    seconds = Math.floor((minutesTimesTemp - (minutes * 1000 * 60)) / 1000);
    return arrTime = [showZero(minutes), showZero(seconds), minutesTimesTemp];
}
calcTime (e);
function playAudio () {
    
    myAudio = new Audio;
    myAudio.src = "audio/mainAudio.mp3";
    if (arrTime[2] < 0) {
        console.log('play');
        myAudio.play();
    }
    
}
function goProgress () {
    styleStrokeDasharray = Math.floor((arrTime[0] * 60 * Circle1Second) + (arrTime[1] * Circle1Second));
    styleStrokeDashoffset = ((mainDoc.offsetWidth < 577) ? 722 : 992) - styleStrokeDasharray;
    console.log(styleStrokeDasharray + 'styleStrokeDasharray');
    // console.log(styleStrokeDashoffset + 'styleStrokeDashoffset');
    progress.style.strokeDasharray = `${styleStrokeDasharray} ${styleStrokeDashoffset}`;
}
if (localStorage.getItem('Circle1Second')) {
    localStorage.getItem('Circle1Second');
    localStorage.getItem('styleStrokeDasharray');
    localStorage.getItem('styleStrokeDashoffset');
    progress.style.strokeDasharray = localStorage.getItem('styleStrokeDasharray') + " " + localStorage.getItem('styleStrokeDashoffset');
    Circle1Second = localStorage.getItem('Circle1Second');
    
}

function circleProgress () {
    if (Circle1Second) {
        // console.log('прямо');
        goProgress ();
    } else if (localStorage.getItem('Circle1Second')) {
        console.log('через локал');
            localStorage.getItem('Circle1Second');
            localStorage.getItem('styleStrokeDasharray');
            localStorage.getItem('styleStrokeDashoffset');
            goProgress ();
    } else {
        Circle1Second = ((mainDoc.offsetWidth < 577) ? 722 : 992) / (+arrTime[2]/1000);
        console.log(Circle1Second);
        console.log(arrTime[0]);
        console.log(arrTime[1]);
    }
    Circle1Second
}
function showTime (e) {
    calcTime (e);
    changeColor ();
    circleProgress ();
    playAudio ();
    if (arrTime[2] < 0) {
        playAudio();
        clearInterval(startTime);
    } else {
        
        minElem.innerHTML = arrTime[0];
        secElem.innerHTML = arrTime[1];
    }

}
/* Закрыть окно с настройками */
function closeWindowFunc() {
    activeWindow.classList.remove('setting-window__wrap__active');
    windowBackground.classList.remove('background__active');
    timerWr.style.display = 'block';
    minElem.style.display = 'block';
    secElem.style.display = 'block';
    mainButton.style.display = 'block';
    space.style.display = 'block';
}
closeWindow.addEventListener('click', function() {
    closeWindowFunc();
})
document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        closeWindowFunc ();
    }
})
windowBackground.addEventListener('click', function(e) {
    if (e.target == windowBackground) {
        closeWindowFunc ();
    }
})
// чтоб стрелки увеличивали/уменьшали значение placeholder
arrowButtonTop.forEach(function(arrow, key) {
    arrow.addEventListener('click', function () {
        placeholderValue = +inputArrow[key].getAttribute("placeholder");
        placeholderValue += 1;
        inputArrow[key].placeholder = placeholderValue;
    })
});

arrowButtonBottom.forEach(function(arrow, key) {
    arrow.addEventListener('click', function () {
        placeholderValue = +inputArrow[key].getAttribute("placeholder");
        if (placeholderValue > 0) {
            placeholderValue -= 1;
        }
        inputArrow[key].placeholder = placeholderValue;
    })

});
// Шрифты
circleFonts.forEach(function(font, f) {
    font.addEventListener('click', function () {
        circleFonts.forEach(function(f) {
            f.classList.remove('setting-window__fonts__circle__active');
        })
        this.classList.add('setting-window__fonts__circle__active');
        choiceFonts = window.getComputedStyle(font).fontFamily;
        console.log(choiceFonts);
        return choiceFonts;
    })
})
function changeFont () {
    document.body.style.fontFamily = localStorage.getItem('fontFamily') || "'Roboto Slab', serif";
}
setInterval(changeFont, 2000);
// Цвет

colorCircle.forEach(function(color, c) {
    color.addEventListener('click', function () {
        colorCircle.forEach(function(c) {
            c.classList.remove('setting-window__color__circle__active');
        })
        this.classList.add('setting-window__color__circle__active');
        choiceColor = window.getComputedStyle(color).backgroundColor;
        console.log(choiceColor);
        return choiceColor;
        
    })
})


// Сбор данных в основной объект
apply.addEventListener('click', function() {
    
    inputArrow.forEach(function(inp, i) {
        applyObj.pomodoroPlay = inputArrow[0].getAttribute("placeholder");
        applyObj.short = inputArrow[1].getAttribute("placeholder");
        applyObj.long = inputArrow[2].getAttribute("placeholder");
        
    })
    applyObj.fontFamily = choiceFonts || "Kumbh Sans";
    applyObj.color = choiceColor || 'rgb(248, 112, 112)';

    // applyObj = {
    //     'pomodoroPlay': choicePomodoro,
    //     'short': choiceShort,
    //     'long': choiceLong,
    //     'fontFamily': choiceFonts,
    //     'color': choiceColor || applyObj.color
    // };
    console.log(applyObj);
    for (let u in applyObj) {
            localStorage.setItem(u, applyObj[u]);
        }
    return applyObj;
    
})

// console.log(applyObj);
// добавляем табам класс активности
function activeClass (v, b, n) {
    panelElem[v].classList.add('panel-elem__active');
    panelElem[v].style.background = localStorage.getItem('color') || applyObj.color;
    
    panelElem[b].classList.remove('panel-elem__active');
    panelElem[b].style.background = 'none';

    panelElem[n].classList.remove('panel-elem__active');
    panelElem[n].style.background = 'none';
}
function panelNoActive () {
    panelElem.forEach((element) => {
        element.classList.remove('panel-elem__active');
        element.style.background = 'none';
        
    });
    
}


panelElem.forEach((element, i) => {
    element.addEventListener('click', function () {
        panelNoActive ();
        this.style.backgroundColor = localStorage.getItem('color') || applyObj.color;
        this.classList.add('panel-elem__active');
        if (i == 0) {
            // minElem.innerHTML = '20';
            minElem.innerHTML = +showZero(applyObj.pomodoroPlay);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 0);
            applyObj.panelElem = +'0';
            // localStorage.removeItem('panelElem', '2');
        } else if (i == 1) {
            minElem.innerHTML = +showZero(applyObj.short);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 1);
            applyObj.panelElem = +'1';
        } else if (i == 2) {
            minElem.innerHTML = +showZero(applyObj.long);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 2);
            applyObj.panelElem = +'2';
            
        }
    })
});



function changeColor () {
    // activePanelAc.forEach((element) => {
    //     element.style.background = localStorage.getItem('color') || "#9a0fe0";
    // })
    
    progress.style.stroke = localStorage.getItem('color') || applyObj.color;
    panelElem.forEach((elem) => {
       if (elem.classList.contains('panel-elem__active')) {
        elem.style.background = localStorage.getItem('color') || applyObj.color;
        }
    })
    
}
setInterval(changeColor, 1000);
circleProgress ();


function buttonTextStop () {
    mainButton.innerHTML = "PAUSE";
}

function buttonTextStart () {
    mainButton.innerHTML = "RESTART";
}

// mainButton.addEventListener('click', function () {

//     if (localStorage.getItem('start')) {
//         localStorage.setItem('start', 'yes');
//     } else {
//         localStorage.setItem('start', true);
        
//     }

// })

mainButton.addEventListener('click', function () {

    if (localStorage.getItem('start')) {
        localStorage.setItem('lockalMin', minElem.innerText);
        localStorage.setItem('lockalSecond', secElem.innerText);
        clearInterval(startTime);
        localStorage.removeItem('start');
        minElem.innerHTML = localStorage.getItem('lockalMin');
        secElem.innerHTML = localStorage.getItem('lockalSecond');
        buttonTextStart ();
        localStorage.setItem('Circle1Second', Circle1Second);
        localStorage.setItem('styleStrokeDasharray', styleStrokeDasharray);
        localStorage.setItem('styleStrokeDashoffset', styleStrokeDashoffset);
        progress.style.strokeDasharray = localStorage.getItem('styleStrokeDasharray') + " " + localStorage.getItem('styleStrokeDashoffset');
    } else {
        x = +minElem.innerText;
        z = +secElem.innerText;

        let o = deadLine ();

        function startTimeFunc () {
            calcTime (o);
            showTime (o);
        }
        localStorage.removeItem('lockalMin');
        localStorage.removeItem('lockalSecond');
        localStorage.removeItem('Circle1Second');
        localStorage.removeItem('styleStrokeDasharray');
        localStorage.removeItem('styleStrokeDashoffset');
        localStorage.setItem('start', true);
        buttonTextStop ();
        startTime = setInterval(startTimeFunc, 1000);
        return startTime;
    }
})

function numberWindow () {
    if (localStorage.getItem('panelElem')) {
    
        if (localStorage.getItem('panelElem') === '1') {
            panelElem.forEach((el) => {
                activeClass (1, 0, 2);
                if (localStorage.getItem('lockalMin')) {
                    minElem.innerHTML = localStorage.getItem('lockalMin');
                    secElem.innerHTML = localStorage.getItem('lockalSecond');
                    buttonTextStart ();
                } else if (localStorage.getItem('short')) {
                    minElem.innerHTML = showZero(localStorage.getItem('short'));
                    secElem.innerHTML = '00';
                } else {
                    minElem.innerHTML = applyObj.long;
                    secElem.innerHTML = '00';
                    // console.log(arrTime);
                }
                
            })
            
        } else if (localStorage.getItem('panelElem') === '2') {
            panelElem.forEach((el) => {
                activeClass (2, 0, 1);
                if (localStorage.getItem('lockalMin')) {
                    minElem.innerHTML = localStorage.getItem('lockalMin');
                    secElem.innerHTML = localStorage.getItem('lockalSecond');
                    buttonTextStart ();
                } else if (localStorage.getItem('long')) {
                    minElem.innerHTML = showZero(localStorage.getItem('long'));
                    secElem.innerHTML = '00';
                }
                else {
                    minElem.innerHTML = applyObj.short;
                    secElem.innerHTML = '00';
                }
            })
        } else if (localStorage.getItem('panelElem') === '0') {
            activeClass (0, 1, 2);
            panelElem.forEach((el) => {
                if (localStorage.getItem('lockalMin')) {
                    minElem.innerHTML = localStorage.getItem('lockalMin');
                    secElem.innerHTML = localStorage.getItem('lockalSecond');
                } else if (localStorage.getItem('pomodoroPlay')) {
                    minElem.innerHTML = showZero(localStorage.getItem('pomodoroPlay'));
                    secElem.innerHTML = '00';
                } else {
                    minElem.innerHTML = applyObj.pomodoroPlay;
                    secElem.innerHTML = '00';
                }
            })
        }
};
}
numberWindow ();
function clearLocal () {
    localStorage.removeItem('lockalSecond');
    localStorage.removeItem('lockalMin');
}

pomodoro.addEventListener('click', function() {
    clearInterval(startTime);
    clearLocal ();
    minElem.innerHTML = showZero(localStorage.getItem('pomodoroPlay')) || showZero(applyObj.pomodoroPlay);
    secElem.innerHTML = '00';
    progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
    Circle1Second = false;
    localStorage.removeItem('Circle1Second');
    localStorage.removeItem('styleStrokeDasharray');
    localStorage.removeItem('styleStrokeDashoffset');
});

shortBreak.addEventListener('click', function() {
    clearInterval(startTime);
    clearLocal ();
    minElem.innerHTML = showZero(localStorage.getItem('short')) || showZero(applyObj.short);
    secElem.innerHTML = '00';
    progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
    Circle1Second = false;
    localStorage.removeItem('Circle1Second');
    localStorage.removeItem('styleStrokeDasharray');
    localStorage.removeItem('styleStrokeDashoffset');
})

longBreak.addEventListener('click', function() {
    clearInterval(startTime);
    clearLocal ();
    minElem.innerHTML = showZero(localStorage.getItem('long')) || showZero(applyObj.long);
    secElem.innerHTML = '00';
    progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
    Circle1Second = false;
    localStorage.removeItem('Circle1Second');
    localStorage.removeItem('styleStrokeDasharray');
    localStorage.removeItem('styleStrokeDashoffset');
})

// круг
function widthCircle () {
    if (mainDoc.offsetWidth < 577) {
        // progress.style.strokeDasharray = 722;
        circleElem.forEach((element) => {
            element.setAttribute('r', '116');
            element.setAttribute('cx', '126');
            element.setAttribute('cy', '126');
            })
    } else {
        circleElem.forEach((element) => {
            element.setAttribute('r', '158');
            element.setAttribute('cx', '170');
            element.setAttribute('cy', '170');
            })
    }
}

setInterval(widthCircle, 1000);
