const url = 'https://www.google.com'
const read_button = document.querySelector('#read_button')

function openInNewTab (url) {
    const win = window.open(url, '_blank')
    win.focus()
}

read_button.addEventListener('click', () => {
    openInNewTab(url)
})