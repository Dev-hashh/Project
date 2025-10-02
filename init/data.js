const sampleListings = [
 
  
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7995, 34.0259]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0440, 39.0968]
    }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522]
    }
  },
  // 👆 Repeat for all remaining listings


  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.0650, -17.7134] }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8330] }
  },
  ///
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.2165, -8.4095] }
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    images: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.1200] }
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] }
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3566, 37.4467] }
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0739, 9.7489] }
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.5724, 43.1939] }
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    images: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0739, 9.7489] }
  },
  // -------------------------
// TRENDING (5)
// -------------------------
{
  title: "Luxury Overwater Villa in Maldives",
  description: "Stay in an overwater villa with turquoise lagoon views. A trending choice for luxury seekers.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
  },
  price: 5000,
  location: "Malé",
  country: "Maldives",
  geometry: { type: "Point", coordinates: [73.2207, 4.1755] }
},
{
  title: "Desert Dome in Dubai",
  description: "Sleep under the stars in a luxury glass dome in the Arabian Desert. Instagram-worthy and trending.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
  },
  price: 4200,
  location: "Dubai",
  country: "UAE",
  geometry: { type: "Point", coordinates: [55.2962, 25.276987] }
},
{
  title: "Santorini Cliffside Suite",
  description: "Enjoy iconic sunsets from a whitewashed suite perched on Santorini’s cliffs.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
  },
  price: 3100,
  location: "Oia",
  country: "Greece",
  geometry: { type: "Point", coordinates: [25.375, 36.461] }
},
{
  title: "Glass Igloo in Finland",
  description: "Watch the Northern Lights from the comfort of a glass igloo in Lapland.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
  },
  price: 3500,
  location: "Rovaniemi",
  country: "Finland",
  geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
},
{
  title: "Floating Bungalow in Thailand",
  description: "Stay on a floating villa surrounded by the emerald waters of Khao Sok Lake.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60"
  },
  price: 1400,
  location: "Khao Sok",
  country: "Thailand",
  geometry: { type: "Point", coordinates: [98.523, 8.933] }
},

// -------------------------
// BEACHES (5)
// -------------------------
{
  title: "Secluded Beach House in Costa Rica",
  description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Santa Teresa",
  country: "Costa Rica",
  geometry: { type: "Point", coordinates: [-85.085, 9.6619] }
},
{
  title: "Beachfront Villa in Bali",
  description: "Wake up to waves crashing right outside your door in this luxury beachfront villa.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
  },
  price: 2000,
  location: "Seminyak",
  country: "Indonesia",
  geometry: { type: "Point", coordinates: [115.145, -8.705] }
},
{
  title: "Caribbean Bungalow in Bahamas",
  description: "A private bungalow steps away from the soft white sands of the Bahamas.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
  },
  price: 2500,
  location: "Nassau",
  country: "Bahamas",
  geometry: { type: "Point", coordinates: [-77.3554, 25.047984] }
},
{
  title: "Surf Shack in Australia",
  description: "Cozy surf shack near Byron Bay, perfect for surfers and beach lovers.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Byron Bay",
  country: "Australia",
  geometry: { type: "Point", coordinates: [153.613, -28.647] }
},
{
  title: "Hut on the Goa Coast",
  description: "Stay in a rustic beach hut with hammocks and palm trees swaying in the breeze.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
  },
  price: 700,
  location: "Palolem",
  country: "India",
  geometry: { type: "Point", coordinates: [74.02, 15.009] }
},

// -------------------------
// MOUNTAINS (5)
// -------------------------
{
  title: "Swiss Alps Chalet",
  description: "A cozy wooden chalet nestled in the heart of the Swiss Alps, ideal for skiing and mountain adventures.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
  },
  price: 2200,
  location: "Zermatt",
  country: "Switzerland",
  geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
},
{
  title: "Himalayan Cottage in Manali",
  description: "Stay in a wooden cottage with snowy peaks and apple orchards all around.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
  },
  price: 600,
  location: "Manali",
  country: "India",
  geometry: { type: "Point", coordinates: [77.17, 32.24] }
},
{
  title: "Rocky Mountains Cabin",
  description: "Rustic cabin in Colorado’s Rockies, perfect for hiking, skiing, and cozy nights.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500048993959-dc953a3def71?auto=format&fit=crop&w=800&q=60"
  },
  price: 1000,
  location: "Aspen",
  country: "USA",
  geometry: { type: "Point", coordinates: [-106.82, 39.19] }
},
{
  title: "Patagonia Lodge",
  description: "Adventure lodge in Patagonia with views of glaciers and dramatic peaks.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500048993959-dc953a3def71?auto=format&fit=crop&w=800&q=60"
  },
  price: 1300,
  location: "El Chaltén",
  country: "Argentina",
  geometry: { type: "Point", coordinates: [-72.9, -49.33] }
},
{
  title: "Japanese Alps Ryokan",
  description: "Traditional ryokan with hot springs and snow-capped peaks in Nagano.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499696010181-9a8e72f19bf8?auto=format&fit=crop&w=800&q=60"
  },
  price: 1100,
  location: "Nagano",
  country: "Japan",
  geometry: { type: "Point", coordinates: [138.18, 36.65] }
},

// -------------------------
// STAYS (5)
// -------------------------
{
  title: "Modern Loft in New York City",
  description: "Enjoy a stylish loft apartment in downtown Manhattan with skyline views.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
  },
  price: 3000,
  location: "Manhattan",
  country: "USA",
  geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
},
{
  title: "Villa in Los Angeles Hills",
  description: "Stay in a luxury villa with infinity pool overlooking the Hollywood sign.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
  },
  price: 4500,
  location: "Los Angeles",
  country: "USA",
  geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
},
{
  title: "Riad in Marrakech",
  description: "Traditional Moroccan riad with courtyard fountains and intricate designs.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
  },
  price: 800,
  location: "Marrakech",
  country: "Morocco",
  geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }
},
{
  title: "Lakehouse in Canada",
  description: "Peaceful stay in a modern lakehouse surrounded by Canadian forests.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a4c2a12ecb?auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "Ontario",
  country: "Canada",
  geometry: { type: "Point", coordinates: [-79.3832, 43.6532] }
},
{
  title: "Tokyo Capsule Stay",
  description: "Minimalist capsule hotel stay in Tokyo, a unique Japanese experience.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499696010181-9a8e72f19bf8?auto=format&fit=crop&w=800&q=60"
  },
  price: 200,
  location: "Tokyo",
  country: "Japan",
  geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
},

// -------------------------
// ICONIC CITIES (5)
// -------------------------
{
  title: "Parisian Apartment near Eiffel Tower",
  description: "Stay in a charming apartment just steps away from the Eiffel Tower.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60"
  },
  price: 2500,
  location: "Paris",
  country: "France",
  geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
},
{
  title: "Penthouse in Dubai Marina",
  description: "Experience luxury in Dubai’s famous skyline with sea views.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
  },
  price: 4000,
  location: "Dubai",
  country: "UAE",
  geometry: { type: "Point", coordinates: [55.2962, 25.276987] }
},
{
  title: "Flat near Big Ben",
  description: "Live in central London with Big Ben and the Thames at your doorstep.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60"
  },
  price: 2700,
  location: "London",
  country: "UK",
  geometry: { type: "Point", coordinates: [-0.1276, 51.5072] }
},
{
  title: "Apartment in Rome’s Historic Center",
  description: "Stay in a centuries-old building just minutes from the Colosseum.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
  },
  price: 2300,
  location: "Rome",
  country: "Italy",
  geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
},
{
  title: "Skyline Condo in Singapore",
  description: "Modern condo with breathtaking views of Marina Bay Sands and Gardens by the Bay.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a4c2a12ecb?auto=format&fit=crop&w=800&q=60"
  },
  price: 3100,
  location: "Singapore",
  country: "Singapore",
  geometry: { type: "Point", coordinates: [103.8198, 1.3521] }
},

// -------------------------
// CAMPING (5)
// -------------------------
{
  title: "Lakeside Camping in Banff",
  description: "Camp under the stars by the pristine lakes of Banff National Park.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=60"
  },
  price: 300,
  location: "Banff",
  country: "Canada",
  geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
},
{
  title: "Desert Camping in Wadi Rum",
  description: "Sleep in Bedouin tents surrounded by dramatic sandstone formations.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60"
  },
  price: 250,
  location: "Wadi Rum",
  country: "Jordan",
  geometry: { type: "Point", coordinates: [35.419, 29.532] }
},
{
  title: "Safari Camping in Kenya",
  description: "Luxury tents in Masai Mara, where wildlife roams nearby.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Masai Mara",
  country: "Kenya",
  geometry: { type: "Point", coordinates: [35.143, -1.406] }
},
{
  title: "Forest Camping in Germany",
  description: "Pitch tents in the mystical Black Forest for a nature escape.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
  },
  price: 150,
  location: "Baden-Württemberg",
  country: "Germany",
  geometry: { type: "Point", coordinates: [8.209, 48.077] }
},
{
  title: "Volcano Camping in Guatemala",
  description: "Camp on the slopes of Acatenango and watch eruptions from Fuego.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500048993959-dc953a3def71?auto=format&fit=crop&w=800&q=60"
  },
  price: 400,
  location: "Acatenango",
  country: "Guatemala",
  geometry: { type: "Point", coordinates: [-90.876, 14.5] }
},

// -------------------------
// FARMS (5)
// -------------------------
{
  title: "Tuscan Farmhouse Retreat",
  description: "Experience rustic charm in a farmhouse surrounded by vineyards and olive groves.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "Tuscany",
  country: "Italy",
  geometry: { type: "Point", coordinates: [11.2558, 43.7699] }
},
{
  title: "Lavender Farm Stay in Provence",
  description: "Sleep among purple lavender fields in southern France with authentic cuisine.",
  images: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
  },
  price: 1400,
  location: "Pro",
  country: "France",
  geometry: { type: "Point", coordinates: [5.0423, 43.9352] }
},

];

module.exports = { data: sampleListings };