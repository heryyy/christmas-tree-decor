const h1 = 'font-weight: bold; font-size: 14.5px; color: #f24b4b;';
const h2 = 'font-weight: bold; font-size: 13px; color: #16a34a;';
console.log('%c whats new in v2024:', h1);
console.log('%c Additions', h2, '\n • Change the size of decor\n • Hover to preview decor placement before placing\n • Tree and garland selector\n • Icicle, bell, snowman, black, sparkling light blue, and more dualcolor ornaments\n • Green and blue toppers\n • Orange, dark blue, and purple trees & garland\n • White presents\n • More background colors');
console.log('%c Improvements', h2, '\n • Improved design\n • Updated many ornament designs');

let decor = 'orn';
let bg = 0;
let i = 0;
let j = 0;

let dImg = 'random.png';
let dBtn = 'random';

let resizeConstant = 1.4; // smaller # = bigger size, larger # = smaller size
let lgTreeWidth = 600;
let lgTreeHeight = 900;
let smTreeWidth = lgTreeWidth / resizeConstant;
let smTreeHeight = lgTreeHeight / resizeConstant;
let trResizeConstant = (lgTreeWidth / smTreeWidth) * 2;
let dResizeConstant = lgTreeWidth / smTreeWidth;

let sizeFactor = 1;

let canvas = document.getElementById('canvas');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');
let canvas4 = document.getElementById('canvas4');
let canvas5 = document.getElementById('canvas5');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
canvas4.width = window.innerWidth;
canvas4.height = window.innerHeight;
canvas5.width = window.innerWidth;
canvas5.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');
let ctx4 = canvas4.getContext('2d');
let ctx5 = canvas5.getContext('2d');

function switchBg() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    if (bg == 0) {
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-red-400');
        bg++;
    } else if (bg == 1) {
        document.body.classList.remove('bg-red-400');
        document.body.classList.add('bg-orange-400');
        bg++;
    } else if (bg == 2) {
        document.body.classList.remove('bg-orange-400');
        document.body.classList.add('bg-yellow-400');
        bg++;
    } else if (bg == 3) {
        document.body.classList.remove('bg-yellow-400');
        document.body.classList.add('bg-green-400');
        bg++;
    } else if (bg == 4) {
        document.body.classList.remove('bg-green-400');
        document.body.classList.add('bg-blue-400');
        bg++;
    } else if (bg == 5) {
        document.body.classList.remove('bg-blue-400');
        document.body.classList.add('bg-purple-400');
        bg++;
    } else if (bg == 6) {
        document.body.classList.remove('bg-purple-400');
        document.body.classList.add('bg-pink-400');
        bg++;
    } else if (bg == 7) {
        document.body.classList.remove('bg-pink-400');
        document.body.classList.add('bg-slate-950');
        genSnow();
        bg++;
    } else if (bg == 8) {
        document.body.classList.remove('bg-slate-950');
        document.body.classList.add('bg-red-950');
        genSnow();
        bg++;
    } else if (bg == 9) {
        document.body.classList.remove('bg-red-950');
        document.body.classList.add('bg-orange-950');
        genSnow();
        bg++;
    } else if (bg == 10) {
        document.body.classList.remove('bg-orange-950');
        document.body.classList.add('bg-yellow-950');
        genSnow();
        bg++;
    } else if (bg == 11) {
        document.body.classList.remove('bg-yellow-950');
        document.body.classList.add('bg-green-950');
        genSnow();
        bg++;
    } else if (bg == 12) {
        document.body.classList.remove('bg-green-950');
        document.body.classList.add('bg-blue-950');
        genSnow();
        bg++;
    } else if (bg == 13) {
        document.body.classList.remove('bg-blue-950');
        document.body.classList.add('bg-purple-950');
        genSnow();
        bg++;
    } else if (bg == 14) {
        document.body.classList.remove('bg-purple-950');
        document.body.classList.add('bg-pink-950');
        genSnow();
        bg++;
    } else if (bg == 15) {
        document.body.classList.remove('bg-pink-950');
        document.body.classList.add('bg-white');
        bg = 0;
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('flex');
}

function genSnow() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    let amt = Math.round(window.innerWidth / 7.5);

    for (let i = 0; i < amt; i++) {
        let x = Math.floor(Math.random() * (canvas4.width + 1));
        let y = Math.floor(Math.random() * (canvas4.height + 1));

        ctx4.beginPath();
        ctx4.fillStyle = 'white';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();

        x = Math.floor(Math.random() * (canvas4.width + 1));
        y = Math.floor(Math.random() * (canvas4.height + 1));

        ctx4.beginPath();
        ctx4.fillStyle = 'yellow';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();
    }
}

let dButtons = document.querySelectorAll('.decorB');
dButtons.forEach((decorB) => {
    decorB.addEventListener('click', () => {
        // remove classes from all dButtons
        dButtons.forEach((decorB) => {
            decorB.classList.remove('bg-lightGreen/90');
            decorB.classList.remove('md:bg-lightGreen/90');
            decorB.classList.remove('border-gray-400/90');
            decorB.classList.remove('md:border-gray-400/90');
            decorB.classList.add('hover:enabled:bg-gray-200/90');
            decorB.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the dButton that has been clicked
        decorB.classList.add('bg-lightGreen/90');
        decorB.classList.add('border-gray-400/90');
        decorB.classList.remove('hover:enabled:bg-gray-200/90');
        decorB.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let bButtons = document.querySelectorAll('.baseB');
bButtons.forEach((baseB) => {
    baseB.addEventListener('click', () => {
        // remove classes from all bButtons
        bButtons.forEach((baseB) => {
            baseB.classList.remove('bg-lightGreen/90');
            baseB.classList.remove('md:bg-lightGreen/90');
            baseB.classList.remove('border-gray-400/90');
            baseB.classList.remove('md:border-gray-400/90');
            baseB.classList.add('hover:enabled:bg-gray-200/90');
            baseB.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the bButton that has been clicked
        baseB.classList.add('bg-lightGreen/90');
        baseB.classList.add('border-gray-400/90');
        baseB.classList.remove('hover:enabled:bg-gray-200/90');
        baseB.classList.remove('active:enabled:bg-gray-300/90');
    });
});

window.onload = function () {
    document.getElementById('decorSelector').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('decorSelector').style.paddingBottom = document.getElementById('decorDock').offsetHeight + 'px';

    document.getElementById('baseSelector').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('baseSelector').style.paddingBottom = document.getElementById('decorDock').offsetHeight + 'px';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) {
        document.getElementById('modal').classList.add('flex');
        document.getElementById('modal').classList.remove('hidden');
    }

    selectTree('tree.png');
}

function switchTr() {
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('block');
    document.getElementById('treeDiv').classList.remove('hidden');
    document.getElementById('treeDiv').classList.add('block');

    document.getElementById('garlandDiv').classList.remove('block');
    document.getElementById('garlandDiv').classList.add('hidden');

    if (window.innerWidth < 905 || window.innerHeight < 850) closeSelector();
}

function switchG() {
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('block');
    document.getElementById('garlandDiv').classList.remove('hidden');
    document.getElementById('garlandDiv').classList.add('block');

    document.getElementById('treeDiv').classList.remove('block');
    document.getElementById('treeDiv').classList.add('hidden');

    if (window.innerWidth < 905 || window.innerHeight < 850) closeSelector();
}

function switchO() {
    decor = 'orn';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('ornDiv').classList.remove('hidden');
    document.getElementById('ornDiv').classList.add('block');

    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchC() {
    decor = 'cane';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('caneDiv').classList.remove('hidden');
    document.getElementById('caneDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchF() {
    decor = 'flower';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('flowerDiv').classList.remove('hidden');
    document.getElementById('flowerDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchL() {
    decor = 'light';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('lightDiv').classList.remove('hidden');
    document.getElementById('lightDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchT() {
    decor = 'top';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('topDiv').classList.remove('hidden');
    document.getElementById('topDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchP() {
    decor = 'pres';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('presDiv').classList.remove('hidden');
    document.getElementById('presDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function closeSelector() {
    document.getElementById('decorSelector').classList.remove('block');
    document.getElementById('decorSelector').classList.add('hidden');
}

function closeBaseSelector() {
    document.getElementById('baseSelector').classList.remove('block');
    document.getElementById('baseSelector').classList.add('hidden');
}

function toggleB() {
    if (document.getElementById('decorSelector').classList.contains('md:block')) {
        hideB();
    } else {
        showB();
    }
}

function hideB() {
    document.getElementById('decorSelector').classList.remove('md:block');
    document.getElementById('decorSelector').classList.add('hidden');
    document.getElementById('baseSelector').classList.remove('md:block');
    document.getElementById('baseSelector').classList.add('hidden');
    document.getElementById('decorDock').classList.remove('block');
    document.getElementById('decorDock').classList.add('hidden');
    document.getElementById('optionsDiv').style.top = '0px';
    document.getElementById('optionsDiv').style.left = '0px';
    document.getElementById('optionsDiv').classList.add('hover:opacity-100');
    document.getElementById('hideI').classList.remove('fa-angle-up');
    document.getElementById('hideI').classList.add('fa-angle-down');
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
}

function showB() {
    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('md:block');
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('md:block');
    document.getElementById('decorDock').classList.remove('hidden');
    document.getElementById('decorDock').classList.add('block');
    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
    document.getElementById('optionsDiv').classList.remove('hover:opacity-100');
    document.getElementById('hideI').classList.remove('fa-angle-down');
    document.getElementById('hideI').classList.add('fa-angle-up');
}

function changeSize() {
    if (sizeFactor == 1) {
        sizeFactor = 0.8;
        document.getElementById('sizeBtn').innerText = 'Size: Large'; // 1.25x
    } else if (sizeFactor == 0.8) {
        sizeFactor = 0.6;
        document.getElementById('sizeBtn').innerText = 'Size: Colossal'; // 1.67x
    } else if (sizeFactor == 0.6) {
        sizeFactor = 1.8;
        document.getElementById('sizeBtn').innerText = 'Size: Mini'; //  0.56x
    } else if (sizeFactor == 1.8) {
        sizeFactor = 1.3;
        document.getElementById('sizeBtn').innerText = 'Size: Small'; // 0.77x
    } else {
        sizeFactor = 1;
        document.getElementById('sizeBtn').innerText = 'Size: Normal'; // 1x
    }
}

// hide hide/show button after 5 seconds of inactivity when menu is also hidden
let timeout = function () {
    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.add('opacity-50');
        timer2 = setTimeout(timeout2, 3000);
    }
}

let timeout2 = function () {
    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.remove('opacity-50');
        document.getElementById('optionsDiv').classList.add('opacity-0');
    }
}

let timer2;
let timer;
window.addEventListener('mousemove', function () {
    clearTimeout(timer);
    clearTimeout(timer2);
    timer = setTimeout(timeout, 2000);

    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.remove('opacity-50');
        document.getElementById('optionsDiv').classList.remove('opacity-0');
    }
}, false);

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
}

let d = document.getElementById('ornament-red.png');
let farEnough = false;
point1 = [0, 0];

canvas5.addEventListener('mousemove', function (event) {
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;

    point2 = [x, y];

    if (calcDistance(point1[0], point1[1], point2[0], point2[1]) > 15) {
        farEnough = true;
        /* ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.stroke(); */
    } else {
        farEnough = false;
    }

    if (dImg == 'random.png') {
        /* random selection */
        if (farEnough) { // dont change this to be (dImg == 'random.png' && farEnough)
            if (decor == 'top') {
                d = document.getElementById(topperArray[Math.floor(Math.random() * topperArray.length)]);
            } else if (decor == 'orn') {
                d = document.getElementById(ornamentArray[Math.floor(Math.random() * ornamentArray.length)]);
            } else if (decor == 'cane') {
                d = document.getElementById(candyCaneArray[Math.floor(Math.random() * candyCaneArray.length)]);
            } else if (decor == 'flower') {
                d = document.getElementById(flowerArray[Math.floor(Math.random() * flowerArray.length)]);
            } else if (decor == 'light') {
                d = document.getElementById(lightArray[Math.floor(Math.random() * lightArray.length)]);
            } else if (decor == 'pres') {
                d = document.getElementById(presentArray[Math.floor(Math.random() * presentArray.length)]);
            } else if (decor == 'sec') {
                d = document.getElementById(secretArray[Math.floor(Math.random() * secretArray.length)]);
            }
        }
    } else {
        /* specific selection */
        d = document.getElementById(dImg);
    }

    if (window.innerWidth >= 905 && window.innerHeight >= 850) {
        finalX = x - Math.round((d.width / sizeFactor) / 2);
        finalY = y - Math.round((d.height / sizeFactor) / 2);
        finalW = Math.round(d.width / sizeFactor);
        finalH = Math.round(d.height / sizeFactor);
    } else if (window.innerWidth < 905 || window.innerHeight < 850) {
        finalX = x - Math.round(((d.width / sizeFactor) / dResizeConstant) / 2);
        finalY = y - Math.round(((d.height / sizeFactor) / dResizeConstant) / 2);
        finalW = Math.round((d.width / sizeFactor) / dResizeConstant);
        finalH = Math.round((d.height / sizeFactor) / dResizeConstant);
    }

    if (farEnough) point1 = point2;
    if (document.getElementById('decorSelector').classList.contains('md:block')) ctx5.drawImage(d, finalX, finalY, finalW, finalH);
}, false);

canvas5.addEventListener('click', function () {
    ctx.drawImage(d, finalX, finalY, finalW, finalH);
}, false);

let ornamentArray = [
    'ornament-red.png',
    'ornament-orange.png',
    'ornament-yellow.png',
    'ornament-chartreuse.png',
    'ornament-green.png',
    'ornament-cyan.png',
    'ornament-blue.png',
    'ornament-purple.png',
    'ornament-donut.png',
    'ornament-white.png',
    'ornament-brown.png',
    'ornament-silver.png',
    'ornament-pink.png',
    'ornament-black.png',
    'ornament-year-current.png',
    'ornament-dualcolor-red-white.png',
    'ornament-dualcolor-orange-white.png',
    'ornament-dualcolor-gold-white.png',
    'ornament-dualcolor-green-white.png',
    'ornament-dualcolor-light-blue-white.png',
    'ornament-dualcolor-blue-white.png',
    'ornament-dualcolor-purple-white.png',
    'ornament-dualcolor-pink-white.png',
    'ornament-sparkling-red.png',
    'ornament-sparkling-orange.png',
    'ornament-sparkling-gold.png',
    'ornament-sparkling-green.png',
    'ornament-sparkling-light-blue.png',
    'ornament-sparkling-blue.png',
    'ornament-sparkling-purple.png',
    'ornament-sparkling-pink.png',
    'ornament-sparkling-white.png',
    'ornament-icicle.png',
    'ornament-bell.png',
    'ornament-snowman.png',
    'ornament-cookie.png'
];

let candyCaneArray = [
    'candy-cane-red-right.png',
    'candy-cane-red-left.png',
    'candy-cane-green-right.png',
    'candy-cane-green-left.png',
    'candy-cane-red-green-right.png',
    'candy-cane-red-green-left.png',
    'candy-cane-pink-right.png',
    'candy-cane-pink-left.png',
    'candy-cane-yellow-right.png',
    'candy-cane-yellow-left.png',
    'candy-cane-pink-yellow-right.png',
    'candy-cane-pink-yellow-left.png',
    'candy-cane-rainbow-right.png',
    'candy-cane-rainbow-left.png',
    'candy-cane-zebra-right.png',
    'candy-cane-zebra-left.png'
];

let flowerArray = [
    'poinsettia-red.png',
    'poinsettia-orange.png',
    'poinsettia-yellow.png',
    'poinsettia-cyan.png',
    'poinsettia-blue.png',
    'poinsettia-purple.png',
    'poinsettia-pink.png',
    'poinsettia-white.png',
    'hibiscus-red.png',
    'hibiscus-orange.png',
    'hibiscus-yellow.png',
    'hibiscus-cyan.png',
    'hibiscus-blue.png',
    'hibiscus-purple.png',
    'hibiscus-pink.png',
    'hibiscus-white.png'
];

let lightArray = [
    'light-red.png',
    'light-orange.png',
    'light-yellow.png',
    'light-green.png',
    'light-cyan.png',
    'light-blue.png',
    'light-purple.png',
    'light-pink.png',
    'light-white.png',
    'light-rainbow.png'
];

let presentArray = [ // higher chance to get normal sized present than other ones
    'present-red.png',
    'present-red.png',
    'present-red-long.png',
    'present-red-tall.png',
    'present-yellow.png',
    'present-yellow.png',
    'present-yellow-long.png',
    'present-yellow-tall.png',
    'present-green.png',
    'present-green.png',
    'present-green-long.png',
    'present-green-tall.png',
    'present-blue.png',
    'present-blue.png',
    'present-blue-long.png',
    'present-blue-tall.png',
    'present-dark-blue.png',
    'present-dark-blue.png',
    'present-dark-blue-long.png',
    'present-dark-blue-tall.png',
    'present-purple.png',
    'present-purple.png',
    'present-purple-long.png',
    'present-purple-tall.png',
    'present-white.png',
    'present-white.png',
    'present-white-long.png',
    'present-white-tall.png'
];

let topperArray = [
    'star-gold-1.png',
    'star-gold-2.png',
    'star-gold-3.png',
    'star-gold-4.png',
    'star-red-1.png',
    'star-red-2.png',
    'star-red-3.png',
    'star-red-4.png',
    'star-white-1.png',
    'star-white-2.png',
    'star-white-3.png',
    'star-white-4.png',
    'star-green-1.png',
    'star-green-2.png',
    'star-green-3.png',
    'star-green-4.png',
    'star-blue-1.png',
    'star-blue-2.png',
    'star-blue-3.png',
    'star-blue-4.png',
    'bow-red.png',
    'bow-gold.png',
    'bow-white.png',
    'bow-green.png',
    'bow-blue.png',
    'finial-white.png',
    'finial-gold.png',
    'finial-red.png',
    'finial-green.png',
    'finial-blue.png'
];

let secretArray = [
    'ornament-hearts.png',
    'ornament-uwu.png',
    'ornament-tree.png',
    'ornament-star.png',
    'ornament-hangy-orange.png',
    'present-white.png',
    'present-white.png',
    'present-white-long.png',
    'present-white-tall.png'
];

function select(selectedD) {
    dImg = selectedD;
    dBtn = dImg.replace('.png', '');
}

function selectTree(selectedT) {
    tImg = selectedT;
    tBtn = tImg.replace('.png', '');

    ctx3.clearRect(0, 0, canvas.width, canvas.height);

    if (window.innerWidth >= 905 && window.innerHeight >= 850) {
        x = (canvas3.width / 2) - ((document.getElementById(tImg).width * 10) / 2);
        y = (canvas3.height / 2) - ((document.getElementById(tImg).height * 10) / 2) + document.getElementById('decorDock').offsetHeight;
        w = lgTreeWidth;
        h = lgTreeHeight;

    } else if (window.innerWidth < 905 || window.innerHeight < 850) {
        x = (canvas3.width / 2) - ((document.getElementById(tImg).width * 10) / trResizeConstant);
        y = (canvas3.height / 2) - ((document.getElementById(tImg).height * 10) / trResizeConstant) + document.getElementById('decorDock').offsetHeight;
        w = smTreeWidth;
        h = smTreeHeight;
    }

    const tree = document.getElementById(tImg);
    ctx3.drawImage(tree, x, y, w, h);
}

function selectGar(selectedG) {
    gImg = selectedG;
    gBtn = gImg.replace('.png', '');

    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    if (gImg !== 'none') {
        if ((window.innerWidth >= 905 && window.innerHeight >= 850)) {
            x = (canvas2.width / 2) - ((document.getElementById(gImg).width * 10) / 2);
            y = (canvas2.height / 2) - ((document.getElementById(gImg).height * 10) / 2) + document.getElementById('decorDock').offsetHeight;
            w = lgTreeWidth;
            h = lgTreeHeight;

        } else if ((window.innerWidth < 905 || window.innerHeight < 850)) {
            x = (canvas2.width / 2) - ((document.getElementById(gImg).width * 10) / trResizeConstant);
            y = (canvas2.height / 2) - ((document.getElementById(gImg).height * 10) / trResizeConstant) + document.getElementById('decorDock').offsetHeight;
            w = smTreeWidth;
            h = smTreeHeight;
        }

        const gar = document.getElementById(gImg);
        ctx2.drawImage(gar, x, y, w, h);
    }
}

let dImgButtons = document.querySelectorAll('.selectDecor');
dImgButtons.forEach((selectDecor) => {
    selectDecor.addEventListener('click', () => {

        // removes classes from all dImgButtons
        dImgButtons.forEach((selectDecor) => {
            selectDecor.classList.remove('bg-lightGreen/90');
            selectDecor.classList.remove('border-gray-400/90');
            selectDecor.classList.add('hover:enabled:bg-gray-200/90');
            selectDecor.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the dImgButton that has been clicked
        selectDecor.classList.add('bg-lightGreen/90');
        selectDecor.classList.add('border-gray-400/90');
        selectDecor.classList.remove('hover:enabled:bg-gray-200/90');
        selectDecor.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let treeImgButtons = document.querySelectorAll('.selectTree');
treeImgButtons.forEach((selectTree) => {
    selectTree.addEventListener('click', () => {

        // removes classes from all treeImgButtons
        treeImgButtons.forEach((selectTree) => {
            selectTree.classList.remove('bg-lightGreen/90');
            selectTree.classList.remove('border-gray-400/90');
            selectTree.classList.add('hover:enabled:bg-gray-200/90');
            selectTree.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the treeImgButton that has been clicked
        selectTree.classList.add('bg-lightGreen/90');
        selectTree.classList.add('border-gray-400/90');
        selectTree.classList.remove('hover:enabled:bg-gray-200/90');
        selectTree.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let garImgButtons = document.querySelectorAll('.selectGar');
garImgButtons.forEach((selectGar) => {
    selectGar.addEventListener('click', () => {

        // removes classes from all garImgButtons
        garImgButtons.forEach((selectGar) => {
            selectGar.classList.remove('bg-lightGreen/90');
            selectGar.classList.remove('border-gray-400/90');
            selectGar.classList.add('hover:enabled:bg-gray-200/90');
            selectGar.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the garImgButton that has been clicked
        selectGar.classList.add('bg-lightGreen/90');
        selectGar.classList.add('border-gray-400/90');
        selectGar.classList.remove('hover:enabled:bg-gray-200/90');
        selectGar.classList.remove('active:enabled:bg-gray-300/90');
    });
});

document.body.onkeyup = function (event) {
    showB();

    if (event.keyCode == 49) {
        document.getElementById('switchO').click();
    } else if (event.keyCode == 50) {
        document.getElementById('switchC').click();
    } else if (event.keyCode == 51) {
        document.getElementById('switchF').click();
    } else if (event.keyCode == 52) {
        document.getElementById('switchL').click();
    } else if (event.keyCode == 53) {
        document.getElementById('switchP').click();
    } else if (event.keyCode == 54) {
        document.getElementById('switchT').click();
    } else if (event.keyCode == 55) {
        document.getElementById('switchTr').click();
    } else if (event.keyCode == 56) {
        document.getElementById('switchG').click();
    } else if (event.keyCode == 57) {
        document.getElementById('switchBg').click();
    }
};

var allowedKeys = {
    67: 'c',
    69: 'e',
    82: 'r',
    83: 's',
    84: 't',
};

var code = ['s', 'e', 'c', 'r', 'e', 't'];
var codeP = 0; // position

document.addEventListener('keydown', function (e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = code[codeP];

    if (key == requiredKey) {
        codeP++;
        if (codeP == code.length) {
            openSecret();
            codeP = 0;
        }
    }
});

function openSecret() {
    decor = 'sec';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('secretDiv').classList.remove('hidden');
    document.getElementById('secretDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';
}

download_img = function (el) { // i have no idea how this works
    let image = canvas.toDataURL('image/png');
    el.href = image;
};