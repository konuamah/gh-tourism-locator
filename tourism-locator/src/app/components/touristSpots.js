const touristSpots = [
  {
    name: 'Cape Coast Castle',
    coordinates: [-1.2415, 5.1315],
    video: 'cape-coast-castle.mp4',
    images: [
      'cape1.jpg',
      'cape2.jpg',
      'cape3.jpg'
    ],

    youtubeId: 'BeyiXWEl9MQ',

    history: 'Built in 1653, Cape Coast Castle served as one of the most important slave trading posts in West Africa during the transatlantic slave trade era. Today it stands as a powerful memorial to this dark period of history and is a UNESCO World Heritage site.'
  },
 
    {
      name: 'Kakum National Park',
      coordinates: [-1.3829, 5.3484],
      images:[
        'kakum1.jpg',
        'kakum2.jpg',
        'kakum3.jpg',
      ],
      video: 'kakum-park.mp4',
      youtubeId: 'O4UmMaYh',
      history: 'Established in 1931, Kakum National Park is home to diverse wildlife and features Africa\'s first canopy walkway. The park spans 375 square kilometers of tropical rainforest and hosts over 400 bird species.'
    },
    {
      name: 'Mole National Park',
      coordinates: [-1.8562, 9.2617],
      video: 'mole-park.mp4',
      youtubeId: 'Tu164RHTu5U',
      images: [
        'mole1.png',
        'mole2.jpg',
        'mole3.png'
      ],
      history: 'Ghana\'s largest wildlife sanctuary, established in 1958. Home to elephants, antelopes, and over 300 bird species. The park represents one of the best-preserved natural habitats in Ghana.'
    },
    {
      name: 'Lake Volta',
      coordinates: [0.0789, 6.3154],
      video: 'lake-volta.mp4',
      images: [
        'volta1.png',
        'volta2.jpg',
        'volta3.jpg'
      ],
      youtubeId: 'MJgFfh3vNEs',
      history: 'Created in 1965 by the construction of the Akosombo Dam, Lake Volta is the world\'s largest artificial lake by surface area. It covers 8,502 square kilometers and plays a crucial role in Ghana\'s power generation.'
    },
    {
      name: 'Kwame Nkrumah Memorial Park',
      coordinates: [-0.1869, 5.5600],
      video: 'nkrumah-park.mp4',
      images: [
        'nkrumah1.jpeg',
        'nkrumah2.png',
        'nkrumah3.jpg'
      ],
      
      youtubeId: 'MqJRlWaTFlM',
      history: 'Built in 1991, this park honors Dr. Kwame Nkrumah, Ghana\'s first president and a key figure in African independence. The site includes his mausoleum and a museum dedicated to his life and Pan-African vision.'
    },
    {
      name: 'Elmina Castle',
      coordinates: [-1.3521, 5.0729],
      video: 'elmina-castle.mp4',
      youtubeId: 'zJi9OBWsMSI',
      images: [
        'elmina1.jpg',
        'elmina2.jpg',
        'elmina3.jpg'

      ],
      history: 'Built by the Portuguese in 1482, Elmina Castle is the oldest European building in existence south of the Sahara. It is another UNESCO World Heritage site that tells the tragic story of the transatlantic slave trade.'
    },
    {
      name: 'Labadi Beach',
      coordinates: [-0.2176, 5.5472],
      video: 'labadi-beach.mp4',
      youtubeId: '_LhWyNUxOyU',
      images: [
        'labadi1.jpg',
        'labadi2.jpg',
        'labadi3.jpeg'
      ],
      history: 'Located in Accra, this popular beach is known for its vibrant atmosphere, water sports, and weekend beach parties. It\'s a favorite spot for both locals and tourists to enjoy the coastal beauty of Ghana.'
    },
    {
      name: 'Shai Hills Resource Reserve',
      coordinates: [-0.0444, 5.8453],
      images: [
        'shai1.jpg',
        'shai2.jpg',
        'shai3.jpg'
      ],
      youtubeId: 'p4yPH-oEvSc',
      video: 'shai-hills.mp4',
      history: 'A protected area near Accra that features unique wildlife, including baboons, antelopes, and over 150 bird species. The reserve also contains important archaeological sites and traditional Shai tribal lands.'
    },
    {
      name: 'Larabanga Mosque',
      coordinates: [-2.4833, 9.2389],
      video: 'larabanga-mosque.mp4',
      youtubeId: 'tRiSgnxIEbI',
      images: [
        'larabanga1.jpg',
        'larabanga2.jpg',
        'larabanga3.jpg'
      ],
      history: 'One of the oldest mosques in West Africa, believed to have been built in the 15th century. This mud-and-stick mosque is a remarkable example of Sudanic architectural style and is considered a national monument.'
    },
    {
      name: 'Aburi Botanical Gardens',
      coordinates: [-0.2589, 5.8430],
      images: [
        'aburi1.jpg',
        'aburi2.jpg',
        'aburi3.jpg'
      ],
      youtubeId: '1WOY4mJnuJk',
      video: 'aburi-gardens.mp4',
      history: 'Established in 1890, these gardens showcase a diverse collection of tropical plants, including rare species. Located in the Eastern Region, the gardens offer a peaceful retreat and insights into Ghana\'s botanical diversity.'
    },
    {
      name: 'Kumasi Central Market',
      coordinates: [-1.6228, 6.6885],
      video: 'kumasi-market.mp4',
      images: [
        'kumasi1.jpg',
        'kumasi2.jpg',
        'kumasi3.jpg'
      ],
      youtubeId: 'EzO73Fx0VL0',
      history: 'Also known as Kejetia Market, it is one of the largest open-air markets in West Africa. The market is a vibrant hub of Ashanti culture, offering everything from traditional textiles to local crafts and food.'
    },
    {
      name: 'Paga Crocodile Pond',
      coordinates: [-0.9553, 10.9403],
      video: 'paga-crocodiles.mp4',
      images: [
        'paga1.jpg',
        'paga2.jpg',
        'paga3.jpg'
      ],
      youtubeId: '86ypwRv2e9k',
      history: 'A unique wildlife sanctuary where sacred crocodiles are believed to be the reincarnated spirits of ancestors. Visitors can interact with these seemingly tame crocodiles, making it a fascinating cultural and natural attraction.'
    },
    {
      name: 'Ada Foah',
      coordinates: [0.6667, 5.7944],
      images: [
        'adafoah1.jpg',
        'adafoah2.jpg',
        'adafoah3.jpg'
      ],
      youtubeId: 'ZJzPJgwZvg4',
      video: 'ada-foah.mp4',
      history: 'A picturesque coastal town where the Volta River meets the Atlantic Ocean. Known for its beautiful beaches, water sports, and the annual Asafotufiam festival celebrating local Ada culture.'
    },
    {
      name: 'Wli Waterfalls',
      coordinates: [0.6167, 7.2167],
      video: 'wli-waterfalls.mp4',
      images: [
        'wli1.jpg',
        'wli2.jpg',
        'wli3.jpg'
      ],
      youtubeId: 'mtKqYfjeQ4k',
      history: 'Located in the Volta Region, these are the highest waterfalls in West Africa. Surrounded by lush vegetation and home to a large bat population, the falls offer a spectacular natural experience for visitors.'
    },
   
  ];
  
  
  export default touristSpots;