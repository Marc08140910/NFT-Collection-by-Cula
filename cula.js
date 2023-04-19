
const NFTs = []

function mintNFT (_name, _race, _class, _weapon) {
    const NFT = {
        "name": _name,
        "race": _race,
        "class": _class,
        "weapon": _weapon
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Marc", "Nord", "Barbarian", "Sword and shield");
mintNFT("John", "Orc", "Warrior", "Dual axe");
mintNFT("Ashley", "Elf", "Mage", "Magical staff");
listNFTs();
getTotalSupply();
