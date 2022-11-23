"use strict";
// let nowDate = new Date('2022-10-29 15:10');
let nowDate = new Date();
let x = 10;
let z = 0;
let minutesTimesTemp;
let arrTime;
let pomodoro = document.querySelector('#pomodoroBtn');
let minutes;
let seconds;
let minElem;
let secElem;
let nDate;
let e;
let Circle1Second;
let styleStrokeDasharray;
let styleStrokeDashoffset;
let progress = document.querySelector('.progress');
let myAudio;
let panelParent = document.querySelector('.panel');
let startTime;
let v;
let b;
let shortBreak = document.querySelector('#short-Break');
let longBreak = document.querySelector('#long-Break');
let mainButton = document.querySelector('.main-button');
let panelElem = document.querySelectorAll('.panel-elem');
let activeWindow = document.querySelector('.setting-window__wrap');
let settingBlock = document.querySelector('.setting-block');
let windowBackground = document.querySelector('.setting-window__background');
let timerWr = document.querySelector('#timer_wr');
let space = document.querySelector('#space');
let inputArrow = document.querySelectorAll('.setting-window__choice__input');
let closeWindow = document.querySelector('.setting-window__close');
let applyObj = {
    'pomodoroPlay': inputArrow[0].getAttribute("placeholder"),
    'short': inputArrow[1].getAttribute("placeholder"),
    'long': inputArrow[2].getAttribute("placeholder"),
    'fontFamily': "Kumbh Sans",
    'color': 'rgb(248, 112, 112)'
};
let apply = document.querySelector('.Apply');
let arrowButtonTop = document.querySelectorAll('.setting-window__choice__button__top');
let placeholderValue;
let arrowButtonBottom = document.querySelectorAll('.setting-window__choice__button_bottom');
let choiceFonts;
let circleFonts = document.querySelectorAll('.setting-window__fonts__circle');
let choiceColor;
let colorCircle = document.querySelectorAll('.setting-window__color__circle');
let choicePomodoro;
let choiceShort;
let choiceLong;
let circleElem = document.querySelectorAll('circle');
let mainDoc = document.querySelector('.main');
let settingButton = document.querySelector('.setting-block');
let beforePomodoroPlay;
let beforeShort;
let beforeLong;

function playAudio () {
    
    myAudio = new Audio
    myAudio.src = "audio/mainAudio.mp3"
    if (arrTime[2] < 1) {
        console.log('play');
        myAudio.play();
    }
    
}



apply.addEventListener('click', function() {
    
    inputArrow.forEach(function(inp, i) {
        choicePomodoro = inputArrow[0].getAttribute("placeholder");
        choiceShort = inputArrow[1].getAttribute("placeholder");
        choiceLong = inputArrow[2].getAttribute("placeholder");
    })

    applyObj = {
        'pomodoroPlay': choicePomodoro,
        'short': choiceShort,
        'long': choiceLong,
        'fontFamily': choiceFonts,
        'color': choiceColor || applyObj.color
    };
    console.log(applyObj);
    // localStorage.setItem(applyObj);


    // for (let u in applyObj) {
    //     localStorage.setItem(u, applyObj[u]);
    // }
    // numberWindow ();
    return applyObj;
    
})

// let parentChildren = panelParent.children;
// for (let children of parentChildren) {
    
//     children.addEventListener('click', function () {
   
//         console.log('children');
        
        
//         for (let children of parentChildren) {
//             children.style.background = 'none';
//             children.classList.remove('panel-elem__active');
//         }
//         this.style.background = localStorage.getItem('color') || "#9a0fe0";
//         this.classList.add('panel-elem__active');
//     })
    
// }

// console.log(parentChildren);

    minElem = document.querySelector('#min');
    secElem = document.querySelector('#sec');
    function showZero (num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

// if (localStorage.getItem('pomodoroPlay')) {
//     applyObj.pomodoroPlay = localStorage.getItem('pomodoroPlay');
//     applyObj.short = localStorage.getItem('short');
//     applyObj.long = localStorage.getItem('long');
// }

function deadLine () {
    let featureDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes() + x, new Date().getSeconds() + 1 + z);
    return featureDate;
}

    function calcTime (e) {

        minutesTimesTemp = Date.parse(e) - Date.parse(new Date());
        minutes = Math.floor(minutesTimesTemp / (1000 * 60));
        seconds = Math.floor((minutesTimesTemp - (minutes * 1000 * 60)) / 1000);
        return arrTime = [(minutes), showZero(seconds), minutesTimesTemp];
    }
    // calcTime (e);
    // console.log(arrTime);

    function goProgress () {
        styleStrokeDasharray = Math.floor((arrTime[0] * 60 * Circle1Second) + (arrTime[1] * Circle1Second));
        styleStrokeDashoffset = ((mainDoc.offsetWidth < 577) ? 722 : 992) - styleStrokeDasharray;
        console.log(styleStrokeDasharray + 'styleStrokeDasharray');
        // console.log(styleStrokeDashoffset + 'styleStrokeDashoffset');
        progress.style.strokeDasharray = `${styleStrokeDasharray} ${styleStrokeDashoffset}`;
    }

    function circleProgress () {
        if (Circle1Second) {
            goProgress ();
        } else if (localStorage.getItem('Circle1Second')) {
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
    // showTime ();




pomodoro.addEventListener('click', function() {
    clearInterval(startTime);
    console.log(applyObj);
    minElem.innerHTML = +showZero(applyObj.pomodoroPlay);
    // let a = applyObj.pomodoro || "29";
    // console.log(a);
    // minElem.innerHTML = a;
    secElem.innerHTML = '00';
    // progress.style.strokeDasharray = `992`;
    progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
    Circle1Second = false;
    localStorage.removeItem('Circle1Second');
    localStorage.removeItem('styleStrokeDasharray');
    localStorage.removeItem('styleStrokeDashoffset');
    // let j = deadLine ();
    // function startTimeFunc () {
    //     calcTime (j);
    //     showTime (j);
    // }

    // startTime = setInterval(startTimeFunc, 1000);
    // return startTime;

});


shortBreak.addEventListener('click', function() {
clearInterval(startTime);
minElem.innerHTML = +showZero(applyObj.short);
secElem.innerHTML = '00';
progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
Circle1Second = false;
localStorage.removeItem('Circle1Second');
localStorage.removeItem('styleStrokeDasharray');
localStorage.removeItem('styleStrokeDashoffset');
// x = 5;
// let m = deadLine ();
// function startTimeFunc () {
//     calcTime (m);
//     showTime (m);

// }
// startTime = setInterval(startTimeFunc, 1000);
// return startTime;
})


longBreak.addEventListener('click', function() {
clearInterval(startTime);
minElem.innerHTML = +showZero(applyObj.long);
secElem.innerHTML = '00';
progress.style.strokeDasharray = ((mainDoc.offsetWidth < 577) ? 722 : 992);
Circle1Second = false;
localStorage.removeItem('Circle1Second');
localStorage.removeItem('styleStrokeDasharray');
localStorage.removeItem('styleStrokeDashoffset');
// x = 15;
// let o = deadLine ();
    
// function startTimeFunc () {
//     calcTime (o);
//     showTime (o);

// }
// startTime = setInterval(startTimeFunc, 1000);
// return startTime;
})
// console.log(arrTime);


function buttonTextStop () {
    mainButton.innerHTML = "PAUSE";
}
function buttonTextStart () {
    mainButton.innerHTML = "RESTART";
}
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

// if (localStorage.getItem('lockalMin')) {
//     minElem.innerHTML = localStorage.getItem('lockalMin');
//     secElem.innerHTML = localStorage.getItem('lockalSecond');
    
//     buttonTextStart ();

// }

// if ((arrTime[0] == '04') && (arrTime[1] == '45')) {
//     playAudio ();
// }
// let activePanelAc = document.querySelectorAll('.panel-elem__active');
// меняем цвет круга
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

function activeClass (v, b, n) {
    panelElem[v].classList.add('panel-elem__active');
    panelElem[v].style.background = localStorage.getItem('color') || applyObj.color;
    
    panelElem[b].classList.remove('panel-elem__active');
    panelElem[b].style.background = 'none';

    panelElem[n].classList.remove('panel-elem__active');
    panelElem[n].style.background = 'none';
}

// setInterval(activeClass, 1000);


function numberWindow () {
    if (localStorage.getItem('panelElem')) {
    
        if (localStorage.getItem('panelElem') === '1') {
            console.log('1');
            panelElem.forEach((el) => {
                activeClass (1, 0, 2);

                if (localStorage.getItem('lockalMin')) {
                    minElem.innerHTML = localStorage.getItem('lockalMin');
                    secElem.innerHTML = localStorage.getItem('lockalSecond');
                    buttonTextStart ();
                } else {
                    minElem.innerHTML = applyObj.long;
                    secElem.innerHTML = '00';
                    // console.log(arrTime);
                }
                
            })
            
        } else if (localStorage.getItem('panelElem') === '2') {
            console.log('2');
            panelElem.forEach((el) => {
                activeClass (2, 0, 1);
                // panelElem[2].classList.add('panel-elem__active');
                // panelElem[0].classList.remove('panel-elem__active');
                if (localStorage.getItem('lockalMin')) {
                    minElem.innerHTML = localStorage.getItem('lockalMin');
                    secElem.innerHTML = localStorage.getItem('lockalSecond');
                    buttonTextStart ();
                } else {
                    minElem.innerHTML = applyObj.short;
                    secElem.innerHTML = '00';
                    // console.log(arrTime);
                }
            })
        } else if (localStorage.getItem('panelElem') === '0') {
                    minElem.innerHTML = applyObj.pomodoro;
                    secElem.innerHTML = '00';
            activeClass (0, 1, 2);
        }
};
}
numberWindow ();

if (localStorage.getItem('Circle1Second')) {
    localStorage.getItem('Circle1Second');
    localStorage.getItem('styleStrokeDasharray');
    localStorage.getItem('styleStrokeDashoffset');
    progress.style.strokeDasharray = localStorage.getItem('styleStrokeDasharray') + " " + localStorage.getItem('styleStrokeDashoffset');

}
if (!localStorage.getItem('panelElem')) {
    activeClass (0, 1, 2);
}

// if (localStorage.getItem('color')) {

// }

// mainButton.addEventListener('click', function () {
//     if ((!localStorage.getItem('start')) && (!localStorage.getItem('lockalMin'))) {
//         x = +minElem.innerText;
//         z = +secElem.innerText;
//         console.log(x);
//         console.log(minElem.innerText);
//         let o = deadLine ();

//         function startTimeFunc () {
//             calcTime (o);
//             showTime (o);
//         }
//         localStorage.setItem('start', true);
//         buttonTextStop ();
//         startTime = setInterval(startTimeFunc, 1000);
//         return startTime;

//     } else if (localStorage.getItem('start')) {
//         localStorage.setItem('lockalMin', minElem.innerText);
//         localStorage.setItem('lockalSecond', secElem.innerText);
//         localStorage.removeItem('start');
//         clearInterval(startTime);
//         minElem.innerHTML = localStorage.getItem('lockalMin');
//         secElem.innerHTML = localStorage.getItem('lockalSecond');
//         buttonTextStop ();
//     } else if (localStorage.getItem('lockalMin')) {
//             clearInterval(startTime);
//         x = +localStorage.getItem('lockalMin');
//         z = +localStorage.getItem('lockalSecond');

//         let p = deadLine ();
//         function startTimeFunc () {
//             calcTime (p);
//             showTime (p);
//         }
//         localStorage.clear();
//         buttonTextStart ();
//         startTime = setInterval(startTimeFunc, 1000);
//         return startTime;

//     }





// })


panelElem.forEach((element, i) => {
    element.addEventListener('click', function () {
        panelElem.forEach((element) => {
            element.classList.remove('panel-elem__active');
            element.style.background = 'none';
            
        });
        this.classList.add('panel-elem__active');
        this.style.background = localStorage.getItem('color') || applyObj.color;
        if (i == 0) {
            // minElem.innerHTML = '20';
            minElem.innerHTML = showZero(applyObj.pomodoroPlay);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 0);
            // localStorage.removeItem('panelElem', '2');
        } else if (i == 1) {
            minElem.innerHTML = showZero(applyObj.short);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 1);
        } else if (i == 2) {
            minElem.innerHTML = showZero(applyObj.long);
            secElem.innerHTML = '00';
            localStorage.removeItem('panelElem');
            localStorage.setItem('panelElem', 2);
            
        }
    })
});
// panelElem.forEach((element, i) => {
//     element.addEventListener('click', function () {
//         panelElem.forEach((element) => {
//             element.classList.remove('panel-elem__active');
//         });
//         this.classList.add('panel-elem__active');
        
//     })
// });



windowBackground.addEventListener('click', function(e) {
if (e.target == windowBackground) {
    closeWindowFunc ();
    // compareNewValues ();
}
})

document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        closeWindowFunc ();
        // compareNewValues ();
    }
})

settingBlock.addEventListener('click', function() {
    console.log('button');
    activeWindow.classList.add('setting-window__wrap__active');
    windowBackground.classList.add('background__active');
    /* условие пока не использовала */
    if (activeWindow.classList.contains('setting-window__wrap__active')) {
        timerWr.style.display = 'none';
        minElem.style.display = 'none';
        secElem.style.display = 'none';
        mainButton.style.display= 'none';
        space.style.display = 'none';
    }
})



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
// compareNewValues ();
})

    


arrowButtonTop.forEach(function(arrow, key) {
    arrow.addEventListener('click', function () {
        placeholderValue = +inputArrow[key].getAttribute("placeholder");
        placeholderValue += 1;        
        inputArrow[key].placeholder = placeholderValue;
    })
});

arrowButtonBottom.forEach(function(arrow, key) {
    
        
    arrow.addEventListener('click', function () { 
        // this.classList.add('setting-window__choice__button_wrap__active');
        placeholderValue = +inputArrow[key].getAttribute("placeholder");
        if (placeholderValue > 0) {
            placeholderValue -= 1;
        }
        inputArrow[key].placeholder = placeholderValue;
    })
    
});



circleFonts.forEach(function(font, f) {
    font.addEventListener('click', function () {
        choiceFonts = window.getComputedStyle(font).fontFamily;
        // choiceFonts = f;
        console.log(choiceFonts);
        return choiceFonts;
    })
})
colorCircle.forEach(function(color, c) {
    color.addEventListener('click', function () {
        colorCircle.forEach(function(c) {
            c.classList.remove('setting-window__color__circle__active');
        })
        this.classList.add('setting-window__color__circle__active');
        // choiceColor = c;
        choiceColor = window.getComputedStyle(color).backgroundColor;
        console.log(choiceColor);
        return choiceColor;
        
    })
})




// меняем шрифт
function changeFont () {
        document.body.style.fontFamily = localStorage.getItem('fontFamily') || "'Roboto Slab', serif";
}
setInterval(changeFont, 2000);




// if ((minElem == '4') && (secElem == '50')) {
    
// }

// let title = document.querySelector('.title');
// title.addEventListener('click', playAudio);



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

console.log(mainDoc.offsetWidth);


setInterval(widthCircle, 1000);
