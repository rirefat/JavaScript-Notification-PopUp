let toastBox = document.getElementById('toastBox');

const showToast = (msg) => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}