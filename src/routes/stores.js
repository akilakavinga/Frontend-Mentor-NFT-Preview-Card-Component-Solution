import { writable } from "svelte/store";

export const cryptoIcons = writable({
    ETH: 'icon-ethereum.svg'
})

export const profiles = writable({
    "US-202300001": {
        name: "Jules Wyvern",
        pic: "image-avatar.png"
    }
})