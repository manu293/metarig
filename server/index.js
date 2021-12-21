// imports
const path = require('path');
const fastifyStatic = require('fastify-static')
const fastify = require('fastify')({
    logger: true,
});
  
// Declaring routes
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
});

fastify.get('/api/v1/featuredCollections', function (request, reply) {
    const featuredCollections = [
        {
            id: "b26afe0f-adef-4951-a28a-a50276b9637d",
            displayImage: "https://collectible.sweet.io/series/931/image-front.jpg",
            collectibleInitator: "Macy's Collectibles",
            isCollectibleInitatorVerified: true,
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/803/avatar.jpg",
            collectibleName: "Macy’s Thanksgiving Parade Happy Dragon Balloon Art No. 1",
            collectiCurrectBit: "5400",
            bidEndDate: "01/16/2021",
            collectiblePayType: "auction",
        },
        {
            id: "aacda08d-ee76-4a58-902c-641f9ded33e9",
            displayImage: "https://collectible.sweet.io/series/932/image-front.jpg",
            collectibleInitator: "Macy's Collectibles",
            isCollectibleInitatorVerified: true,
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/803/avatar.jpg",
            collectibleName: "Macy’s Thanksgiving Parade Spaceman Balloon Art No. 1",
            collectiCurrectBit: "6900",
            bidEndDate: "01/06/2021",
            collectiblePayType: "auction",
        },
    ];
    reply.send({ featuredCollections })
});

fastify.get('/api/v1/featuredMarketPlaces', function (request, reply) {
    const featuredMarketPlaces = [
        {
            id: "8e5f57ad-1906-4916-be89-9c8750cd7b23",
            marketPlaceName: "Macy's Collectibles",
            marketPlaceBackgroundImage: "https://collectible.sweet.io/collection/44/banner.png",
            marketPlaceDescription: "America’s Department Store, an iconic brand and retail industry leader. Macy’s customers come to its stores, e-commerce site and mobile app for fashion, value and high-quality products. Macy’s is proud of its heritage and the unique role it plays in American culture and tradition.",
            marketPlaceAvatar: "https://collectible.sweet.io/collection/44/avatar.jpg",
        },
        {
            id: "bb7f1480-f7d6-4a40-9159-1f0d15fbbe54",
            marketPlaceName: "Chicago Blackhawks",
            marketPlaceBackgroundImage: "https://collectible.sweet.io/collection/22/banner.png",
            marketPlaceDescription: "The Blackhawks Home team led by Grant “Champ” Parker and their Away team guided by Madison “Maddy” Houser are in a perpetual battle to secure the love and devotion of Hawks fans everywhere. Collect your 8-Bit player NFT now along with game tickets where the rivaling teams will duke it out.",
            marketPlaceAvatar: "https://collectible.sweet.io/collection/22/avatar.png",
        },
        {
            id: "50295a40-cc3e-40a0-ac41-030c14ae374f",
            marketPlaceName: "Red Bull Racing",
            marketPlaceBackgroundImage: "https://collectible.sweet.io/collection/41/banner.png",
            marketPlaceDescription: "Innovation lies at the heart of everything we do at Red Bull Racing – because few things are quite so satisfying as having a fresh idea and making it work. In that spirit, we’re excited to announce the launch of our first set of Digital Collectibles. Alongside Tezos, our blockchain partner, we’re bringing the world of Red Bull Racing closer to our fans with a series of amazing digital artifacts. Our range of Collectibles will grow over time, each detailing an aspect of the Team, past or present, with each stunningly detailed design secured by a cryptographic token, ensuring its authenticity. We’ll gradually be unfolding the story of Red Bull Racing through our digital collection, delving into the history of the Team, our cars and drivers. New additions to the collection, and announcements of future drops will all be available here, so please stop by often – and happy collecting!",
            marketPlaceAvatar: "https://collectible.sweet.io/collection/41/avatar.png",
        },
        {
            id: "d0fce070-c9f4-4381-8d1d-baf18f366c87",
            marketPlaceName: "McLaren Racing",
            marketPlaceBackgroundImage: "https://collectible.sweet.io/collection/37/banner.png",
            marketPlaceDescription: "Welcome to the McLaren Racing Collective, a platform where you can own a piece of McLaren Racing and win amazing prizes. To start, we’ve split our Formula 1 car in to 22 3D parts for you to collect and complete to unlock an exclusive 3D interactive model of the MCL35M. The first builder of the complete car will be rewarded with an all-expense paid trip to a Grand Prix in 2022. Components will be released in 5 waves across 24 Oct – 4 Nov. Don’t worry if you can’t complete the car this time, this will be your destination for future drops with many more chances to collect and own a part of McLaren history.",
            marketPlaceAvatar: "https://collectible.sweet.io/collection/37/avatar.png",
        },
    ];
    reply.send({ featuredMarketPlaces})
});

fastify.get('/api/v1/fixedPriceCollectibles', function (request, reply) {
    const fixedPriceCollectibles = [
        {
            id: "2c84b5cc-bafe-4766-85b9-e359c63110a0",
            totalRuns: "20",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/947/images/front.png",
            collectibleInitator: "Incendium",
            isCollectibleInitatorVerified: false,
            collectibleName: "Grygox Warlord",
            collectibleDescription: "Proxima Fantasy V Card #",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/794/avatar.jpg",
            collectiblePrice: "99.99",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
        },
        {
            id: "aaa8447e-c0f3-49fc-a776-54d8cfd6560e",
            totalRuns: "12",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/918/images/front.png",
            collectibleInitator: "More Than Baseball",
            isCollectibleInitatorVerified: true,
            collectibleName: "Kike Hernandez",
            collectibleDescription: "Boston Strong V2",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/801/avatar.jpg",
            collectiblePrice: "19.99",
            colectibleRemaining: "37",
            collectiblePayType: "fixed",
        },
        {
            id: "e05a37bd-3dac-4894-8551-d8322783d7d0",
            totalRuns: "44",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/913/images/front.png",
            collectibleInitator: "More Than Baseball",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brennen Davis",
            collectibleDescription: "Suns in 4 V1",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/801/avatar.jpg",
            collectiblePrice: "9.99",
            colectibleRemaining: "176",
            collectiblePayType: "fixed",
        },
        {
            id: "42a43bec-2bb7-4c0b-aa4f-91a08416afee",
            totalRuns: "55",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/898/images/front.png",
            collectibleInitator: "Minook and the Brainbots",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brainbot #18 Upstunsor",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/788/avatar.jpg",
            collectiblePrice: "4.99",
            colectibleRemaining: "56",
            collectiblePayType: "fixed",
        },
        {
            id: "60e2e7df-e74b-40ec-902b-76714b5efd58",
            totalRuns: "10",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/892/images/front.png",
            collectibleInitator: "Minook and the Brainbots",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brainbot #45 Bullzorn",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/788/avatar.jpg",
            collectiblePrice: "2.78",
            colectibleRemaining: "187",
            collectiblePayType: "fixed",
        },
        {
            id: "8095c132-3ec7-4e67-9ff7-4deaf8034b72",
            totalRuns: "88",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/819/images/front.png",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Car Floor",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "249.00",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
        },
        {
            id: "2e050f72-0390-4217-a9b2-e120ada44b0a",
            totalRuns: "23",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/825/images/front.png",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Rear Wing",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "499.99",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
        },
        {
            id: "2c9ed5f5-ee22-4492-8025-0d06b013e3a9",
            totalRuns: "54",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/824/images/front.png",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Front Wing",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "499.00",
            colectibleRemaining: "1",
            collectiblePayType: "fixed",
        },
        {
            id: "f78eb088-bcd6-4de3-8a19-c8f2649727fe",
            totalRuns: "09",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/870/images/front.png",
            collectibleInitator: "Red Bull Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Sergio Perez Red Bull Racing RB16B",
            collectibleDescription: "Mexican GP, 2021",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/800/avatar.jpg",
            collectiblePrice: "39.99",
            colectibleRemaining: "8474",
            collectiblePayType: "fixed",
        },
    ];
    reply.send({ fixedPriceCollectibles })
});

fastify.get('/api/v1/auctions/:collectibleId', function (request, reply) {
    const {collectibleId} = request.params;
    
    const auctionsList = [
        {
            id: "b26afe0f-adef-4951-a28a-a50276b9637d",
            collectibleInitator: "Macy's Collectibles",
            isCollectibleInitatorVerified: true,
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/803/avatar.jpg",
            collectibleName: "Macy’s Thanksgiving Parade Happy Dragon Balloon Art",
            collectibleDescription: "What’s at the end of the rainbow? The Happy Dragon, of course. Candy-colored skies & a ROYGBIV 34th Street turns this unique art piece into a psychedelic dreamscape.",
            totalRuns: "1",
            number: "1",
            tokenType: "erc721",
            collectiCurrectBit: "5400",
            bidEndDate: "01/16/2021",
            collectibleDisplayType: "video",
            collectibleDisplayURL: "https://mediagateway.sweet.io/media/series/wX1O0Bbm/media.mp4",
            displayImage: "https://collectible.sweet.io/series/931/image-front.jpg",
        },
        {
            id: "aacda08d-ee76-4a58-902c-641f9ded33e9",
            collectibleInitator: "Macy's Collectibles",
            isCollectibleInitatorVerified: true,
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/803/avatar.jpg",
            collectibleName: "Macy’s Thanksgiving Parade Spaceman Balloon Art",
            collectibleDescription: "Whoa, talk about out of this world. Spaceman makes one giant leap for balloonkind at Macy’s Herald Square, where 34th street is reimagined as the ultimate moon walk (also his favorite dance move).",
            totalRuns: "1",
            number: "1",
            tokenType: "erc721",
            collectiCurrectBit: "6900",
            bidEndDate: "01/06/2021",
            collectibleDisplayType: "glb",
            displayImage: "https://collectible.sweet.io/series/932/image-front.jpg",
            // collectibleDisplayURL: "https://mediagateway.sweet.io/media/series/N2RX8WRm/media.mp4",
            collectibleDisplayURL: "https://mediagateway.sweet.io/media/series/xGqEwrbD/model-3d.glb"
        },

    ];

    const filteredAuctionsList = auctionsList.filter((auctionList) => auctionList.id === collectibleId);

    reply.send({ filteredAuctionsList })
});

fastify.get('/api/v1/sales/:collectibleId', function (request, reply) {
    const {collectibleId} = request.params;

    const salesList = [
        {
            id: "2c84b5cc-bafe-4766-85b9-e359c63110a0",
            totalRuns: "20",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/947/images/front.png",
            collectibleInitator: "Incendium",
            isCollectibleInitatorVerified: false,
            collectibleName: "Grygox Warlord",
            collectibleDescription: "Proxima Fantasy V Card #",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/794/avatar.jpg",
            collectiblePrice: "99.99",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
            collectibleDisplayType: "image",
        },
        {
            id: "aaa8447e-c0f3-49fc-a776-54d8cfd6560e",
            totalRuns: "12",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/918/images/front.png",
            collectibleInitator: "More Than Baseball",
            isCollectibleInitatorVerified: true,
            collectibleName: "Kike Hernandez",
            collectibleDescription: "Boston Strong V2",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/801/avatar.jpg",
            collectiblePrice: "19.99",
            colectibleRemaining: "37",
            collectiblePayType: "fixed",
            collectibleDisplayType: "image",
        },
        {
            id: "e05a37bd-3dac-4894-8551-d8322783d7d0",
            totalRuns: "44",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/913/images/front.png",
            collectibleInitator: "More Than Baseball",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brennen Davis",
            collectibleDescription: "Suns in 4 V1",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/801/avatar.jpg",
            collectiblePrice: "9.99",
            colectibleRemaining: "176",
            collectiblePayType: "fixed",
            collectibleDisplayType: "image",
        },
        {
            id: "42a43bec-2bb7-4c0b-aa4f-91a08416afee",
            totalRuns: "55",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/898/images/front.png",
            collectibleInitator: "Minook and the Brainbots",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brainbot #18 Upstunsor",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/788/avatar.jpg",
            collectiblePrice: "4.99",
            colectibleRemaining: "56",
            collectiblePayType: "fixed",
            collectibleDisplayType: "image",
        },
        {
            id: "60e2e7df-e74b-40ec-902b-76714b5efd58",
            totalRuns: "10",
            tokenType: "ERC721",
            collectibleImage: "https://collectible.sweet.io/series/892/images/front.png",
            collectibleInitator: "Minook and the Brainbots",
            isCollectibleInitatorVerified: true,
            collectibleName: "Brainbot #45 Bullzorn",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/788/avatar.jpg",
            collectiblePrice: "2.78",
            colectibleRemaining: "187",
            collectiblePayType: "fixed",
            collectibleDisplayType: "image",
        },
        {
            id: "8095c132-3ec7-4e67-9ff7-4deaf8034b72",
            totalRuns: "88",
            tokenType: "ERC721",
            collectibleImage: "https://mediagateway.sweet.io/media/series/M8R5mJRD/model-3d.glb",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Car Floor",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "249.00",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
            collectibleDisplayType: "glb",
        },
        {
            id: "2e050f72-0390-4217-a9b2-e120ada44b0a",
            totalRuns: "23",
            tokenType: "ERC721",
            collectibleImage: "https://mediagateway.sweet.io/media/series/4NbnJxbW/model-3d.glb",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Rear Wing",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "499.99",
            colectibleRemaining: "0",
            collectiblePayType: "fixed",
            collectibleDisplayType: "glb",
        },
        {
            id: "2c9ed5f5-ee22-4492-8025-0d06b013e3a9",
            totalRuns: "54",
            tokenType: "ERC721",
            collectibleImage: "https://mediagateway.sweet.io/media/series/xGqEwrbD/model-3d.glb",
            collectibleInitator: "McLaren Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Front Wing",
            collectibleDescription: "",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/799/avatar.jpg",
            collectiblePrice: "499.00",
            colectibleRemaining: "1",
            collectiblePayType: "fixed",
            collectibleDisplayType: "glb",
        },
        {
            id: "f78eb088-bcd6-4de3-8a19-c8f2649727fe",
            totalRuns: "09",
            tokenType: "ERC721",
            collectibleImage: "https://mediagateway.sweet.io/media/series/l21xKeqG/model-3d.glb",
            collectibleInitator: "Red Bull Racing",
            isCollectibleInitatorVerified: true,
            collectibleName: "Sergio Perez Red Bull Racing RB16B",
            collectibleDescription: "Mexican GP, 2021",
            collectibleInitatorAvatar: "https://static.assets.sweet.io/campaigns/800/avatar.jpg",
            collectiblePrice: "39.99",
            colectibleRemaining: "8474",
            collectiblePayType: "fixed",
            collectibleDisplayType: "glb",
        },
    ];

    const filterSalesList = salesList.map((sList) => sList.id === collectibleId);

    reply.send({ filterSalesList })
});

if (process.env.NODE_ENV === 'production') {
    fastify.register(fastifyStatic, {
        root: path.join(__dirname, 'client/build')
    });
  
    fastify.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
  
// Run the server!
fastify.listen(process.env.PORT || 3001, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log("Server is listening on", address);
});