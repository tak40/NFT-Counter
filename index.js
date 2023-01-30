let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let nftStr = count + (count == 1 ? " NFT - " : " NFTs - ");
    saveEl.textContent += nftStr;
    countEl.textContent = 0;
    count = 0;
}
