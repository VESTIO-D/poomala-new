export interface Place {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string[];
  image: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: string[];
  nearbyAttractions: string[];
  latitude: number;
  longitude: number;
  metaTitle: string;
  metaDescription: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  metaTitle: string;
  metaDescription: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "VisitPoomala",
  description:
    "Discover the untouched beauty of Poomala, Kerala's hidden gem. Explore serene dams, cascading waterfalls, and breathtaking viewpoints in the heart of Thrissur district.",
  url: "https://visitpoomala.com",
  whatsapp: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "hello@visitpoomala.com",
  emailjs: {
    serviceId: "service_hicnqvr",
    templateId: "template_dypyf0w",
    publicKey: "vMsMbWHAg1tLADEDY",
  },
  social: {
    instagram: "https://instagram.com/visitpoomala",
    facebook: "https://facebook.com/visitpoomala",
    twitter: "https://twitter.com/visitpoomala",
  },
};

export const places: Place[] = [
  {
    slug: "poomala-dam",
    name: "Poomala Dam",
    shortDescription:
      "A serene reservoir nestled in the hills of Thrissur",
    longDescription: [
      "Poomala Dam is one of the most tranquil and picturesque destinations in Thrissur district, Kerala. Nestled amidst rolling hills and lush greenery, this earthen dam creates a stunning reservoir that reflects the beauty of the surrounding Western Ghats. The dam was constructed across the Poomala River, a tributary of the Karuvannur River, and has been a vital source of irrigation for the region while simultaneously emerging as a beloved tourist destination.",
      "The journey to Poomala Dam itself is a feast for the senses. Winding roads through rubber plantations and coconut groves gradually give way to panoramic views of the reservoir. The cool breeze that sweeps across the water, the gentle rustling of bamboo groves, and the distant calls of exotic birds create an atmosphere of profound serenity. Visitors often find themselves lingering by the waterfront, captivated by the mirror-like surface of the lake during early mornings and the golden hues that paint the landscape during sunset.",
      "What makes Poomala Dam truly special is its relative obscurity compared to more commercialized destinations in Kerala. Here, you can experience the authentic charm of rural Kerala without the crowds. The local community has embraced sustainable tourism, offering boat rides, nature walks, and traditional Kerala meals that showcase the region's rich culinary heritage. Whether you are seeking solitude, adventure, or a family outing, Poomala Dam offers an experience that lingers in your memory long after you leave.",
    ],
    image: "/poomala_dam.jpg",
    gallery: [
      "/poomala_dam.jpg",
      "/IMG-20251101-WA0013.jpg",
      "/IMG-20251101-WA0004.jpg",
      "/IMG-20251101-WA0010.jpg",
    ],
    highlights: [
      "Scenic reservoir with boating facilities",
      "Surrounded by lush Western Ghats hills",
      "Ideal for photography and nature walks",
      "Sunset viewpoints with panoramic vistas",
      "Traditional Kerala cuisine at local eateries",
      "Peaceful atmosphere away from tourist crowds",
    ],
    bestTimeToVisit:
      "September to March. The monsoon season (June-August) offers lush greenery but with heavy rainfall. Post-monsoon and winter months provide pleasant weather ideal for outdoor activities and sightseeing.",
    howToReach: [
      "By Air: Cochin International Airport (75 km) is the nearest airport. Taxis and buses are available from the airport.",
      "By Rail: Thrissur Railway Station (30 km) is the nearest major railhead, well-connected to all major cities in India.",
      "By Road: Well-connected by road from Thrissur city. Regular bus services and taxi services are available. The drive through the countryside is scenic and enjoyable.",
    ],
    nearbyAttractions: [
      "Vattayi Waterfalls",
      "Cheppara Viewpoint",
      "Vilangan Kunnu",
      "Athirappilly Waterfalls",
      "Thrissur Zoo and Museum",
    ],
    latitude: 10.5874,
    longitude: 76.2412,
    metaTitle: "Poomala Dam Thrissur | Scenic Reservoir & Tourist Spot",
    metaDescription:
      "Visit Poomala Dam, a serene reservoir nestled in the hills of Thrissur, Kerala. Enjoy boating, nature walks, and breathtaking sunset views at this hidden gem of the Western Ghats.",
  },
  {
    slug: "vattayi-waterfalls",
    name: "Vattayi Waterfalls",
    shortDescription:
      "A hidden cascade surrounded by lush tropical forests",
    longDescription: [
      "Vattayi Waterfalls is a mesmerizing natural wonder tucked away in the dense tropical forests of Thrissur district. This hidden cascade tumbles down rocky cliffs into a crystal-clear pool below, creating a scene of breathtaking beauty that feels almost untouched by time. The waterfall is at its magnificent best during the monsoon months when the increased water flow transforms it into a thundering spectacle of nature's raw power.",
      "The trek to Vattayi Waterfalls is an adventure in itself. A moderate trail through rubber plantations, bamboo groves, and patches of evergreen forest leads you to this secluded spot. Along the way, the sound of rushing water grows louder, building anticipation until the waterfall finally reveals itself through the canopy. The mist that rises from the base of the falls creates a cool microclimate, offering welcome relief from Kerala's tropical warmth.",
      "Vattayi is more than just a waterfall — it is a complete ecosystem. The surrounding forests are home to a remarkable variety of flora and fauna, including several species of birds, butterflies, and medicinal plants. Local guides can help you spot hornbills, Malabar giant squirrels, and if you are fortunate, the elusive Nilgiri langur. The pool at the base of the falls is safe for swimming during the dry season, making it a perfect spot for a refreshing dip in nature's own swimming pool.",
    ],
    image: "/vattayiwwaterfallls.jpg",
    gallery: [
      "/vattayiwwaterfallls.jpg",
      "/IMG-20251101-WA0007.jpg",
      "/IMG-20251101-WA0014.jpg",
      "/IMG-20251101-WA0010.jpg",
    ],
    highlights: [
      "Pristine waterfall in untouched forest setting",
      "Natural pool safe for swimming in dry season",
      "Rich biodiversity with exotic bird species",
      "Moderate trek through scenic plantations",
      "Best visited during and after monsoon",
      "Perfect for nature photography enthusiasts",
    ],
    bestTimeToVisit:
      "July to February. The waterfall is most spectacular during and immediately after the monsoon (July-September). The dry season (October-February) offers safer swimming conditions and easier trekking.",
    howToReach: [
      "By Air: Cochin International Airport (80 km) is the nearest airport.",
      "By Rail: Thrissur Railway Station (35 km) is the nearest major railhead.",
      "By Road: Accessible via Thrissur-Poomala road. From the parking area, a moderate 20-minute trek through the forest leads to the waterfall. Local guides are recommended.",
    ],
    nearbyAttractions: [
      "Poomala Dam",
      "Cheppara Viewpoint",
      "Peechi Dam",
      "Vazhachal Waterfalls",
      "Sholayar Reserve Forest",
    ],
    latitude: 10.5723,
    longitude: 76.2189,
    metaTitle:
      "Vattayi Waterfalls Thrissur | Hidden Waterfall in Kerala",
    metaDescription:
      "Discover Vattayi Waterfalls, a hidden cascade surrounded by lush tropical forests in Thrissur, Kerala. Trek through pristine wilderness to reach this breathtaking natural wonder.",
  },
  {
    slug: "cheppara-viewpoint",
    name: "Cheppara Viewpoint",
    shortDescription:
      "Panoramic hilltop views of the Western Ghats",
    longDescription: [
      "Cheppara Viewpoint stands as one of the most spectacular vantage points in the Thrissur district, offering panoramic views that stretch across the undulating hills of the Western Ghats. Perched atop a rocky outcrop, this viewpoint provides a 360-degree vista of verdant valleys, winding rivers, and distant mountain ranges that seem to stretch endlessly towards the horizon. It is the kind of place that makes you pause, breathe deeply, and simply take it all in.",
      "The viewpoint is particularly renowned for its sunrise and sunset views. Early morning visitors are treated to the magical sight of mist-filled valleys gradually revealing themselves as the sun climbs above the eastern hills. The sunset views are equally dramatic, with the sky transforming into a canvas of warm oranges, deep reds, and soft purples as the sun descends behind the Western Ghats. Photographers and nature lovers consider Cheppara a must-visit destination for capturing the raw beauty of Kerala's highlands.",
      "Beyond the views, Cheppara offers a sense of tranquility that is increasingly rare in popular tourist spots. The rocky terrain around the viewpoint is dotted with hardy shrubs and wildflowers, and the cool mountain breeze carries the scent of eucalyptus and wild herbs. Small tea stalls near the viewpoint serve piping hot chai and local snacks, adding a touch of warmth to the mountain experience. The road to Cheppara passes through charming villages and spice plantations, making the journey as rewarding as the destination itself.",
    ],
    image: "/cheppara-20230927094832233505.webp",
    gallery: [
      "/cheppara-20230927094832233505.webp",
      "/IMG-20251101-WA0013.jpg",
      "/IMG-20251101-WA0004.jpg",
      "/IMG-20251101-WA0007.jpg",
    ],
    highlights: [
      "360-degree panoramic views of the Western Ghats",
      "Stunning sunrise and sunset viewpoints",
      "Cool mountain climate year-round",
      "Rocky terrain with wild flora",
      "Local tea stalls with authentic chai",
      "Scenic drive through spice plantations",
    ],
    bestTimeToVisit:
      "October to March for clear skies and pleasant weather. Early morning visits are recommended for sunrise views. Avoid heavy monsoon days (July-August) as the roads can be slippery and views obscured by clouds.",
    howToReach: [
      "By Air: Cochin International Airport (70 km) is the nearest airport.",
      "By Rail: Thrissur Railway Station (28 km) is the nearest major railhead.",
      "By Road: Well-connected by road from Thrissur. The viewpoint is accessible by car, with a short walk from the parking area. Early morning drives are recommended for the best experience.",
    ],
    nearbyAttractions: [
      "Poomala Dam",
      "Vattayi Waterfalls",
      "Vilangan Kunnu",
      "Peechi Wildlife Sanctuary",
      "Thrissur City and Vadakkunnathan Temple",
    ],
    latitude: 10.5956,
    longitude: 76.2567,
    metaTitle:
      "Cheppara Viewpoint Thrissur | Panoramic Hill Views",
    metaDescription:
      "Experience breathtaking 360-degree views of the Western Ghats from Cheppara Viewpoint in Thrissur, Kerala. A must-visit for sunrise, sunset, and panoramic mountain vistas.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/IMG-20251101-WA0013.jpg",
    alt: "Panoramic view of Poomala hills and reservoir at golden hour",
    width: 1200,
    height: 800,
  },
  {
    src: "/IMG-20251101-WA0004.jpg",
    alt: "Lush green landscapes of the Poomala region in Thrissur",
    width: 1200,
    height: 800,
  },
  {
    src: "/IMG-20251101-WA0007.jpg",
    alt: "Tropical forest trails and streams near Poomala",
    width: 1200,
    height: 800,
  },
  {
    src: "/IMG-20251101-WA0010.jpg",
    alt: "Serene backwaters and countryside of Poomala",
    width: 1200,
    height: 800,
  },
  {
    src: "/IMG-20251101-WA0014.jpg",
    alt: "Misty morning views from the hills of Poomala",
    width: 1200,
    height: 800,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "discovering-poomala-keralas-best-kept-secret",
    title: "Discovering Poomala: Kerala's Best Kept Secret",
    excerpt:
      "Nestled in the heart of Thrissur district lies a destination that most travellers to Kerala have never heard of. Poomala is a world away from the well-trodden tourist trails, offering an authentic experience of God's Own Country.",
    content: [
      "Nestled in the heart of Thrissur district lies a destination that most travellers to Kerala have never heard of. Poomala is a world away from the well-trodden tourist trails of Munnar, Alleppey, and Kochi, offering instead an authentic and unhurried experience of God's Own Country. This is the Kerala that locals know and love — a place where time moves slowly, where the air is thick with the scent of spices and rain-kissed earth, and where every bend in the road reveals a view more beautiful than the last.",
      "The Poomala region is defined by its dramatic landscape. Rolling hills covered in rubber and coffee plantations give way to deep valleys carved by ancient rivers. The Poomala Dam, the region's most famous landmark, creates a vast reservoir that mirrors the sky and surrounding hills, creating a scene of almost impossible beauty. But the dam is just the beginning. Venture further and you will discover hidden waterfalls like Vattayi, breathtaking viewpoints like Cheppara, and villages where traditional Kerala life continues much as it has for centuries.",
      "What truly sets Poomala apart is its people. The local community has preserved a way of life that is deeply connected to the land. Farmers tend to their spice gardens with the same care their ancestors did. Fishermen cast their nets in the reservoir at dawn. Women prepare traditional Sadhya feasts on banana leaves during festivals. Visitors are welcomed not as tourists but as guests, invited to share in the simple pleasures of rural Kerala — a home-cooked meal, a walk through the plantations, or a quiet evening watching the sunset over the Western Ghats.",
      "For the conscious traveller, Poomala represents something increasingly rare: a destination that has not been overrun by mass tourism. The infrastructure is simple but adequate, the environment is pristine, and the experiences are genuine. Whether you are a solo traveller seeking solitude, a couple looking for a romantic retreat, or a family wanting to introduce children to the wonders of nature, Poomala delivers an experience that is both deeply personal and profoundly memorable.",
      "Getting to Poomala is part of the adventure. The nearest city, Thrissur, is well-connected by rail and road to all major cities in India. From Thrissur, a scenic 45-minute drive through the countryside brings you to the Poomala region. The roads are good, and the journey itself — past rice paddies, coconut groves, and village temples — is a beautiful introduction to what awaits. Come discover Poomala before the rest of the world does.",
    ],
    image: "/IMG-20251101-WA0013.jpg",
    author: "VisitPoomala Team",
    date: "2025-01-15",
    category: "Travel Stories",
    tags: ["Poomala", "Kerala", "Hidden Gems", "Thrissur", "Travel Guide"],
    readTime: "6 min read",
    metaTitle:
      "Discovering Poomala: Kerala's Best Kept Secret",
    metaDescription:
      "Uncover Poomala, Kerala's best kept secret in Thrissur district. Experience authentic rural Kerala with serene dams, hidden waterfalls, and breathtaking viewpoints away from tourist crowds.",
  },
  {
    slug: "top-5-things-to-do-in-poomala-this-monsoon",
    title: "Top 5 Things to Do in Poomala This Monsoon",
    excerpt:
      "The monsoon transforms Poomala into a verdant paradise. From waterfall treks to misty hill walks, here are the five experiences you simply cannot miss during the rainy season in this corner of Kerala.",
    content: [
      "When the southwest monsoon arrives in Kerala, Poomala undergoes a magical transformation. The hills turn a deeper shade of green, the waterfalls swell to magnificent proportions, and the air is filled with the intoxicating scent of wet earth and blooming flora. While many travellers avoid Kerala during the monsoon, those in the know understand that this is when Poomala is at its most dramatic and beautiful.",
      "First on the list is a visit to Vattayi Waterfalls during peak flow. The waterfall, which is impressive enough during the dry season, becomes a thundering cascade during the monsoon months of July and August. The trek through the rain-soaked forest is an adventure in itself, with leeches (wear proper gear!), slippery trails, and the constant accompaniment of rain on the canopy above. The reward is a sight that few have witnessed — a wall of water tumbling down moss-covered cliffs into a churning pool below.",
      "Second, experience the Poomala Dam at its fullest. The reservoir swells during the monsoon, and the dam's spillway often opens, creating a spectacular cascade of water. The viewpoints around the dam offer stunning vistas of the water-filled landscape, and the monsoon clouds rolling over the hills create an ever-changing tableau of light and shadow. Pack a thermos of chai and find a quiet spot — this is monsoon magic at its finest.",
      "Third, take a misty morning walk to Cheppara Viewpoint. The monsoon clouds often blanket the valleys below, creating a sea of mist with only the hilltops visible. There is something deeply meditative about standing above the clouds, watching them drift and part to reveal glimpses of the world below. The temperature is pleasantly cool, and the visibility, while variable, can produce some of the most dramatic photographs you will ever take.",
      "Fourth, indulge in monsoon cuisine. Kerala's culinary traditions are closely tied to the seasons, and the monsoon brings its own special dishes. Warm kanji (rice porridge) with side dishes, freshly fried banana fritters, and steaming cups of spiced tea are the perfect companions to a rainy day. Local eateries around Poomala serve these seasonal specials, and the experience of eating hot food while listening to the rain is simply unmatched.",
      "Fifth, simply embrace the rain. In Poomala, the monsoon is not something to escape from — it is something to celebrate. Sit on a covered veranda and watch the rain transform the landscape. Listen to the symphony of raindrops on tin roofs and leaves. Walk through plantations where every surface glistens with moisture. The monsoon in Poomala is not just a season; it is an experience that will stay with you forever.",
    ],
    image: "/IMG-20251101-WA0007.jpg",
    author: "VisitPoomala Team",
    date: "2025-06-10",
    category: "Seasonal Guide",
    tags: ["Monsoon", "Poomala", "Waterfalls", "Kerala Monsoon", "Things to Do"],
    readTime: "7 min read",
    metaTitle:
      "Top 5 Things to Do in Poomala This Monsoon",
    metaDescription:
      "Make the most of Kerala's monsoon season in Poomala. From waterfall treks and misty viewpoints to monsoon cuisine, discover 5 unforgettable rainy season experiences.",
  },
  {
    slug: "complete-travel-guide-to-thrissur-district",
    title: "A Complete Travel Guide to Thrissur District",
    excerpt:
      "Thrissur, the cultural capital of Kerala, offers a remarkable blend of heritage, nature, and spiritual experiences. This comprehensive guide covers everything you need to plan an unforgettable trip.",
    content: [
      "Thrissur, often called the Cultural Capital of Kerala, is a district that rewards the curious traveller with an extraordinary range of experiences. From ancient temples and vibrant festivals to pristine forests and serene backwaters, Thrissur encapsulates the very essence of Kerala. This guide will help you navigate the district's many offerings and plan a trip that combines the best of culture, nature, and relaxation.",
      "The city of Thrissur itself is built around the magnificent Vadakkunnathan Temple, a sprawling complex that dates back over a thousand years. The temple's classical Kerala architecture, with its towering gopurams and intricately carved wooden panels, is a masterpiece of Dravidian design. The city radiates outward from the temple in concentric circles, creating a unique urban layout that has earned Thrissur the nickname 'The Temple Town'. During the famous Thrissur Pooram festival in April-May, the city erupts in a spectacle of decorated elephants, traditional percussion ensembles, and fireworks that is unlike anything else in the world.",
      "Beyond the city, Thrissur district reveals its natural wonders. The Athirappilly and Vazhachal waterfalls, often called the Niagara of India, are among the most spectacular in the country. The Peechi Wildlife Sanctuary offers a chance to spot elephants, bison, and over 60 species of birds in their natural habitat. The Poomala region, with its dam, waterfalls, and viewpoints, provides a quieter but equally rewarding alternative to the more popular destinations.",
      "Thrissur is also a gateway to Kerala's rich cultural traditions. The Kerala Kalamandalam, a premier public institution for the preservation and training in traditional art forms, is located in Cheruthuruthy. Here, you can watch students practice Kathakali, Mohiniyattam, and Koodiyattam — art forms that have been recognized by UNESCO as Masterpieces of the Oral and Intangible Heritage of Humanity. The district is also known for its Ayurvedic traditions, with several authentic centres offering treatments and wellness programmes.",
      "When it comes to food, Thrissur does not disappoint. The district is famous for its Sadhya — the traditional Kerala feast served on banana leaves, typically featuring over 25 dishes. Local specialties include Unnakaya (a sweet-snack made from plantain and coconut), Thrissur-style biryani, and an array of seafood preparations from the coastal areas. The street food culture is vibrant too, with thattu dosa stalls and chai shops serving as social hubs across the district.",
      "Practical information: Thrissur is well-connected by rail and road. The nearest airport is Cochin International Airport, about 55 km away. The best time to visit is September to March, though the monsoon months (June-August) offer their own unique charm. Accommodation ranges from heritage homestays and Ayurvedic resorts to budget hotels and government guest houses. Plan at least 4-5 days to explore the district properly, and longer if you want to venture into the remoter areas like Poomala and the forest regions.",
    ],
    image: "/IMG-20251101-WA0004.jpg",
    author: "VisitPoomala Team",
    date: "2025-03-22",
    category: "Travel Guide",
    tags: ["Thrissur", "Kerala", "Travel Guide", "Culture", "Festivals"],
    readTime: "8 min read",
    metaTitle:
      "Complete Travel Guide to Thrissur District, Kerala",
    metaDescription:
      "Plan your trip to Thrissur, Kerala's cultural capital. From Vadakkunnathan Temple and Thrissur Pooram to Athirappilly Falls and Poomala, discover the best of culture, nature, and cuisine.",
  },
  {
    slug: "why-poomala-dam-should-be-your-next-weekend-getaway",
    title: "Why Poomala Dam Should Be Your Next Weekend Getaway",
    excerpt:
      "Looking for a quick escape from the city? Poomala Dam offers the perfect blend of nature, adventure, and relaxation — all within easy reach of Thrissur. Here is why it should top your weekend plans.",
    content: [
      "In a world of crowded tourist destinations and over-commercialized getaways, Poomala Dam stands out as a refreshingly authentic alternative. Just 30 kilometres from Thrissur city, this serene reservoir offers everything you need for a perfect weekend escape — natural beauty, outdoor activities, great food, and most importantly, peace and quiet. Here is why Poomala Dam deserves a spot on your weekend itinerary.",
      "The first reason is accessibility. Unlike many of Kerala's beautiful destinations that require long drives and overnight journeys, Poomala Dam is just a 45-minute drive from Thrissur. This means you can leave the city on a Saturday morning and be sitting by the reservoir with a cup of chai before noon. The road is scenic and well-maintained, passing through picturesque villages and plantations that set the mood for the relaxed day ahead. For those coming from further afield, Cochin airport is just 75 km away.",
      "The second reason is the sheer variety of experiences on offer. Start your day with a morning walk along the reservoir, watching the mist lift off the water as the sun rises. Follow it with a boat ride on the placid waters, taking in views of the surrounding hills reflected in the lake. For the more adventurous, there are trekking trails that wind through the nearby hills and forests, leading to hidden viewpoints and secluded spots. And for those who prefer a slower pace, simply sitting by the water with a book and the sounds of nature for company is therapy enough.",
      "The third reason is the food. The area around Poomala Dam is home to several small eateries that serve authentic Kerala cuisine at incredibly reasonable prices. Freshly caught fish from the reservoir, locally grown vegetables prepared in traditional Kerala style, and steaming plates of rice and curry — this is food as it was meant to be eaten. Some local families also offer home-cooked meals by prior arrangement, providing an intimate dining experience that no restaurant can match.",
      "The fourth reason is the value for money. Poomala remains one of the most affordable destinations in Kerala. There is no entrance fee for the dam area, boat rides are inexpensive, and accommodation — whether you choose a homestay, a resort, or a government guest house — is reasonably priced. A weekend trip for a family of four can easily be managed within a modest budget, making it an ideal choice for regular getaways rather than once-a-year holidays.",
      "Finally, there is the simple pleasure of discovering a place that feels like your own secret. Poomala Dam is not on the cover of travel magazines. It does not have influencers lining up for the perfect shot. It is just a beautiful, peaceful place where you can be yourself, connect with nature, and return home feeling genuinely refreshed. And in today's world, that is perhaps the best recommendation any destination can have.",
    ],
    image: "/poomala_dam.jpg",
    author: "VisitPoomala Team",
    date: "2025-02-08",
    category: "Weekend Getaway",
    tags: ["Poomala Dam", "Weekend Trip", "Thrissur", "Quick Getaway", "Kerala"],
    readTime: "6 min read",
    metaTitle:
      "Why Poomala Dam Should Be Your Next Weekend Getaway",
    metaDescription:
      "Planning a weekend trip? Discover why Poomala Dam in Thrissur is the perfect quick getaway — accessible, affordable, beautiful, and blissfully uncrowded.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/places", label: "Places" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const whyVisitFeatures = [
  {
    icon: "Trees" as const,
    title: "Untouched Nature",
    description:
      "Pristine forests, cascading waterfalls, and serene reservoirs untouched by mass tourism.",
  },
  {
    icon: "Wind" as const,
    title: "True Serenity",
    description:
      "Escape the noise and crowds. Find peace in the quiet hills and misty valleys of Poomala.",
  },
  {
    icon: "Compass" as const,
    title: "Authentic Adventure",
    description:
      "Trek through spice plantations, discover hidden trails, and swim in natural pools.",
  },
  {
    icon: "Flame" as const,
    title: "Rich Culture",
    description:
      "Experience traditional Kerala life, from village festivals to home-cooked Sadhya feasts.",
  },
];
