module.exports = Franz => {
    function getMessages() {
        const count = document.querySelector('li[data-app-name="io.ox/mail"] .badge')
        Franz.setBadge(count ? Number(count.innerText) : 0)
    }
    Franz.loop(getMessages)
}