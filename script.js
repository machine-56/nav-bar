// navbar responsive
function toggleMenu() {
    document.querySelector('.n-links').classList.toggle('active');
}

// dark mode

document.getElementById('theme-toggle').addEventListener('click', function(){
    const body = document.body;
    const isDarkmode = body.classList.contains('dark-mode');

    if(isDarkmode){
        body.classList.remove('dark-mode');
        this.textContent = 'Dark-mode';
    } else{
        body.classList.add('dark-mode');
        this.textContent = 'Light-mode';
    }
});