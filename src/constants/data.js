import images from "./images";

const wines = [
    {
        title: "Sula Rasa Shiraz",
        price: "₹2,500",
        tags: "Nashik | Bottle",
    },
    {
        title: "Grover Zampa La Réserve",
        price: "₹2,200",
        tags: "Bangalore | Bottle",
    },
    {
        title: "Fratelli Cabernet Sauvignon",
        price: "₹2,000",
        tags: "Solapur | 750 ml",
    },
    {
        title: "York Arros Red Blend",
        price: "₹1,800",
        tags: "Nashik | 750 ml",
    },
    {
        title: "Reveilo Chardonnay",
        price: "₹1,600",
        tags: "Nashik | 750 ml",
    },
];

const cocktails = [
    {
        title: "Desi Mojito",
        price: "₹500",
        tags: "Mint | Lime | White Rum | Soda | Chaat Masala twist",
    },
    {
        title: "Masala Old Fashioned",
        price: "₹650",
        tags: "Bourbon | Jaggery Syrup | Angostura | Indian spices",
    },
    {
        title: "Kokum Fizz",
        price: "₹450",
        tags: "Kokum | Gin | Tonic | Lemon zest",
    },
    {
        title: "Aam Panna Margarita",
        price: "₹600",
        tags: "Raw Mango | Tequila | Black salt rim",
    },
    {
        title: "Filter Coffee Martini",
        price: "₹700",
        tags: "Cold brew decoction | Vodka | Coffee liqueur",
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: "Times Food Award",
        subtitle:
            "Recognized for excellence in regional Indian cuisine with modern flair.",
    },
    {
        imgUrl: images.award01,
        title: "Best Indian Fusion Bar",
        subtitle:
            "Awarded for blending traditional ingredients with innovative mixology.",
    },
    {
        imgUrl: images.award05,
        title: "Hospitality Icon Award",
        subtitle:
            "For outstanding service and unforgettable dining experiences in India.",
    },
    {
        imgUrl: images.award03,
        title: "Chef of the Year",
        subtitle:
            "Honoring culinary mastery rooted in Indian heritage and bold creativity.",
    },
];

export default { wines, cocktails, awards };
