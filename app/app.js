const chest = document.querySelector('.chest');
const head = document.querySelector('.robot-head');

let count = 0;
chest.addEventListener("click", () => {
    count++;
    if(count%3==0){
        head.style.background = 'yellow';
    } else {
        head.style.background = 'rgb(73, 144, 210)';
    }
});

chest.innerHTML = `
    <p>#include stdio.h</p>
    <p>int main(){</p>
    <p>printf("Hello!");</p>
    <p>return 0;</p>
    <p>}</p>
`;