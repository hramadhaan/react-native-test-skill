const DUMMY_DATA = [
  {
    id: "1",
    name: "Metallica Concert",
    place: "Palace Grounds",
    paid: true,
    images: [
      "https://www.nme.com/wp-content/uploads/2020/08/Metallica-2.jpg",
      "https://townsquare.media/site/366/files/2018/10/metallica_by_Ross_Halfin.jpg",
    ],
    description:
      "Legendary metal rockers Metallica having been appearing live on stage almost every year since they formed in 1982, and while we dont know much about their next tour plans just yet, well update this website as soon as they make an official announcement — which makes it a great resource for fans hoping to catch the Bay Area rockers live and in concert!  Not only that, but well also post tickets for every show and at every available price point.  We want to help you catch James Hetfield, Lars Ulrich, Kirk Hammett, and Robert Trujillo, live on stage and performing their most iconic cuts.",
  },
  {
    id: "2",
    name: "Saree Exhibition",
    place: "Malleswaram Grounds",
    paid: false,
    images: [
      "https://4.bp.blogspot.com/-eoLcwPprOfA/VO7RdQetNjI/AAAAAAAAAKQ/TUoVIqMDQMg/s1600/DSC_0390.JPG",
      "https://www.picturesindia.com/media/entertainment/11_001084.jpg",
      ,
    ],
    description:
      "The exhibition has a wonderful showcasing of traditional, handloom and silk collection saree, kurtis, dress materials, stoles, and dupattas. A total of 60 stalls from all over the country has taken part in the exhibition.",
  },
  {
    id: "3",
    name: "Wine Tasting Event",
    place: "Links Brewery",
    paid: true,
    images: [
      "https://restaurantecasa9.com/wp-content/uploads/2020/03/Wine-Tasting-Event.jpg",
      "https://images.unsplash.com/photo-1561461056-77634126673a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    ],
    description:
      "Wine tasting is the sensory examination and evaluation of wine. While the practice of wine tasting is as ancient as its production, a more formalized methodology has slowly become established from the 14th century onwards.",
  },
  {
    id: "4",
    name: "Startups Meet",
    place: "Kanteerava Indoor Stadium",
    paid: true,
    images: [
      "https://www.irishexaminer.com/cms_media/module_img/190/95099_1_articleinline_bn-973443_138533433255411792655cf137157d0b.jpg",
      "https://siliconcanals.com/wp-content/uploads/2018/10/startupbootcamp.jpg",
    ],
    description:
      "This group meets to connect startup founders with early stage Angel Investors and have a chance to pitch their company. Designed to reduce the inefficiencies with multiple pitches and running around town trying to get introductions to Angel Investors. ",
  },
  {
    id: "5",
    name: "Summer Noon Party",
    place: "Kumara Park",
    paid: true,
    images: [
      "https://greenweddingshoes.com/wp-content/uploads/2018/07/moonchild-bachelorette-01.jpg",
      "https://d3emaq2p21aram.cloudfront.net/media/cache/venue_roundup_single_image/uploads/SummerMoon-TheVenueReport-HeatherThompson-06.jpg",
    ],
    description:
      "As we announced on Tuesday, we are pleased to say that we are holding our second Head for Points reader Summer Party on Monday 8th July.\nThe first batch of tickets will be sold at noon today.  If you won’t be behind a computer at noon (although the Eventbrite app does the job too) the final batch will be sold at noon on Sunday.",
  },
  {
    id: "6",
    name: "Rock and Roll Nights",
    place: "Sarjapur Road",
    paid: true,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61VH4Hrc1PL.jpg",
      "https://3.bp.blogspot.com/-OIR_MOQwhf0/WoW-z36wmjI/AAAAAAAAAIU/sxCYIfNA5Zk98d9rLV5L_hpG1ke1bHwvwCK4BGAYYCw/s400/Banner-RR-2018-01%2B%25E2%2580%2593%2Bmuoks%2B%25E2%2580%2593%2BSMALL.jpg",
    ],
    description:
      "Rock 'n Roll Nights is the eighth studio album by Canadian rock band BTO, released in 1979. This record was one of three BTO albums that did not feature co-founder Randy Bachman. Rock n' Roll Nights is also one of the two albums from this band to feature Jim Clench, formerly of April Wine.",
  },
  {
    id: "7",
    name: "Barbecue Fridays",
    place: "Whitefield",
    paid: true,
    images: [
      "https://www.pe.com/wp-content/uploads/2019/02/RPE-L-PHILS-0205-1.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/10/ff/de/9c/bbq-chicken-salad.jpg",
    ],
    description:
      "Summer is here, and that means it’s time to fire up the grill and move the party outside. Whether you’re hanging out with family or inviting a slew of friends, a Garden Barbeque at the Dharmawangsa Jakarta is a great option for a fantastic Friday evening. Held every Friday from 6pm to 10pm at the hotel’s Jakarta Restaurant and The Courtyard, guests can unwind and sit back amidst a relaxing open-air dining experience while sampling the restaurant’s ocean-fresh grilled seafood and fish, clams, prime quality succulent steak and ribs, as well as traditional Indonesian dishes.",
  },
  {
    id: "8",
    name: "Summer Workshop",
    place: "Indiranagar",
    paid: false,
    images: [
      "https://www.lamudi.com.ph/journal/wp-content/uploads/2019/03/sc-1.jpg",
      "https://www.lisburnmuseum.com/wp-content/uploads/2018/07/summer-workshops-2018.jpg",
    ],
    description:
      "Over the course of the next two weeks (July 12th-25th), over 200 writers will be gathering online to participate in our 2020 Summer Workshop. We will be streaming many of the lectures, conversations, and readings that will be taking place. We look forward to sharing space with you soon.",
  },
  {
    id: "9",
    name: "Impressions & Expressions",
    place: "MG Road",
    paid: false,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61+YffUjRzL.jpg",
      "https://www.washingtonblade.com/content/files/2014/09/A_work_by_Natalia-Arias_insert_courtesy_Arias.jpg",
    ],
    description:
      "Traditionally, marketing is a method of ensuring a business’s offerings or message are seen by as many eyeballs as possible in order to keep a business prominent and successful. This was the route taken when marketing messages circulated mediums such as television and billboards. How consumers reacted to such messages was measured primarily by purchases. This approach is tried and true, but has recently taken a back seat thanks to social media.",
  },
  {
    id: "10",
    name: "Italian Carnival",
    place: "Electronic City",
    paid: false,
    images: [
      "https://i1.wp.com/3.bp.blogspot.com/-BvN9bP-MeQc/Vr8NcwH7BwI/AAAAAAAAGnc/4hlb97Mp6VE/s1600/Mask%252C%2BVenice%2BCarnival%2B2011%252C%2BVenice%252C%2BVeneto%252C%2BItaly-22.jpg",
      "https://www.reginacoeli.com/static/shared/media/cache/carnaval%20Venetie.2579ffaa4e098a31224c68f9ccf1bbcc.jpg",
    ],
    description:
      "The Carnival of Venice (Italian: Carnevale di Venezia) is an annual festival held in Venice, Italy. The carnival ends with the Christian celebration of Lent, forty days before Easter, on Shrove Tuesday (Martedì Grasso or Mardi Gras), the day before Ash Wednesday. The festival is world-famous for its elaborate masks.",
  },
];

export default DUMMY_DATA;
