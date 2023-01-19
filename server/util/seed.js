let makeup = [
    { 
        brand: "ROMAND",
        product: "eyeshadow",
        price:"16.00",
        description:"Very pigmented eyeshadow"
    },
    { 
        brand: "LAKA",
        product: "liptint",
        price: "24.00",
        description: "smooth lip product"
        
    },
    { 
        brand: "Joseon Beauty",
        product: "sunscreen",
        price: "11.00",
        description: "not make you feel gross"
        
    },
    { 
        brand: "Clio",
        product: "mascara",
        price: "14.00",
        description: "not weak mascara"
        
    },
    { 
        brand: "Juicy Pang",
        product: "blush",
        price: "6.00",
        description: "liquid gold"
        
    },
    { 
        brand: "Ink velvet",
        product: "lip tint",
        price: "8.00",
        description: "smooooth"
        
    },
    { 
        brand: "Etude",
        product: "lash primer",
        price: "5.00",
        description: "eyelashes dont fall"
        
    },
    { 
        brand: "Colorgram",
        product: "glitter",
        price: "11.00",
        description: "sparkles"
        
    },
    { 
        brand: "Moonshot",
        product: "cushion foundation",
        price: "30.00",
        description: "can't see blemish"
        
    },
    { 
        brand: "Clio",
        product: "brown eyeliner",
        price: "15.00",
        description: "nautral"
        
    },
    { 
        brand: "Clio",
        product: "concealer",
        price: "20.00",
        description: "covers"
        
    },
    { 
        brand: "Kaja",
        product: "blush stamp",
        price: "25.00",
        description: "not favorite but so cute"
        
    },
    { 
        brand: "Etude",
        product: "eyebrow",
        price: "13.00",
        description: "nice eyebrow shape"
        
    },
    { 
        brand: "Holika",
        product: "double eyelid tape",
        price: "13.00",
        description: "make me look like i have big eye"
        
    },
    { 
        brand: "clio",
        product: "eyeshadow",
        price: "20.00",
        description: "pretty"
        
    },
    
]

let photos = [
    {
        makeupId:1,
        url: 'https://www.koinshop.com/wp-content/uploads/2021/08/ROMAND-Better-Than-Palette-Pampas-Garden-01-8g.jpg',
        primaryPhoto: true
    }, 
    {
        makeupId: 2,
        url: 'https://cafe24img.poxo.com/beautyboxkorea/web/upload/NNEditor/20221110/LAKA-Jelling-Nude-Gloss-4.5g_01.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 3,
        url: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/834/XXL_p0162883495.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 4,
        url: 'https://m.media-amazon.com/images/I/51rAWTdG2ZL.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 5,
        url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/apu/apu45737/l/10.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 6,
        url: 'https://i5.walmartimages.com/asr/ecfb3511-4f73-4f16-a100-181e39861a0f.6f22c2a31fb8d0dd8c26caa03fbdcd4c.jpeg',
        primaryPhoto:true
    },
    {
        makeupId: 7,
        url: 'https://www.koinshop.com/wp-content/uploads/2021/05/ETUDE-HOUSE-Dr.Mascara-Fixer-Black-No02-6g.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 8,
        url: 'https://m.media-amazon.com/images/I/71BqD8ZRSQL.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 9,
        url: 'https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/m/o/moonshot-micro-glassyfit-cushion-spf-50-pa-15g-423.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 10,
        url: 'https://cafe24img.poxo.com/beautynetkr/web/product/big/202202/a424da5556be21ac4a03be6bed773814.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 11,
        url: 'https://cdn.shopify.com/s/files/1/0049/4544/4952/products/CLIO-Kill-Cover-Liquid-Concealer_b23ae384-bc41-48b7-b8f3-a64534c419a7.jpg?v=1589271142',
        primaryPhoto:true
    },
    {
        makeupId: 12,
        url: 'https://flipfit-cdn.akamaized.net/flipfit-prod-tmp/items/1660724787631-070351733FLI017.webp',
        primaryPhoto:true
    },
    {
        makeupId: 13,
        url: 'https://m.media-amazon.com/images/I/41TRrde4n+L._AC_.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 14,
        url: 'https://i.ebayimg.com/images/g/jJEAAOSwc8xgyXGx/s-l1600.jpg',
        primaryPhoto:true
    },
    {
        makeupId: 15,
        url: 'https://i.pinimg.com/736x/9f/06/2c/9f062cf6e1a54256502d937728b776cd.jpg',
        primaryPhoto:true
    },
]

let user = [
{

    username: "sarah",
    password: "ahn",
    admin:false,

},
    
]

const seed = async () => {
    const {Makeup,Photo, User} = require('./models')
    await Makeup.bulkCreate(makeup)
    await Photo.bulkCreate(photos)
    await User.bulkCreate(user)
    console.log("------------SEED COMPLETE------------")
}

module.exports = seed