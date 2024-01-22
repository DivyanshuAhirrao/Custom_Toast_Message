let toast = document.querySelector('#msg-box');

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    toast.style.visibility = 'visible';
    toast.style.transition = 'all 2s'
    closeMsg();
});

function closeMsg() {
    setTimeout(() => {
        toast.style.display = 'none';
        toast.style.transition = 'all 3s'
    },3000)
}