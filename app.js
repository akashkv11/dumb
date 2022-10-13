const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');
var clickTimes = 0;

no_btn.addEventListener('click', () => {
clickTimes++;
if (clickTimes < 5) {
    no_btn.style.position = 'absolute';

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 2)
        no_btn.style.left = `${random_left - no_btn.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 2)
        no_btn.style.top = `${random_top - no_btn.clientHeight}px`;
} else {
    container.innerHTML = `<h2>
                            I knew it!!! <br>
                            Lool 😂😂😂 <br>
                            Please Subscribe...
                            </h2>`
}
    
})

yes_btn.addEventListener('click', () => {
    container.innerHTML = `<h2>
                            I knew it!!! <br>
                            Lool 😂😂😂 <br>
                            Please Subscribe...
                            </h2>`
})