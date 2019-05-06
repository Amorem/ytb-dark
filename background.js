chrome.runtime.onInstalled.addListener(() => {
  console.log('Just installed !');
});

chrome.bookmarks.onCreated.addListener(() => {
  alert('Bookmark saved');
});
