export type TouristSpot = {
  id: string;
  name: string;
  state: string; // Add state property
  info: string;
  images: string;
};

export const touristSpots: TouristSpot[] = [
  {
    id: "1",
    name: "NEIL ISLAND",
    state: "Andaman",
    info: "Neil Island is one of India’s Andaman Islands, in the Bay of Bengal. Bharatpur Beach has coral reefs teeming with tropical fish. Laxmanpur Beach is known for its sunset views. Howrah Bridge is a natural rock formation accessible at low tide. Near the island’s wharf is Neil Kendra village, with a curving, sandy bay dotted with boats. Off the southeast coast, the tiny Sir Hugh Rose Island is a sanctuary for turtles.",
    images:
      "https://uploads-ssl.webflow.com/5b56319971ac8c7475a9d877/5c4f5622a29a8f65c7f25f3e_IMG_7728%20Neil%20Island%20(21).jpg",
  },
  {
    id: "2",
    name: "CELLULAR JAIL,PORT BLAIR",
    state: "Andaman",
    info: "It has been an important historical part of Port Blair. Notable freedom fighters such as Veer Savarkar, Yogendra Shukla, Batukeshwar Dutt, and Babarao Savarkar were some of the inmates here. Don’t miss the light and sound show(Monday, Wednesday and Friday) when you visit Cellular jail. ",
    images:
      "https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg",
  },

  {
    id: "4",
    name: "GOLDEN TEMPLE",
    state: "Punjab",
    info: "The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a Gurdwara located in the state of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.The temple is built around a man-made pool (sarovar) that was completed by Guru Ram Das in 1577.Guru Arjan – the fifth Guru of Sikhism, requested Sai Mian Mir – a Muslim Pir of Lahore to lay its foundation stone in 1589.In 1604, Guru Arjan placed a copy of the Adi Granth in Harmandir Sahib, calling the site Ath Sath Tirath (lit. shrine of 68 pilgrimages).The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Muslim armies from Afghanistan and the Mughal Empire.The army led by Ahmad Shah Abdali, for example, demolished it in 1757 and again in 1762, then filled the pool with garbage and blood of cows.Maharaja Ranjit Singh after founding the Sikh Empire, rebuilt it in marble and copper in 1809, overlaid the sanctum with gold foil in 1830. This has led to the name the Golden Temple.",
    images:
      "https://iptb.b-cdn.net/wp-content/uploads/2018/07/Golden-Temple-Punjab-1.jpg",
  },
  {
    id: "5",
    state: "Punjab",
    name: "WAGAH BORDER",
    info: "Located at a distance of 22 km from Lahore and 28 km from Amritsar, Wagah Border marks the boundaries between Indian and Pakistani borders. It runs along the Grand Trunk Road between Amritsar in Punjab, India, and Punjab in Lahore, Pakistan. People from all over the country visit this place to witness the Beating Retreat Ceremony that is held every day before sunset. This ceremony includes the closing of the international gates and lowering the flags of both countries. It is a spectacle to be witnessed and is an occasion where the heart of every Indian is filled with pride and enthusiasm. The flag ceremony has been conducted by the Indian Border Security Force and Pakistan Rangers since 1959.Every evening, just before the sunset, the soldiers from the Indian and Pakistan military meet at this border post to engage in a 30-minute display of military camaraderie and showmanship. Officially, the purpose of the ceremony is to formally close the border for the night and lower the national flag. However, it is an entertainment ceremony and a  display of national pride for the thousands of people who come here every day. During the build-up to the ceremony, the crowd engages in chanting the Indian national anthem, rounds of applause and Bollywood-style dancing on Hindi songs.",
    images:
      "https://m.economictimes.com/thumb/msid-68217133,width-1200,height-900,resizemode-4,imgsize-703119/daily-retreat-ceremony-along-attari-wagah-border-cancelled-bsf.jpg",
  },

  {
    id: "8",
    state: "Rajasthan",
    name: "Jaipur",
    info: "Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned state of India. Renowned globally for its coloured gems, the capital state of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern state is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire state pink. The pink that colours the state makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.",
    images:
      "https://images.thrillophilia.com/image/upload/s--QrPjqNho--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/046/475/original/1525775826_Jaipur_Main.jpg.jpg?1525775826",
  },
  {
    id: "9",
    state: "Rajasthan",
    name: "Amber Palace",
    info: "Amber (pronounced Amer) is at a distance of about 11 kilometres from Jaipur. Now a UNESCO World Heritage Site, it was the bastion of the Kachwahas of Amber, until the capital was moved to the plains, to what is today Jaipur. The palace, located in craggy hills, is a beautiful melange of Hindu and Mughal styles. Raja Man Singh I began construction in 1592 and the palace, which was built as a strong, safe haven against attacking enemies, was completed by Mirja Raja Jai Singh.",
    images:
      "https://images.thrillophilia.com/image/upload/s--UGQa1Iny--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/110/813/original/1492513727_amber_fort_4.jpg.jpg?1492513727",
  },

  {
    id: "12",
    state: "keral",
    name: "Munnar",
    info: "The idyllic hill station Munnar - famous for its tea estates, exotic lush greenery and craggy peaks, is located in the Western Ghats, in the state of Kerala. It serves as the commercial centre for some of the world’s largest tea estates. In addition, Munnar has many protected areas which are home to endemic and highly endangered species like the Nilgiri Thar and the Neelakurinji.One of the biggest tea-plantation area of South India, Munnar is one of the most beautiful and popular hill-stations of Kerala. Situated on the banks of three rivers- Madupetti, Nallathanni and Periavaru, Munnar is also blessed with natural view-points apart from the tea-plantations. Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions.",
    images:
      "https://images.thrillophilia.com/image/upload/s---dSM_iYr--/c_fill,f_auto,fl_strip_profile,g_auto,h_600,q_auto,w_975/v1/images/photos/000/126/889/original/1522671846_Munnar.jpg.jpg?1522671846",
  },
  {
    id: "13",
    state: "Keral",
    name: "Alleppey",
    info: "Allepey is also popular for its Houseboat cruises that pass through the serene backwaters, where you can catch glimpses of green paddy fields, choir making activities, beautiful avifauna and witness the life of locals in Kerala. Towards the shore lies the Alleppey beach in the Arabian Sea, a beautiful example of the gems you’d find along the Malabar Coast. The appeal of this beach is only amplified by the history attached to it, and a walk down the 137-year old pier is a must. Be sure to catch a traditional snake boat race in the months of August and September and try out some toddy (palm wine) at a local toddy shop for adding a touch of authentistate to your travel experience in Allepey.",
    images: "https://miro.medium.com/max/2560/1*MjHGGH7V_SeoC9t2zmC-lA.jpeg",
  },

  {
    id: "16",
    state: "Uttarakhand",
    name: "Rishikesh",
    info: 'Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the "Yoga Capital of the World". With whitewater rafting industry growing and varied camping and cafe spots springing up, Rishikesh has grown immensely as a favourite, catering to people with different needs.Over the years, the tranquil town has become extremely popular as the top spiritual destination in the world, especially after the Beatles association with Maharishi Mahesh Yogi here in the late \'60s. As it lies on the holy banks of river Ganga, Rishikesh has been a hub of Sadhus (saints) with numerous ashrams teaching spirituality, yoga, meditation and Ayurveda springing up, the most popular of which is the Beatles Ashram.',
    images: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
  },

  {
    id: "19",
    state: "Uttarakhand",
    name: "Badrinath",
    info: "Perched on the Garhwal hill tracks, near Alaknanda River, the most sacred Badrinath Temple or the Badrinarayan Temple is dedicated to Lord Vishnu. The temple is also one of the four Char Dham and Chota Char Dham pilgrimage yatras.  Situated at the height of 10,279 feet, the temple is surrounded by lofty snow-clad Himalayas. Believed to be originally established by the saint, Adi Shankaracharya, the black stone idol of Lord Vishnu is 1m tall and is considered to be one of the 8 swayam vyakta kshetras or self-manifested statues of Vishnu. It also finds its mention in the 108 Divya Desams devoted to Lord Vishnu in India.The religious importance and purity of Badrinath Temple allures scores of devotees.Badrinath Temple has a Tapt Kund, a hot water spring which is considered to have medicinal values. River Alaknanda is known to originate from here. The vibrant festivals of Mata Murti Ka Mela and the Badri Kedar Festival give you another reason to visit the temple.",
    images: "https://www.holidify.com/images/bgImages/BADRINATH%20.jpg",
  },

  {
    id: "20",
    state: "Himachal Pradesh",
    name: "Manali",
    info: "Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, Manali is one of the most popular hill stations in the country. With jaw-dropping views, lush green forests, sprawling meadows carpeted with flowers, gushing blue streams, a perpetual fairy-tale like mist lingering in the air, and a persistent fragrance of pines and freshness -  Manali has been blessed with extraordinary scenic beauty. From museums to temples, from quaint little hippie villages to bustling upscale streets, river adventures to trekking trails, Manali has every reason to be the tourist magnet it is, all year round.Clean roads, swaying eucalyptus trees, endearing little eateries, small kitschy local market places, and cafes which serve delicious local food at unbelievable prices, Old Manali is a serene, tranquil place, whose lingering silence is broken only by the twittering of the birds and the sound of the roaring waters of the Kullu river.",
    images: "https://www.holidify.com/images/bgImages/MANALI.jpg",
  },
  {
    id: "21",
    state: "Himachal Pradesh",
    name: "Shimla",
    info: "Situated at a height of 2200m, Shimla is the capital and the largest state of Himachal Pradesh in India. Set amidst beautiful hills and mystical woods, Shimla has been a very popular hill-station among Indian families and honeymooners since the last 50 years.\n\nBritish loved this state so much that they made Shimla their summer capital in 1864 and used to rule the sub-continent from here whenever the temperature rose in the nearby plains. Shimla still retains its old world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and beautiful churches.",
    images: "https://www.holidify.com/images/bgImages/SHIMLA.jpg",
  },

  {
    id: "25",
    state: "Gujrat",
    name: "Kutch",

    info: "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past.Kutch is probably one of the most beautiful, yet surreal places in India. With the vast expanses of white salt desert in the Rann of Kutch area, this is an amazing experience to witness. One would be able to see just stretches of pure white land as far as the eyesight goes. The place comes to life during the winters when the Rann Festival is held during December-February everywhere in which there are huge camp settlements with cultural programs, functions and adventure activities like hot-air ballooning. Kutch is also among the largest district of India with a terribly low population density.",
    images:
      "https://www.holidify.com/images/cmsuploads/compressed/Great_Rann_of_Kutch_20180205161526.jpg",
  },

  {
    id: "27",
    state: "Gujrat",
    name: "Somnath",

    info: "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.Primarily a temple town, Somnath is a place where a strong scent of religion and legends lingers around tourism and even daily life. Its spiritual environment is ornamented by the huge number of temples in the area, however, Somnath also offers beaches, museums and other attractions. While the Somnath temple and Somnath beach are the primary places to visit here, Gita Mandir, Balukha Tirtha, Kamnath Mahadev Temple, Somnath Museum are some of the other places that one can visit.",
    images: "https://www.holidify.com/images/bgImages/SOMNATH.jpg",
  },
];
