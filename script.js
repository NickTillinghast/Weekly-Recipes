const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url')
const bookmarksContainer = document.getElementById('bookmarks-container')

// show modal, focus on input
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}
// modal event listeners
modalShow.addEventListener('click', showModal);