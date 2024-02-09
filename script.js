function redirectToGame() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.redirecting-screen').style.display = 'block';
    setTimeout(function () {
        window.location.href = "https://play.unity.com/mg/fps/unity-h4j";
    }, 6000);

    loadDud();
    loadBootstrap();
    loadData();
    initializeWebGL();
}

function closePage() {
    window.close();
}

function loadDud() {
    document.querySelector('.dud-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen').style.display = 'none';
    }, 1000); // Set to close after 1 second (1000 milliseconds)
}

function loadBootstrap() {
    document.querySelector('.bootstrap-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen').style.display = 'none';
    }, 1000); // Set to close after 1 second (1000 milliseconds)
}

function loadData() {
    document.querySelector('.data-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.data-screen').style.display = 'none';
    }, 3000); // Set to close after 3 seconds (3000 milliseconds)
}

function initializeWebGL() {
    document.querySelector('.webgl-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.webgl-screen').style.display = 'none';
    }, 1000); // Set to close after 1 second (1000 milliseconds)
}
