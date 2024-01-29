let toastBox = document.getElementById('toastBox');

const showToast = (msg) => {
    let toastModal = document.createElement('div');
    toastModal.classList.add('toast');
    toastModal.innerHTML = msg;
    toastBox.appendChild(toastModal);
}