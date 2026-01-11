import { App } from "./render";

new App({
    postButton: document.querySelector('#posts-button') as HTMLButtonElement,
    albumsButton: document.querySelector('#albums-button') as HTMLButtonElement,
    myPostButton: document.querySelector('#my-posts-button') as HTMLButtonElement,
    content: document.querySelector('#content') as HTMLUListElement
})
