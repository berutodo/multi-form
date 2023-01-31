let currentTab = 0;
showTab(currentTab)

function showTab(n) {
    let steps = document.getElementsByClassName('step')
    let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = 'flex';
    if (n > 0) {
        document.getElementById('prev').style.display = 'flex'
    } else {
        document.getElementById('prev').style.display = 'none'
    }
    if (n == tabs.length - 1) {
        document.getElementById('next').innerHTML = 'Confirm'
    } else {
        document.getElementById('next').innerHTML = 'Next Step'
    }
    steps[n].classList.add('active')
}

function hideTab(n) {
    let steps = document.getElementsByClassName('step')
    let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = 'none';
    steps[n].classList.remove('active')
}


function nextStep(x) {
    let tabs = document.getElementsByClassName("tab");
    if (currentTab >= tabs.length - 1) { return }
    hideTab(currentTab)
    currentTab = currentTab + 1
    showTab(currentTab)
}

function prevStep() {
    if (currentTab > 0) {
        hideTab(currentTab)
        currentTab = currentTab - 1
        showTab(currentTab)
    }
}