const buttonToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

buttonToggle.addEventListener('click', () => {
    buttonToggle.classList.toggle('active')
    navigation.classList.toggle('active')
})