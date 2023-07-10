const io = require('socket.io-client');

var Stomp = require('stompjs');
var client = Stomp.overWS('ws://20.123.233.248:61614/stomp');

var headers = {
    login: 'admin',
    passcode: 't0Gg.aDmIn21',
};

client.connect(headers, function (frame) {
    console.log("Connection Succeed !")

    var count = 0;
    const logInterval = setInterval(() => {
        console.log(`Log: ${++count}`);
        client.send("/topic/toggens.marketplace.bids", {priority: 9}, 'TEST MESSAGE TEST MESSAGE "{\\"nftOperationId\\":\\"16b13c36-0a30-4ae3-b9f6-8cb960f4b3e7\\",\\"nft\\":{\\"nftInternalId\\":\\"fb016e90-378d-4bf0-9177-13aa53281c77\\",\\"ownerWallet\\":\\"0x28dc4657bcb5ba0b75280640d2fdc039966acdab\\",\\"nftId\\":24,\\"collectionAddress\\":\\"0xD68DCC0822Fbfde4F2Da31FF6d1A6819d5AEb15C\\",\\"collectionValidated\\":true,\\"tokenUri\\":\\"ipfs://QmT1Cx8DDFgRdeEEax4snumwiZ8n3zJz1UZkztTw97DX1Q/1.json\\",\\"mediaTokenUri\\":\\"ipfs://QmXx2GazPnxHsUKyDTnHt5QEZcvgnAsVRtACvWzDKmEYtB/1.mp4\\",\\"mediaType\\":\\"VIDEO\\",\\"mediaFileUrl\\":\\"https://togg2023storage.togg.cloud/1.mp4\\",\\"thumbnailTokenUri\\":\\"ipfs://QmXx2GazPnxHsUKyDTnHt5QEZcvgnAsVRtACvWzDKmEYtB/1_thumbnail.webp\\",\\"thumbnailFileUrl\\":\\"https://togg2023storage.togg.cloud/1_thumbnail.webp\\",\\"rarity\\":\\"RARE\\",\\"name\\":\\"1002\\",\\"creator\\":\\"Togg\\",\\"description\\":\\"Siber-Fiziksel Mimar ve Yeni Medya Sanatçısı Güvenç Özel’in hazırladığı Togg’un USECASEMobility® konseptinde yeralan kavramları, sanatçının el eskizleri ile kelime bazlı yapay zeka algoritmaları kullanarak harmanladığı Tohum koleksiyonunun eşsiz bir parçasını, Yeni Medya Sanatçısı Mehmet Ünal yapay zeka algoritmalarıyla seslendirdi.\\",\\"onSale\\":true,\\"price\\":5,\\"initialPrice\\":5,\\"maxPrice\\":10,\\"royaltyFee\\":10,\\"bidEndDate\\":\\"2023-07-07T15:15:00.000Z\\",\\"launchDate\\":\\"2023-07-04T10:00:00.000Z\\",\\"listingId\\":17,\\"biddings\\":0,\\"highlighted\\":true,\\"nftType\\":\\"ERC721\\",\\"quantity\\":1,\\"qrCodeUrl\\":\\"https://ipfs.io/ipfs/QmPrcPEiGPbvQmQ8mB2ARQZWWgVCC1eTr2gH3bEs31HY5r\\"},\\"type\\":\\"BIDDING\\",\\"date\\":\\"2023-07-07T10:25:48.295Z\\",\\"updateDate\\":\\"2023-07-07T10:25:48.295Z\\",\\"destinationWallet\\":\\"0x621c180e17d7575a866a0925585797b0ceb7866a\\",\\"price\\":5,\\"status\\":\\"IN_PROGRESS\\",\\"customerId\\":\\"596637d9-9e22-4630-9ee5-09563dfbaba9\\",\\"highlighted\\":true}"\n');
        client.send("/topic/toggens.wallet.nfts ", {priority: 9}, 'got message from /topic/toggens.wallet.nfts with body "{\\"nftInternalId\\":\\"e5283d6e-e3d3-4088-b5e2-3e0e62e607be\\",\\"ownerWallet\\":\\"0x28dc4657bcb5ba0b75280640d2fdc039966acdab\\",\\"nftId\\":1058,\\"collectionAddress\\":\\"0xd2Cff2e132Da705ede369DdC9fCf7a3BAe190E06\\",\\"collectionValidated\\":true,\\"tokenUri\\":\\"ipfs://QmT1Cx8DDFgRdeEEax4snumwiZ8n3zJz1UZkztTw97DX1Q/1.json\\",\\"mediaTokenUri\\":\\"ipfs://QmXx2GazPnxHsUKyDTnHt5QEZcvgnAsVRtACvWzDKmEYtB/1.mp4\\",\\"mediaType\\":\\"VIDEO\\",\\"mediaFileUrl\\":\\"https://togg2023storage.togg.cloud/1.mp4\\",\\"thumbnailTokenUri\\":\\"ipfs://QmXx2GazPnxHsUKyDTnHt5QEZcvgnAsVRtACvWzDKmEYtB/1_thumbnail.webp\\",\\"thumbnailFileUrl\\":\\"https://togg2023storage.togg.cloud/1_thumbnail.webp\\",\\"rarity\\":\\"RARE\\",\\"name\\":\\"1003\\",\\"creator\\":\\"Togg\\",\\"description\\":\\"Siber-Fiziksel Mimar ve Yeni Medya Sanatçısı Güvenç Özel’in hazırladığı Togg’un USECASEMobility® konseptinde yeralan kavramları, sanatçının el eskizleri ile kelime bazlı yapay zeka algoritmaları kullanarak harmanladığı Tohum koleksiyonunun eşsiz bir parçasını, Yeni Medya Sanatçısı Mehmet Ünal yapay zeka algoritmalarıyla seslendirdi.\\",\\"onSale\\":false,\\"price\\":5,\\"initialPrice\\":5,\\"maxPrice\\":30,\\"royaltyFee\\":10,\\"bidEndDate\\":\\"2023-07-07T09:15:00.000Z\\",\\"launchDate\\":\\"2023-07-04T10:00:00.000Z\\",\\"biddings\\":0,\\"highlighted\\":true,\\"nftType\\":\\"ERC721\\",\\"quantity\\":1,\\"qrCodeUrl\\":\\"https://ipfs.io/ipfs/QmcPvYftgHLiPbonP7osjGAGYQ1VLQPNbx6wqgdikbA5N4\\"}"');
    }, 100);
});


const numConnections = 10000;
var counter = 0;

for (let i = 0; i < numConnections; i++) {
    const socket = io("http://40.114.180.190");
    //const socket = io("http://localhost:3000");

    socket.on("toggens.wallet.customers", (data) => {
        console.log('mesage geldi', data);
    });

    socket.on("/topic/toggens.marketplace.outbids", (data) => {
        counter++;
        console.log('mesage geldi', data.destination);
        console.log('connection size :', counter)
    });
};

