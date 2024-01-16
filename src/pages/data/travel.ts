export type Product = {
  name: string;
  description: string;
  image: string;
  category: string;
};

export type TouristSpot = {
  name: string;
  info: string;
  images: string;
  location: string;
};

export type State = {
  id: string;
  name: string;
  capital: string;
  about: string;
  climate: string;
  history: string;
  time: string;
  food: string;
  img: string[];
  products: Product[];
  tourist: TouristSpot[];
};

export const states: State[] = [
  {
    id: "1",
    name: "Andaman & Nicobar",
    capital: "Port Blair",
    about:
      "The Andaman and Nicobar Islands located in the east of the Indian mainland geographically, float in splendid isolation in the Bay of Bengal. Once a hill range extending from Myanmar to Indonesia, these picturesque undulating islands, islets numbering around 572, are covered with dense rain-fed, damp and evergreen forests and endless varieties of exotic flora and fauna. Most of these islands (about 550) are in the Andaman Group, 28 of which are inhabited. The smaller Nicobars, comprise some 22 main islands (10 inhabited). The Andaman and Nicobars are separated by the Ten Degree Channel which is 150 Kms. wide.",
    climate:
      "The islands have a tropical climate. The South-west Monsoon sets in Andaman Nicobar islands towards the end of May and the North-east Monsoon in November. There is no fury of hot summer, no chilling winter, no water clogging or traffic jams. For those who want to enjoy boating, swimming, snorkeling, sightseeing all 12 months is season. North Indians find relief from burning heat and chilling winter if they visit the island from May/June/July and in December/January. Season for nature lovers is May to December when forest is lush green and waterfalls are at their prime. Divers can enjoy the best during December to April and bird watchers during winter times.",
    history:
      "The Andaman & Nicobar Islands have been inhabited for several thousand years, at the very least. The earlier archaeological evidence yet documented goes back some 2,200 years; however, the indications from genetic, cultural and linguistic isolation studies point to habitation going back 30,000 – 60,000 years, well into the Middle Palaeolithic. In the Andaman Islands, the various Andamanese people maintained their separated existence through the vast majority of this time, diversifying into distinct linguistic, cultural and territorial groups.",
    time: "Andaman has a moderate temperature all through the year within the range of 23°C to 31°C. It has a tropical climate. There are no severe climate conditions except for tropical storms and rains in late summers and monsoons.Summers (March to May) are warm but pleasant with sea breeze and have humidity level about 80%. It is suitable for all kinds of tourist activities.",
    food: "The cuisine Of Andaman is like the island itself-tropical, exotic and refreshing. The sea that is all around has a defining effect on the island's culture, livelihood and cuisine. There is little here, in which you will not find traces of the sea. The food here, hence, is dominated by seafood preparations and you don't want to miss the fish delicacies here. Other than seafood too, the staple diet is essentially non-vegetarian.However, as the island is becoming an increasingly popular tourist spot, the resorts and other eating places will give you options of Indian, Chinese and a few more cuisines.Also, the fruits here are popular and refreshing. You can find Mangoes, Bananas, Pineapples, Guava and more. One can also sip in the truly refreshing and tropical coconut water here.",
    img: [
      "https://bit.ly/35d0J79",
      "https://images.thrillophilia.com/image/upload/s--QOn_Mi_R--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/021/355/original/1538650912_shutterstock_1093195946.jpg.jpg?1538650912",
      "https://www.keyshotels.com/blog/wp-content/uploads/2017/08/port-blair-sea-fish.jpg",
      "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/486726/202664.jpg",
      "https://bit.ly/2XhHw19",
      "https://bit.ly/2qTdWTu",
    ],
    products: [
      {
        name: "Pearls",
        description:
          "A gift for your special someone or close friends? What can be better than some shining pearls straight from the Bay of Bengal! They are the best kind of go-to items you can buy in coastal areas. While they are plenty of jewelry stores and local artisans claiming to sell authentic and good quality pearl items like ornaments, home decor, purses, accessories, and more, make sure you always do a quality check before you proceed to purchase them. The Andaman Islands have a huge variety of these gorgeous riches from the sea.",
        image:
          "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Pearls.jpg",
        category: "Jewellery",
      },
      {
        name: "Spices",
        description:
          "You can buy superior quality of spices and herbs including the likes of cardamom, cloves, cinnamon, vanilla, betel, and black pepper that is grown and nurtured in abundance in the Andaman islands. These aromatic spices are some of the best things to buy in Andaman and Nicobar for your own home and for gifting to others. You’ll find various spice gardens and plantations in Andaman, and you can visit any of them to find the authentic flavors of this part of India.",
        image:
          "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Spices.jpg",
        category: "Grocery",
      },
    ],
    tourist: [
      {
        name: "NEIL ISLAND",
        info: "Neil Island is one of India’s Andaman Islands, in the Bay of Bengal. Bharatpur Beach has coral reefs teeming with tropical fish. Laxmanpur Beach is known for its sunset views. Howrah Bridge is a natural rock formation accessible at low tide. Near the island’s wharf is Neil Kendra village, with a curving, sandy bay dotted with boats. Off the southeast coast, the tiny Sir Hugh Rose Island is a sanctuary for turtles.",
        images:
          "https://uploads-ssl.webflow.com/5b56319971ac8c7475a9d877/5c4f5622a29a8f65c7f25f3e_IMG_7728%20Neil%20Island%20(21).jpg",
        location:
          "https://www.google.co.in/maps/place/Neill+Island,+Andaman+and+Nicobar+Islands+744104/data=!4m2!3m1!1s0x3088d9a13824c715:0xddd01ec98b4eb529?sa=X&ved=2ahUKEwjTjPqquvPlAhU56nMBHbmRBCAQ8gEwJXoECBAQBA",
      },
      {
        name: "CELLULAR JAIL,PORT BLAIR",
        info: "It has been an important historical part of Port Blair. Notable freedom fighters such as Veer Savarkar, Yogendra Shukla, Batukeshwar Dutt, and Babarao Savarkar were some of the inmates here. Don’t miss the light and sound show(Monday, Wednesday and Friday) when you visit Cellular jail. ",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg",
        location:
          "https://www.google.co.in/maps/place/Cellular+Jail+National+Monument/@11.6738247,92.7479768,15z/data=!4m2!3m1!1s0x0:0x616a8c6623fdba3f?sa=X&ved=2ahUKEwihqtPEuvPlAhU4IbcAHThdBsAQ_BIwJnoECA4QCA",
      },
      {
        name: "CORBYN'S COVE,PORT BLAIR",
        info: "Surrounded by lush green palms, this happens to be one of the busier beaches in the Andamans. It’s located right outside of Port Blair about 8 km. The drive there itself is a scenic treat to the eyes.",
        images:
          "https://live.staticflickr.com/982/40047849690_7a78e1f816_b.jpg",
        location:
          "https://www.google.co.in/maps/place/Corbyn+Cove+Beach/@11.6449942,92.7458387,17z/data=!3m1!4b1!4m5!3m4!1s0x308894fccfdb049d:0x60d5e3776ddced65!8m2!3d11.6449942!4d92.7480274",
      },
      {
        name: "SAMUDRIKA NAVAL MARINE MUSEUM,PORT BLAIR",
        info: "This museum is a perfect blend of historical and modern Andaman. A massive blue whale, in its skeletal form, of course, greets you as you enter the museum. There is also an aquarium with fish of all shapes and sizes, from a parrotfish to the rare and venomous species of stonefish and corals.",
        images:
          "https://andamantripadvisor.in/files/social/social_b18e537c1984e883f43807737a639be4.jpg",
        location:
          "https://www.google.co.in/maps/place/Samudrika+Marine+Museum/@11.6718057,92.7263692,15z/data=!4m2!3m1!1s0x0:0xd7352994a1c32fb8?sa=X&ved=2ahUKEwi64_yEu_PlAhWMILcAHYtnBf0Q_BIwC3oECBAQCA",
      },
    ],
  },
  {
    id: "2",
    name: "Punjab",
    capital: "Chandigarh",
    about:
      "Deriving its name from five full-bodied rivers–Sutlej, Beas, Ravi, Jhelum, and Chenab–which flow through its vast plains, Punjab is representative of abundant things. Located on the north-western edge of India, it is one of the smaller albeit prosperous states of the nation, and home to a lively, hospitable and dynamic people. Widely acknowledged as the cradle of civilization, it is a land of ethnic and religious diversity, having borne and shaped a number of religious movements that include Sikhism, Buddhism and Sufism. The Punjabi language, too, finds its origin in the Indo-European linguistic family that includes Persian and Latin.",
    climate:
      "The Summer in Punjab actually commences from mid April but the temperature starts rising from February onwards. Rainfall ranges from 250mm to 1000mm. Agriculture in the state highly depends on the rains. The winter season in Punjab is mostly experienced in the month of January, when the temperature falls to 5°C in the night and hovers around 12°C in the day. In the post winter transitional season, hail-storms and brief showers occur which cause damage to the crops. The wind becomes dry by the end of March. The Punjab climate has been a significant factor in shaping the economy of the state.",
    history:
      "The history of Punjab goes back thousands of years. Undivided Punjab has been the cradle of the Indus Valley Civilization, the remains of which can be seen at the Ropar archaeological site and its dedicated museum. This fertile ancient land finds mention even in Mahabharata and Ramayana. Infact it is believed that the Ramayana was written here by Valmiki ji. Places like Rupnagar, Kiratpur, Dholbaha, Rohira and Ghuram...all in Punjab; have unearthed artifacts that date back centuries. In Sanghol are 107 statues of the Kushan period evoking memories of a flourishing Buddhist monastery. This monastery was visited by Hiuen Tsang in the 7th century.",
    time: "The best time to visit Punjab is in the spring, from February to April, and in the autumn, from September to November.",
    food: "Punjab is synonymous to food and incomplete without its mouthwatering delicacies. Rich in colour, ingredients, spices and the most elaborate and grand cooking styles, Punjabi food derives several elements of its cuisine from Pakistan, the then undivided Punjab.The national cuisine borrows some of its most popular and lip-smacking items from Punjab's menu from Paratha, Tandoori Chicken, Naan, Pakodas to delicacies of Paneer. The food here represents a particular festivity, vibrancy and cultural richness in every day, a big part of which revolves around having good and rich food. There is also an almost perfect balance between the vegetarian and non-vegetarian choices, the options being equally irresistible for both. Punjabi cuisine is nearly identified with generous use of 'Ghee' or butter to give the food a rich flavour. Also onion, ginger, garlic and strong spice leave strong and distinct flavours in the menu here. Butter Chicken, Tandoori Chicken, Shahi Paneer, Chole Bhature, Makki di roti, Sarson da Saag, Dal fry, Amritsari fish, Aloo gobhi, Rajma Chawal, Punjabi Kadhi, Lassi are the dishes that define the food here, and the list is almost infinite. Gajar ka Halwa, Jalebi, Kulfi, Rabri, Gulab Jamun, Barfi, Motichoor Laddo are also equally tempting traditional sweets in the area.",
    img: [
      "https://bit.ly/2XjaMVx",
      "https://bit.ly/356rXMx",
      "https://bit.ly/33RDGhU",
      "https://bit.ly/33TedVo",
      "https://bit.ly/2QiHPrf",
      "https://bit.ly/2plyIe9",
    ],
    products: [
      {
        name: "Jutties",
        description:
          "Punjabi jutties is the name given to the typical footwear of Punjab. They are unusual in bearing a grand display of patterns and designs. There is such beautiful embroidery displayed on the jutties that you can’t help being impressed. Lots of hard work goes into making of these jutties, as they stand for the elegance and glory of Punjab. A wide range of fancy materials, like beads, pearls, colored threads, small mirrors and seashells, are used for making these jutties. Punjabi jutties are comfortable to wear and also render a royal look to the wearer.",
        image:
          "https://medias.fashionnetwork.com/image/upload/v1/medias/39c04f8b153f62ec5928d6eb221a0f4a2142309.jpg",
        category: "Clothing & Accessories",
      },
      {
        name: "Phulkaris",
        description:
          "Phulkari is a form of craft in which artistic embroidery embellishes a shawl, saree, dupatta (head scarf) or the entire dress. The phulkari that covers the entire dress, making the base material invisible, is called bagh (a garden of flowers). Bagh is generally used for special occasions, like marriages and festivals. A special kind of thread is used for phulkari, which is called pat. The designs used are varied, like animal, vegetable, sun, moon, scenes of human life, natural beauty and the list continues. In fact, anything that one can think about, other than religious connotations, are represented in phulkari. Some varieties of Phulkari and Bagh are Chope, Vari-da-bagh, Ghunghat bagh, Bawan Bagh, Darshan Dwar, Suber, Champa, Surjamukhi, & Satrang.",
        image:
          "http://punjabicart.com/sites/default/files/product/product-1494-4453.jpg",
        category: "Clothing & Accessories",
      },
    ],
    tourist: [
      {
        name: "GOLDEN TEMPLE",
        info: "The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.The temple is built around a man-made pool (sarovar) that was completed by Guru Ram Das in 1577.Guru Arjan – the fifth Guru of Sikhism, requested Sai Mian Mir – a Muslim Pir of Lahore to lay its foundation stone in 1589.In 1604, Guru Arjan placed a copy of the Adi Granth in Harmandir Sahib, calling the site Ath Sath Tirath (lit. shrine of 68 pilgrimages).The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Muslim armies from Afghanistan and the Mughal Empire.The army led by Ahmad Shah Abdali, for example, demolished it in 1757 and again in 1762, then filled the pool with garbage and blood of cows.Maharaja Ranjit Singh after founding the Sikh Empire, rebuilt it in marble and copper in 1809, overlaid the sanctum with gold foil in 1830. This has led to the name the Golden Temple.",
        images:
          "https://iptb.b-cdn.net/wp-content/uploads/2018/07/Golden-Temple-Punjab-1.jpg",
        location:
          "https://www.google.co.in/maps/place/Harmandir+Sahib/@31.6199803,74.8764849,15z/data=!4m5!3m4!1s0x0:0x604384897626248e!8m2!3d31.6199803!4d74.8764849",
      },
      {
        name: "WAGAH BORDER",
        info: "Located at a distance of 22 km from Lahore and 28 km from Amritsar, Wagah Border marks the boundaries between Indian and Pakistani borders. It runs along the Grand Trunk Road between Amritsar in Punjab, India, and Punjab in Lahore, Pakistan. People from all over the country visit this place to witness the Beating Retreat Ceremony that is held every day before sunset. This ceremony includes the closing of the international gates and lowering the flags of both countries. It is a spectacle to be witnessed and is an occasion where the heart of every Indian is filled with pride and enthusiasm. The flag ceremony has been conducted by the Indian Border Security Force and Pakistan Rangers since 1959.Every evening, just before the sunset, the soldiers from the Indian and Pakistan military meet at this border post to engage in a 30-minute display of military camaraderie and showmanship. Officially, the purpose of the ceremony is to formally close the border for the night and lower the national flag. However, it is an entertainment ceremony and a  display of national pride for the thousands of people who come here every day. During the build-up to the ceremony, the crowd engages in chanting the Indian national anthem, rounds of applause and Bollywood-style dancing on Hindi songs.",
        images:
          "https://m.economictimes.com/thumb/msid-68217133,width-1200,height-900,resizemode-4,imgsize-703119/daily-retreat-ceremony-along-attari-wagah-border-cancelled-bsf.jpg",
        location:
          "https://www.google.co.in/maps/place/Wagah/@31.604757,74.574136,15z/data=!4m2!3m1!1s0x0:0x325315a52b19a1a9?sa=X&ved=2ahUKEwiupo-auvPlAhVL6XMBHYYYC8UQ_BIwJHoECA4QCA",
      },
      {
        name: "JALLIANWALA BAGH",
        info: "Jallianwala Bagh is a historic garden and ‘memorial of national importance’ in Amritsar, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre that occurred on the site on the festival of Vaisakhi, 13 April 1919.It houses a museum, gallery and a number of memorial structures.The 7-acre (28,000 m2) garden site of the massacre is located in the vicinity of the Golden Temple complex, the holiest shrine of Sikhism and is managed by the Jallianwala Bagh National Memorial Trust, which was established as per the 'Jallianwala Bagh National Memorial Act, 1951'.",
        images:
          "https://m.telegraphindia.com/unsafe/620x350/smart/static.telegraphindia.com/derivative/THE_TELEGRAPH/1688144/16X9/image93c380cd-0486-4cc0-90e0-865235d0ac34.jpg",
        location:
          "https://www.google.co.in/maps/place/Jallianwala+Bagh/@31.0529259,74.7523128,8z/data=!4m5!3m4!1s0x0:0xcb013976169cb75b!8m2!3d31.6206437!4d74.8801088",
      },
      {
        name: "BHAKRA NANGAL DAM",
        info: "Bhakra Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh in northern India. The dam forms the Gobind Sagar reservoir.The dam, located at a gorge near the (now submerged) upstream Bhakra village in Bilaspur district of Himachal Pradesh of height 226 m. The length of the dam (measured from the road above it) is 518.25 m and the width is 9.1 m. Its reservoir known as 'Gobind Sagar' stores up to 9.34 billion cubic metres of water. The 90 km long reservoir created by the Bhakra Dam is spread over an area of 168.35 km2. In terms of quantity of water, it is the third largest reservoir in India, the first being Indira Sagar dam in Madhya Pradesh with capacity of 12.22 billion cu m and second Nagarjunasagar Dam.",
        images:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/dam647_081117121907_1-x404.jpg?9FIZpe39SqXGiX7EIroLsVdcLWjDaUeV",
        location:
          "https://www.google.co.in/maps/place/Bhakhra+Dam/@31.4111964,76.4334066,15z/data=!4m5!3m4!1s0x0:0x7cb91e54289880ac!8m2!3d31.4111964!4d76.4334066",
      },
    ],
  },
  {
    id: "3",
    name: "Rajasthan",
    capital: "Jaipur",
    about:
      'Recognized as the "Land of Kings" and having sheer variety of experiences to offer, Rajasthan is the largest state of India located on the northwestern side and is one of India\'s most popular tourist destinations.\nSteeped in tales of chivalry and romance, also famous for striking desert landscape, massive forts, mesmerizing lakes and fabulous palaces, Rajasthan represents the quintessential India. Also, the crafts and folk arts originated here are world famous.With the legendary cities of Jaipur, Udaipur, Jaisalmer, and Jodhpur, built by the Rajput warriors, and the artisan communities and indigenous tribal, Rajasthan is a unique combination of royal and tribal India. Rajputs ruled the Land of Royalty for a long time and till today they are regarded in very high esteem.',
    climate:
      "Summers in Rajasthan last from April to June and are particularly harsh with temperatures rising up to 48°C during the day. That being said, if you do plan to visit Rajasthan in the summer, head to places like Mount Abu, Kumbhalgarh or Ranakpur. The weather here is pleasant and the views offered are breath-taking. For other cities, the weather is optimal in the early evenings for roaming around outside in the early mornings and late evenings, and it is advisable to stay indoors otherwise.Monsoon is a far more pleasant experience, the temperatures tend to drop across the state and the rain showers transform the arid landscape of Rajasthan. July to September is a particularly good time to visit if you wish to avoid the crowds you'd usually find during peak tourist season. Bundi, the lake city of Udaipur and the Keoladeo National Park are picturesque and are a must visit if you plan to travel to Rajasthan during the Monsoon.",
    history:
      "The state of Rajasthan in India has a history dating back thousands of years. It was the site of the Indus Valley Civilization. The early medieval period saw the rise of the Mughal Empire. The Mughals granted high positions to Rajput rulers who allied with them. However, some Rajput kingdoms did not accept Mughal suzerainty and were constantly at war with them. The Mughal rule effectively ended in the 18th century, when the Maratha Empire conquered much of the subcontinent.\n\nMaratha rule was soon replaced by British rule in India. The British also made allies out of local rulers, who were allowed to rule their princely states. This period was marked by famines and economic exploitation. However, the British period also saw the growth of railways, telegraph and modern industry in the region. After Indian Independence in 1947, the various princely states of Rajasthan were integrated into India.",
    time: "The temperatures continue to drop once the monsoon has passed, and come October winter sets in that lasts till March. During December and January, there can be a severe variation in temperatures during the day and the night. In fact, temperatures are known to drop as low as 0°C and below. This is the best time to visit Rajasthan as the desert sun is not as intense and the days are pleasant. Most of the festivals held in winter are planned as tourist attractions, with visitors coming in from different parts of the world.",
    food: "Rajasthanis love their food which can be evidenced in the time and energy they put into their preparations. The cuisine of Rajasthan is primarily vegetarian and offers a fabulous variety of mouthwatering dishes. The food here is such that it is suitable for the weather, availability of water, and other environmental factors of the area. Rajasthan is much of what its culture is, and the culture here derives a lot of its colour, festivity, significance and of course, spice, often literally from the diverse and exquisite cuisine here. The delicacies of the state are indeed some of the richest, unique and most loved preparations of India. Names such as Dal Bati Churma, Moong Dal ka Halwa, Ghevar, Rabdi and numerous more are popular all across, especially in North India, with their popularity spreading beyond the confines of the state, Your trip might be incomplete if you don't try the scrumptious dishes that the land has to offer, especially the Rajasthani thali. ",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg",
      "https://ihplb.b-cdn.net/wp-content/uploads/2011/02/Forts.jpg",
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Gadisar-Lake-in-Rajasthan..jpg",
      "https://mk0egoveletsonla87wv.kinstacdn.com/wp-content/uploads/2018/07/Rajatshan-tourism-1.jpg",
      "https://cdn1.tripoto.com/media/filter/tst/img/1682588/Image/1568655470_things_to_do_in_udaipur_rajasthan.jpg",
      "https://static.toiimg.com/thumb/68427211/3.jpg?width=748&height=499",
    ],
    products: [
      {
        name: "Jewellery",
        description:
          "Renowned for its jewellery industry, Rajasthan is one of the world's largest centres for hand-cutting gems. It is also known for its spectacular variety of gold and silver jewellery. Every region in Rajasthan has its unique style and there's something to cater to everyone's tastes. Jaipur in particular, is famous for the Kundan and Meenakari styles of jewellery making, while Pratapgarh's unique style, which involves gold work on glass, is referred to as 'thewa'. So whether you're looking for rustic jewellery or something more regal, gold and silver or even precious stones, Rajasthan is truly a gem of a place for jewellery shopping.",
        image:
          "https://www.zerokaata.com/zerokaata-studio/wp-content/uploads/2018/06/rj-bangadi.jpg",
        category: "Jewellery",
      },
      {
        name: "Rajasthani Miniature Paintings",
        description:
          "Originally brought to Rajasthan by the Mughals, Rajasthani artists mastered the art of miniature painting and made it their own. The paintings themselves are inspired by the royal and romantic life of the Mughals. There are several styles of Rajasthani miniature paintings to choose from such as the Mewar, Bundi, Kota, Marwar, Bikaner, Jaipur and Kishangarh styles. The painters paint on a variety of materials such as silk, ivory, cotton and paper and a lot of intricate detailing is done to make these works of art pop with life and colour. Beautiful, unique and a great part of the history and culture of Rajasthan, Rajasthani miniature paintings are a must-buy for any visitor to Rajasthan.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nih%C3%A2l_Chand_001.jpg",
        category: "Home-Decor",
      },
    ],
    tourist: [
      {
        name: "Jaipur",
        info: "Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink. The pink that colours the city makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.",
        images:
          "https://images.thrillophilia.com/image/upload/s--QrPjqNho--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/046/475/original/1525775826_Jaipur_Main.jpg.jpg?1525775826",
        location:
          "https://www.google.co.in/maps/place/Jaipur,+Rajasthan/@26.8851417,75.6504723,11z/data=!3m1!4b1!4m5!3m4!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709",
      },
      {
        name: "Amber Palace",
        info: "Amber (pronounced Amer) is at a distance of about 11 kilometres from Jaipur. Now a UNESCO World Heritage Site, it was the bastion of the Kachwahas of Amber, until the capital was moved to the plains, to what is today Jaipur. The palace, located in craggy hills, is a beautiful melange of Hindu and Mughal styles. Raja Man Singh I began construction in 1592 and the palace, which was built as a strong, safe haven against attacking enemies, was completed by Mirja Raja Jai Singh.",
        images:
          "https://images.thrillophilia.com/image/upload/s--UGQa1Iny--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/110/813/original/1492513727_amber_fort_4.jpg.jpg?1492513727",
        location:
          "https://www.google.co.in/maps/place/Amber+Palace/@26.9854865,75.8513454,15z/data=!4m5!3m4!1s0x0:0x6221df6747147e2b!8m2!3d26.9854865!4d75.8513454",
      },
      {
        name: "Jantar Mantar",
        info: "Now a UNESCO World Heritage Site, Jantar Mantar in Jaipur is considered to be the largest of the five astronomical observatories built by Maharaja Sawai Jai Singh II, the founder of Jaipur. It contains sixteen geometric devices, designed to measure time, track celestial bodies and observe the orbits of the planets around the sun.",
        images:
          "https://cdn1.goibibo.com/t_tg_fs/jaipur-jantar-mantar-148133403933-orijgp.jpg",
        location:
          "https://www.google.co.in/maps/place/Amber+Palace/@26.9854865,75.8513454,15z/data=!4m2!3m1!1s0x0:0x6221df6747147e2b?sa=X&ved=2ahUKEwjnp4SljfjlAhVy7XMBHZF7CYwQ_BIwH3oECCkQCA",
      },
      {
        name: "Hawa Mahal",
        info: "Hawa Mahal, literally the Palace of Winds, was built in 1799 by the poet king Sawai Pratap Singh as a summer retreat for him and his family. It also served as a place where the ladies of the royal household could observe everyday life without being seen themselves. This unique five-storey structure is a blend of Hindu and Islamic architecture, and the exterior, with its small latticed windows (called jharokhas), resembles the crown of Lord Krishna. The windows also serve as an air-conditioner of sorts, blowing cool air throughout the palace, making it the perfect retreat during summers.",
        images: "https://static.toiimg.com/photo/50355399/.jpg",
        location:
          "https://www.google.co.in/maps/place/Hawa+Mahal/@26.9239363,75.8267438,15z/data=!4m2!3m1!1s0x0:0x860e5d531eccb20c?sa=X&ved=2ahUKEwiOlby_jfjlAhV_7XMBHZ8cAgoQ_BIwH3oECA0QCA",
      },
    ],
  },
  {
    id: "4",
    name: "Kerala",
    capital: "Thiruvananthapuram,",
    about:
      "Kerala - home to the languid backwaters, long coastlines, sprawling tea gardens, and colourful dance forms, is also famously known as 'God?s Own Country'. Located on the Malabar coast of Southern India, it is a tiny sliver of paradise that is also one of the best tropical tourist destinations one can look for. Whether you want to bask in the sun and sand of the palm tree-lined Kovalam beach or want to take a hike to Munnar hill station, or even if you're going to walk down the bustling streets of Kochi, Kerala has everything on offer to take your pick from!The land of literate and simple citizens, Kerala amuses you with its spectacular dance forms, music and handicrafts. Considered to be one among the ten paradises of the world, Kerala is known for long palm tree beaches, beautiful rivers, pious inland water bodies and a calm, green atmosphere.",
    climate:
      "The coastal state of Keralalying on the Southwestern tip of India has commonly been called the tropical paradise of India. Bounded by Arabian Sea at one side and the Western Ghats on the other, the beautiful land with stunning beauty has an equable and tropical climate offering a pleasing atmosphere throughout the entire year. This coastal state has hot and humid climate during April-May and pleasant, cold climate in December-January. Summer extends from the month of April to June when the temperature reaches to a maximum of 33 degrees centigrade. Summer is followed by South West Monsoon that starts pouring in the month of June and continues till September. With the arrival of winter there is certain drop in the temperature and you can feel a slight chill due to the cold wind. Winter in Kerala lasts from from November to January or February.",
    history:
      "According to the Tamil classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[25] Lacking worthy enemies, he besieged the sea by throwing his spear into it.[25][26] According to the 17th century Malayalam work Keralolpathi, the lands of Kerala were recovered from the sea by the axe-wielding warrior sage Parasurama, the sixth avatar of Vishnu (hence, Kerala is also called Parasurama Kshetram 'The Land of Parasurama'[27]). Parasurama threw his axe across the sea, and the water receded as far as it reached. According to legend, this new area of land extended from Gokarna to Kanyakumari.[28] The land which rose from sea was filled with salt and unsuitable for habitation; so Parasurama invoked the Snake King Vasuki, who spat holy poison and converted the soil into fertile lush green land. Out of respect, Vasuki and all snakes were appointed as protectors and guardians of the land.",
    time: "The Best time to visit Kerala is Winter Season between September and March when the Kerala has comfortable climate and pleasant weather with less humidity in all the tourist places. People who are looking for ayurvedic treatments prefer Monsoon season from June to August",
    food: "Kerala cuisine is a combination of vegetables, meats and seafood flavoured with a variety of spices. One can notice the dominance of rice, coconut, seafood and variety of non-vegetarian dishes and the lavish use of spices like Pepper, Cardamom, Cloves, Ginger and chillies that add to the taste and flavour of Kerala's traditional food.With the Romans, Greeks, Dutch, Portuguese and many more invaders making their way to the ports of Kerela, it's no surprise that Kerala's food is so diverse and distinct from the rest of the country. There are differences seen in the taste and styles of north and south Kerala- the menu ranges from lip-smacking Mappila biryani, Sadya and brilliant non-vegetarian dishes, you are sure to find something new every day! Kerala is a paradise for seafood lovers; from an array of prawns, lobsters, rockfish and squid among the others, the place won't disappoint you. The Sadya is a substantial feast served on a banana leaf and consists of 24-28 dishes in a single meal. Onam Sadyas are something you should try if you're in Kerala. Other favourite dishes include Avial, Kozhikodan Halwa, Appam-stew combo, Kappa, Puttu-Meen curry and Paal Payasam. ",
    img: [
      "https://dmgupcwbwy0wl.cloudfront.net/system/images/000/246/174/b6e6fbfe0a70425bfa209af67b1a1ac6/x1000gt/shutterstock_1154918653.jpg?1552906145",
      "https://invest-india-revamp-static-files.s3.ap-south-1.amazonaws.com/s3fs-public/2018-07/Kerala_2.png",
      "https://www.bookitforgetit.com/wp-content/uploads/2016/10/Kerala-is-a-state-in-the-southwest-region-of-India.jpg",
      "https://img.veenaworld.com/group-tours/india/kerala/klhl-i/klhl-i-bnn-1.jpg",
      "https://i2.wp.com/www.abtravelworld.com/wp-content/uploads/2019/04/Kerala-beach.jpg?fit=980%2C500&ssl=1",
      "https://www.myjewishlearning.com/wp-content/uploads/2010/07/Kerala_Backwaters.jpeg",
    ],
    products: [
      {
        name: "Coffee",
        description:
          "It is no wonder that 10 million tonnes of coffee are consumed every year, such as the magic of this humble cup of beverage. If you too belong to the coffee-loving brigade, your Kerala shopping expedition can never really begin for you without getting your hands on an aromatic bag of locally grown Kaapi.  The delicious Malabar Monsoon Coffee available here is also a fantastic option to choose. Rich in flavour, aroma and colour as well, this coffee beans powder not only makes for a fantastic item to buy in Kerala not only for yourself but also as a souvenir or gift for your friends and family",
        image:
          "https://blog.thomascook.in/wp-content/uploads/2018/04/South-Indian-Coffee-e1524192277128.jpg",
        category: "Grocery",
      },
      {
        name: "Aroma Oila",
        description:
          "Kerala is famous for its Ayurvedic treatments for various purposes from treating certain ailments to beauty procedures too. There are many places to visit in Kerala that are world famous for their Ayurvedic treatments, yoga and more. The massages are carried out through different therapies using various aroma oils, based on the concept of aromatherapy. Even most of the resorts and hotels in the state have spa centres offering rejuvenating massages. Therefore buying aroma oils has inadvertently become an important part of your Kerala Shopping experience. You will find top quality aroma oils here of different varieties, used for different purposes.",
        image:
          "https://blog.thomascook.in/wp-content/uploads/2018/04/oil-e1524192373817.jpg",
        category: "Grocery",
      },
    ],
    tourist: [
      {
        name: "Munnar",
        info: "The idyllic hill station Munnar - famous for its tea estates, exotic lush greenery and craggy peaks, is located in the Western Ghats, in the state of Kerala. It serves as the commercial centre for some of the world’s largest tea estates. In addition, Munnar has many protected areas which are home to endemic and highly endangered species like the Nilgiri Thar and the Neelakurinji.One of the biggest tea-plantation area of South India, Munnar is one of the most beautiful and popular hill-stations of Kerala. Situated on the banks of three rivers- Madupetti, Nallathanni and Periavaru, Munnar is also blessed with natural view-points apart from the tea-plantations. Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions.",
        images:
          "https://images.thrillophilia.com/image/upload/s---dSM_iYr--/c_fill,f_auto,fl_strip_profile,g_auto,h_600,q_auto,w_975/v1/images/photos/000/126/889/original/1522671846_Munnar.jpg.jpg?1522671846",
        location:
          "https://www.google.co.in/maps/place/Munnar,+Kerala+685612/@10.0806491,77.0466683,14z/data=!3m1!4b1!4m5!3m4!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248",
      },
      {
        name: "Alleppey",
        info: "Allepey is also popular for its Houseboat cruises that pass through the serene backwaters, where you can catch glimpses of green paddy fields, choir making activities, beautiful avifauna and witness the life of locals in Kerala. Towards the shore lies the Alleppey beach in the Arabian Sea, a beautiful example of the gems you’d find along the Malabar Coast. The appeal of this beach is only amplified by the history attached to it, and a walk down the 137-year old pier is a must. Be sure to catch a traditional snake boat race in the months of August and September and try out some toddy (palm wine) at a local toddy shop for adding a touch of authenticity to your travel experience in Allepey.",
        images:
          "https://miro.medium.com/max/2560/1*MjHGGH7V_SeoC9t2zmC-lA.jpeg",
        location:
          "https://www.google.co.in/maps/place/Alappuzha,+Kerala/data=!4m2!3m1!1s0x3b0884f1aa296b61:0xb84764552c41f85a?sa=X&ved=2ahUKEwj6uuG_nPnlAhXSzDgGHaOWA00Q8gEwJXoECBwQBA",
      },
      {
        name: "Wayanad",
        info: "Wayanad is best known for the wildlife reserves - Wayanad wildlife reserve which is home to an exquisite variety of flora and fauna. Wayanad wildlife reserve is an integral part of the Nilgiri biosphere reserve peacefully located amidst the serene hills of Western Ghats. Wayanad homes a wide variety of wildlife like elephants, leopards, and bears. Wayanad is a perfect weekend idea from the cities of South India. If taking a road trip from Bangalore, you will drive through three national parks: Nagarhole, Bandipur and Mudumalai.",
        images: "https://www.wayanad.com/files/slides/3253378071.jpg",
        location:
          "https://www.google.co.in/maps/place/Wayanad,+Kerala/@11.7141243,75.8289888,10z/data=!3m1!4b1!4m5!3m4!1s0x3ba60cf91a9c5f0d:0x71dd4da2e1d3e46f!8m2!3d11.6853575!4d76.1319953",
      },
      {
        name: "Kochi",
        info: "The city is marked by influences of Arabs, Dutch, Phoenicians, Portuguese, Chinese and the British city as well as that of the Indian rule of the Chera Dynasty followed by rule of the Feudal Lords. A gaggle of islands interconnected by ferries, this cosmopolitan town has upmarket stores, art galleries and some of the finest heritage accommodations. In a true vintage-meets-future fashion, pubs, restaurants, shopping hubs and futuristic stores crowd Ernakulum, Jew Town and Fort Kochi while palaces, beaches, temples and heritage sites marking their presence too. Kochi is also an important place to see Kathakali and Kalarippayattu performances and annual Biennale Festival.",
        images: "https://www.holidify.com/images/bgImages/KOCHI.jpg",
        location:
          "https://www.google.co.in/maps/place/Kochi,+Kerala/@9.9823428,76.1608472,11z/data=!3m1!4b1!4m5!3m4!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041",
      },
    ],
  },

  {
    id: "6",
    name: "Uttarakhand",
    capital: "Dehradun",
    about:
      "Famously known as Devbhumi, or the Land of the Gods, Uttarakhand is a land of untouched natural beauty and sublime spirituality. Carved out from Uttar Pradesh, the state, formerly known as Uttaranchal, is a place that not only boasts of a scintillating view of the Himalayas but also exhibits a cultural ethos which speaks of a simplistic and harmonic coexistence with nature. With oaks, birches, silver firs and rhododendrons adorning the steep mountain slopes, Uttarakhand offers you a glimpse into an untainted and idyllic world.Uttarakhand is a very popular pilgrimage site, as it is the originating spot of the Ganga and the Yamuna, two of the most sacred rivers for Hindus. Uttarakhand is home to the Char Dhams, the four most pious sites of pilgrimage revered by the Hindus ? Gangotri, Yamunotri, Kedarnath, and Badrinath. Thousands of tourists visit Uttarakhand annually to pay homage to the Char Dhams.",
    climate:
      "Climate ranges from subtropical in the southern foothills, averaging summer temperatures of about 30° C (about 86° F) and winter temperatures of about 18° C (about 64° F).Warm temperate conditions prevail in the Middle Himalayan valleys, with summer temperatures usually hovering about the mark of 25° C (about 77° F) and cooler winters.Cool temperate conditions dominate the higher areas of the Middle Himalayas, where the summer temperatures are usually around 15 to 18° C (59 to 64° F) and winters drop below the freezing point.",
    history:
      "Ancient rock paintings, rock shelters, paleolithic stone tools (hundreds of thousands of years old), and megaliths provide evidence that the mountains of the region have been inhabited since prehistoric times. There are also archaeological remains which show the existence of early Vedic (c. 1500 BCE) practices in the area. The Pauravas, Khasas, Kiratas, Nandas, Mauryas, Kushanas, Kunindas, Guptas, Karkotas, Palas, Gurjara-Pratiharas, Katyuris, Raikas, Chands, Parmars or Panwars, Mallas, Shahs and the British have ruled Uttarakhand in turns.It is believed that the sage Vyasa scripted the Hindu epic Mahabharata in the state. Among the first major dynasties of Garhwal and Kumaon were the Kunindas in the 2nd century BCE who practised an early form of Shaivism and traded salt with Western Tibet.",
    time: "Uttarakhand can be visited throughout the year except for the peak monsoon season in July and August. Uttarakhand is an ever embracing state, but summer is the best time to visit this state when the temperature is cold and pleasant. July and August must be avoided as the state receives high rainfall during these months making it wet and damp. Winters are icy, and some parts of the state also experience snowfalls during this period making it even more picturesque and beautiful.",
    food: "The distinctive characteristic food of Uttarakhand lies in the way it is prepared- wood and charcoal are burnt which helps to keep the nutritional content intact. The food is simple, prepared with local ingredients, using herbs and spices which make the food highly energetic. The cooking methods here, are generally elaborate and time-consuming and make use of a generous dash of distinct spices.Uttarakhand doesn?t have one uniform cuisine; instead, the local dishes keep changing as you move from place to place. The staples are mostly North Indian, though, with a significant part of the eateries and restaurants ? especially in an around the pilgrimage sites ? being vegetarian.The cooking often uses a generous use of 'Ghee' which completes charcoal and dishes. The food is also usually prepared using lentils and pulses. The area fosters both Garhwali and Kumauni cuisines which are somewhat similar in elements but differ slightly in their styles. Even though the food is mostly vegetarian, one can find equally mouth-watering preparations of chicken and mutton in the area. Rice and Hash seeds known as 'Bhaang' are essential elements of any platter here. Bhatt ki Churdkani, Arsa (a sweet dish), Kafuli(a preparation of local green leafy vegetables), Phannu, Badi, Rus(development of several lentils), Gulgula (a sweet snack), Kandalee ka Saag, Palau are the local and unique preparations almost special to the area.",
    img: [
      "https://cdn1.goibibo.com/india-uttarakhand-149361554819o.jpg",
      "https://images.thrillophilia.com/image/upload/s--RZhmz_7S--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/082/491/original/1464188297_I2GZl5w7lL-1920x1080.jpg.jpg?1464188297",
      "https://www.holidaytravel.co/uploaded_files/destination_img/2017_46592e7e82dbb7balmora.jpg",
      "https://www.holidify.com/images/compressed/flexPage_35.jpg",
      "https://www.holidify.com/images/compressed/664.jpg?v=1.1",
      "https://www.chardham-tours.com/wp-content/uploads/2018/07/uttarakhand-tour-packages.jpg",
    ],
    products: [
      {
        name: "Jams & Pickles",
        description:
          "One of the famous things to buy while shopping in Uttarakhand is the fresh jam. It is way more delicious and fresh than the ones you buy from those shelves in supermarts. Once you taste these jams, you will feel like you are actually eating fruit. The variety of jams is galore too. You have mixed fruit, apple, strawberry, blueberries, mango, etc. You can even buy fresh pickles in Uttarakhand. Some of the best pickles to buy are mushrooms, lotus stem, and mixed pickle.",
        image:
          "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Jams-Pickles1.jpg",
        category: "Grocery",
      },
      {
        name: "Local Wine",
        description:
          "If you are a wine connoisseur, then you should try the local wines made in the wineries of Uttarakhand. Sure, they don’t taste better than Sula or those expensive French wine, but they will definitely get you tipsy. These wines are made with a variety of sources like apple cider and grapes. It is worth a try. They are not very expensive either. You will find local wine shops easily in the streets and markets from where you can buy as many bottles of wine as you want.",
        image:
          "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Local-Wine.jpg",
        category: "Grocery",
      },
    ],
    tourist: [
      {
        name: "Rishikesh",
        info: 'Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the "Yoga Capital of the World". With whitewater rafting industry growing and varied camping and cafe spots springing up, Rishikesh has grown immensely as a favourite, catering to people with different needs.Over the years, the tranquil town has become extremely popular as the top spiritual destination in the world, especially after the Beatles association with Maharishi Mahesh Yogi here in the late \'60s. As it lies on the holy banks of river Ganga, Rishikesh has been a hub of Sadhus (saints) with numerous ashrams teaching spirituality, yoga, meditation and Ayurveda springing up, the most popular of which is the Beatles Ashram.',
        images: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
        location:
          "https://www.google.co.in/maps/place/Rishikesh,+Uttarakhand/@30.0876602,78.2005685,12z/data=!3m1!4b1!4m5!3m4!1s0x39093e67cf93f111:0xcc78804a6f941bfe!8m2!3d30.0869281!4d78.2676116",
      },
      {
        name: "Nainital",
        info: "The gem of Uttarakhand - Nainital is a charming hill station that sits prettily at the green foothills of the Kumaon ranges in the Himalayas. Located at an elevation of around 1938 metres, the epicentre of the town’s popularity and beauty lies within the gorgeous Naini Lake, after which the town is named. Founded by the British due to its resemblance to the Cumbrian Lake district, Nainital brims with elegant colonial structures that amplify the beauty of this place. It is a perfect weekend getaway from the Indian capital of Delhi.This quaint little town experiences a pleasant climate throughout the year, making it a tourist getaway, especially preferred by families and honeymooners. The Naini Lake, along with the other lakes in the area, has earned this town the title of ‘City of Lakes’. Whether you want to go boating on the beautiful Naini Lake or any of the other lakes, relish some local delicacies, shop at the Tibetan Market and Mall Road, or take a ropeway ride to soak in the beauty of the Himalayas from Snow View Point, Nainital is sure to leave an imprint on you that will last a lifetime.",
        images: "https://www.holidify.com/images/bgImages/NAINITAL.jpg",
        location:
          "https://www.google.co.in/maps/place/Nainital,+Uttarakhand/@29.3835928,79.4377611,14z/data=!3m1!4b1!4m5!3m4!1s0x39a0a1bc28fd9d61:0x7cae7ba916987db3!8m2!3d29.3919202!4d79.4542033",
      },
      {
        name: "Mussorie",
        info: "If your idea of the perfect holiday involves tranquil hills, untouched nature and a holiday experience that is unadulterated in the truest sense of the term, Mussoorie is the place you should be heading to. Nestled amidst the foothills of the Garhwal Himalayan ranges, Mussoorie, also known as Queen of The Hills, stands at an altitude of 7000 feet above sea level, and has a cool, pleasant climate throughout the year. The pristine, natural beauty of Mussoorie makes it a very popular choice of holiday for honeymooners. If you want to enjoy the beautiful sight of the rolling green slopes juxtaposed with the snow-capped peaks of the Himalayas, Mussoorie is the place for you to be.This beautiful hill station is the perfect retreat from the sweltering weather of the plains, and the fact that it was a very popular holiday destination during the British era can be seen from the multitude of British remnants engulfing the city, such as the archaic architecture of the hotels and churches dotting the entire terrain.",
        images: "https://www.holidify.com/images/bgImages/MUSSOORIE.jpg",
        location:
          "https://www.google.co.in/maps/place/Mussoorie,+Uttarakhand/@30.4547186,78.0414204,13z/data=!3m1!4b1!4m5!3m4!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4597892!4d78.0643723",
      },
      {
        name: "Badrinath",
        info: "Perched on the Garhwal hill tracks, near Alaknanda River, the most sacred Badrinath Temple or the Badrinarayan Temple is dedicated to Lord Vishnu. The temple is also one of the four Char Dham and Chota Char Dham pilgrimage yatras.  Situated at the height of 10,279 feet, the temple is surrounded by lofty snow-clad Himalayas. Believed to be originally established by the saint, Adi Shankaracharya, the black stone idol of Lord Vishnu is 1m tall and is considered to be one of the 8 swayam vyakta kshetras or self-manifested statues of Vishnu. It also finds its mention in the 108 Divya Desams devoted to Lord Vishnu in India.The religious importance and purity of Badrinath Temple allures scores of devotees.Badrinath Temple has a Tapt Kund, a hot water spring which is considered to have medicinal values. River Alaknanda is known to originate from here. The vibrant festivals of Mata Murti Ka Mela and the Badri Kedar Festival give you another reason to visit the temple.",
        images: "https://www.holidify.com/images/bgImages/BADRINATH%20.jpg",
        location:
          "https://www.google.co.in/maps/place/Badrinath,+Uttarakhand+246422/@30.7417338,79.4852149,15z/data=!3m1!4b1!4m5!3m4!1s0x39a78e9f973108e7:0xf05a8b5e0c71473!8m2!3d30.7433085!4d79.4937634",
      },
    ],
  },
  {
    id: "7",
    name: "Himachal Pradesh",
    capital: "Shimla",
    about:
      "A place of immense beauty and charm, Himachal is endowed with clear and serene lakes, lofty mountains, ancient temples and cheerful people. Home to some of the best tourist destinations like Kullu, Manali, Chamba and Shimla, Himachal is paradise on earth inviting an onslaught of tourists all around the year. The natural beauty of Himachal along with the hills and valleys add peace to your holiday while the pilgrimages make the land divine.Owing to the massive production of apples, Himachal Pradesh is known as the State of apples. The state is known for its eco-friendly environment, picturesque natural scenery, colourful culture, adventure sports, warm and hospitable people and a variety of fairs, festivals and celebrations throughout the year. McLeod Ganj, the abode of the 14th Dalai Lama is another favourite spot a must visit in the traveller's paradise.",
    climate:
      "There is a huge variation in the climatic conditions of Himachal Pradesh due to variation in altitude (450–6500 metres). The climate varies from hot and sub-humid tropical (450–900 metres) in the southern low tracts, warm and temperate (900–1800 metres), cool and temperate (1900–2400 metres) and cold glacial and alpine (2400–4800 metres) in the northern and eastern high elevated mountain ranges.\nBy October, nights and mornings are very cold. Snowfall at elevations of nearly 3000 m is about 3 m and lasts from December start to March end. About 4500 m, is perpetual snow.\nThe spring season starts from mid February to mid April. The weather is pleasant and comfortable in the season.",
    history:
      "During the Vedic period, several small republics known as Janapada existed which were later conquered by the Gupta Empire. After a brief period of supremacy by King Harshavardhana, the region was divided into several local powers headed by chieftains, including some Rajput principalities. These kingdoms enjoyed a large degree of independence and were invaded by Delhi Sultanate a number of times.Mahmud Ghaznavi conquered Kangra at the beginning of the 11th century. Timur and Sikander Lodi also marched through the lower hills of the state and captured a number of forts and fought many battles.Several hill states acknowledged Mughal suzerainty and paid regular tribute to the Mughals.The Kingdom of Gorkha conquered many kingdoms and came to power in Nepal in 1768.",
    time: "Best time to visit Himachal is between February and June (spring and summer). The state also undergoes a beautiful transformation during the winters, i.e. between October and February making it an ideal time to experience snow (at places located on higher altitudes)",
    food: "",
    img: [
      "https://cdn1.goibibo.com/india-himachal-pradesh-147709567681o.jpg",
      "https://www.clubmahindra.com/sites/default/files/Himachal%20Pradesh%20Tourism%20-%20A%20detailed%20Guide%20For%20Family%20Trip%20To%20Himachal%20Pradesh_Header.jpg",
      "https://toib.b-cdn.net/wp-content/uploads/2018/01/shimla.jpg",
      "https://static.toiimg.com/thumb/70229685/janjehli.jpg?width=748&height=499",
      "https://majesticjourney.in/wp-content/uploads/2019/04/himachal-pradesh-header.jpg",
      "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/10/Untitled-design-8-1.png",
    ],
    products: [
      {
        name: "Dorjes",
        description:
          "Dorjes are weapon-like structures which are used as a ritual object to symbolize both the properties of a diamond and a thunderbolt. They are essentially a type of club with a ribbed spherical head. They make beautiful show pieces or gift items. You can pick one up while shopping at Old Manali.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vajra.jpg/751px-Vajra.jpg",
        category: "",
      },
      {
        name: "Thangkas",
        description:
          "Thangkas are paintings made on cotton, or silk appliqué cloth, usually depicting a Buddhist deity, or a spiritual scene. Generally, thangkas last a very long time and retain much of their lustre, but due to their delicate nature, they have to be kept in dry places where moisture will not affect the quality of the silk. They are commonly called a scroll-painting.",
        image:
          "https://farm2.staticflickr.com/1330/4724590679_0f16938940_b.jpg",
        category: "",
      },
    ],
    tourist: [
      {
        name: "Manali",
        info: "Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, Manali is one of the most popular hill stations in the country. With jaw-dropping views, lush green forests, sprawling meadows carpeted with flowers, gushing blue streams, a perpetual fairy-tale like mist lingering in the air, and a persistent fragrance of pines and freshness -  Manali has been blessed with extraordinary scenic beauty. From museums to temples, from quaint little hippie villages to bustling upscale streets, river adventures to trekking trails, Manali has every reason to be the tourist magnet it is, all year round.Clean roads, swaying eucalyptus trees, endearing little eateries, small kitschy local market places, and cafes which serve delicious local food at unbelievable prices, Old Manali is a serene, tranquil place, whose lingering silence is broken only by the twittering of the birds and the sound of the roaring waters of the Kullu river.",
        images: "https://www.holidify.com/images/bgImages/MANALI.jpg",
        location:
          "https://www.google.co.in/maps/place/Manali,+Himachal+Pradesh/@32.2394177,77.1696102,14z/data=!3m1!4b1!4m5!3m4!1s0x39048708163fd03f:0x8129a80ebe5076cd!8m2!3d32.2396325!4d77.1887145",
      },
      {
        name: "Shimla",
        info: "Situated at a height of 2200m, Shimla is the capital and the largest city of Himachal Pradesh in India. Set amidst beautiful hills and mystical woods, Shimla has been a very popular hill-station among Indian families and honeymooners since the last 50 years.\n\nBritish loved this city so much that they made Shimla their summer capital in 1864 and used to rule the sub-continent from here whenever the temperature rose in the nearby plains. Shimla still retains its old world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and beautiful churches.",
        images: "https://www.holidify.com/images/bgImages/SHIMLA.jpg",
        location:
          "https://www.google.co.in/maps/place/Shimla,+Himachal+Pradesh/@31.0782147,77.1240016,13z/data=!3m1!4b1!4m5!3m4!1s0x390578e3e35d6e67:0x1f7e7ff6ff9f54b7!8m2!3d31.1048145!4d77.1734033",
      },
      {
        name: "Mcleodganj",
        info: "Mcleodganj is a hill station near Dharamshala, popular among trekkers. Its culture is a beautiful blend of Tibetan with some British influence.Also known as Little Lhasa and famous around the world for being home to the Tibetan spiritual leader Dalai Lama, Mcleod Ganj is a beautiful town situated near upper Dharamsala. Nestled amidst majestic hills and lush greenery, this town is culturally blessed by a prominent Tibetan influence owing to the major settlement of Tibetans here. Mcleodganj has one of the most mesmerising landscapes in the entire state of Himachal Pradesh and attracts a lot of tourists throughout the year. The towns of Dharamsala, Mcleodganj, Bhagsu Nag and Kangra are situated very close to each other and tourists must cover all these destinations while travelling here. Few of the most eminent and religiously significant monasteries in India are located here, including the Namgyal Monastery and Tsuglagkhang, where the spiritual leader Dalai Lama resides. Tourists must also visit the scenic Dal Lake and Triund, which are apt for quiet picnics.",
        images: "https://www.holidify.com/images/bgImages/MCLEODGANJ.jpg",
        location:
          "https://www.google.co.in/maps/place/McLeod+Ganj,+Dharamshala,+Himachal+Pradesh/@32.2450192,76.3068294,15z/data=!3m1!4b1!4m5!3m4!1s0x391b56d4e3d36d19:0xa3e8725f0584be76!8m2!3d32.2425758!4d76.3212781",
      },
      {
        name: "Dalhousie",
        info: "The tiny tinsel town Dalhousie tucked away in the lap of Himachal Pradesh is a piece of paradise for all the travellers. It boasts of old world charm, mesmerising natural landscape, pine-clad valleys, flower bedecked meadows, fast flowing rivers, magnificent misty mountains and some of the most spectacular views in the world. The air smells of the Scottish and Victorian architecture and the ambience reminds you of the pristine British flavours.Dalhousie, one of the favourite among most tourists travelling to Himanchal Pradesh is famously known for its mesmerizing natural beauty and its old world charm. This hill station was one of the most favourite summer destinations of the ruling Britishers and this is truly reflected in the majestic Victorian style mansions in this region. Situated far from the buzzing cities in the country, this quaint town transports you to a pollution-free environment in the lap of nature. Dalhousie is known for its scenic beauty has a number mountains and river streams that tourists must visit. Among them the most famous are Panch Pulla, Satdhara Falls and the Daikund peak.",
        images: "https://www.holidify.com/images/bgImages/DALHOUSIE.jpg",
        location:
          "https://www.google.co.in/maps/place/Dalhousie,+Himachal+Pradesh/@32.5402904,75.9560874,14z/data=!3m1!4b1!4m5!3m4!1s0x391c9138637f1ae1:0xbac8f1954c198c20!8m2!3d32.5387385!4d75.9709978",
      },
    ],
  },
  {
    id: "8",
    name: "Gujarat",
    capital: "Gandhinagar",
    about:
      "Located in the westernmost part of India, Gujarat is home to several architectural marvels and is famous for its vibrant culture and rich heritage, apart from the scenic landscapes and mouth-watering cuisine. Offering a broad range of the most spectacular attractions, Gujarat, also known as 'The Land of Legends', presents a perfect blend of art, history, music and culture.Being the sole home of the pure Asiatic Lions, Gujarat also offers splendid views of the scenic beauty ranging from the Great Rann of Kutch to the hills of Satpura. Apart from the picturesque landscapes and the more than 1600 kilometres long coastline, Gujarat also offers its tourists with some magnificent ancient cave paintings, historic murals, holy temples, historic capitals, wildlife sanctuaries, beaches, hill resorts and fascinating handicrafts. Gujarat is a dry state but the cultural exuberance of the Gujratis will give rejuvenate you.",
    climate:
      "Situated near the Chenab River, about 120 km to the north of Lahore, Gujarat is a coastal state lying on the west coast of India. Blessed with the longest coastline (1290 km) in the country, Gujarat is a serene and pristine land where the azure seas meet sparkling sands. We, at Indianholiday, are providing you a detailed guide on Climate in Gujarat.Gujarat is positioned between 20° 6' N to 24° 42' N latitude and 68° 10' E to 74° 28' E longitude. The westernmost state in India, Gujarat is bordered by Pakistan and Rajasthan state in the north east, Madhya Pradesh in the east, and Maharashtra and the Union Territories of Daman, Diu, Dadra and Nagar Haveli in the south.",
    history:
      "The history of Gujarat began with Stone Age settlements followed by Chalcolithic and Bronze Age settlements like Indus Valley Civilisation. Gujarat's coastal cities, chiefly Bharuch, served as ports and trading centers in the Nanda, Maurya, Satavahana and Gupta empires as well as Western Kshatrapas period. After the fall of the Gupta empire in the 6th century, Gujarat flourished as an independent Hindu/Buddhist state. The Maitraka dynasty, descended from a Gupta general, ruled from the 6th to the 8th centuries from their capital at Vallabhi, although they were ruled briefly by Harsha during the 7th century. The Arab rulers of Sindh sacked Vallabhi in 770, bringing the Maitraka dynasty to an end. The Gurjara-Pratihara Empire ruled Gujarat after from the 8th to 10th centuries. As well as, for some periods the region came under the control of Rashtrakuta Empire and Pala Empire. In 775 the first Parsi (Zoroastrian) refugees arrived in Gujarat from Greater Iran.",
    time: "The best time to visit Gujarat is during the winter season, i.e. between October and February. Since it is a dry region and experiences high temperatures and humidity; visiting the state in the monsoons (July to September) may also be a good idea especially in the regions that receive less or no rainfall. During summers, i.e. between March and June, the temperature soars high, making it difficult for travellers to explore most of the attractions, but there are some places worth visiting like the Saputara Hill Station and the natural reserves that provide quite some respite in the scorching heat.",
    food: "",
    img: [
      "https://www.gujarattourism.com/file-manager/photo-gallery/1433844143-adalaj-vav.jpg",
      "https://www.swantour.com/blogs/wp-content/uploads/2018/04/Gujarat-Tourism.jpg",
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/12/753361-statueofunity-reuters-110118.jpg",
      "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/11/Museums-in-Gujarat.jpg",
      "https://www.gujarattourism.com/file-manager/photo-gallery/shamlaji.png",
      "https://www.visittnt.com/images/gujarat/gujarat-tourism.jpg",
    ],
    products: [
      {
        name: "Bandhej",
        description:
          "The best place for Bandhani and cotton fabric shopping in Ahmedabad is at Bandhej. Started in 1985 by Archana Shah, Bandhej has become synonymous with sustainable clothing. Its designs are elegant and change with the trends and seasons. Best picks at Bandhej would include kurtas, dupattas and tunic skirts.",
        image:
          "https://cdn.shopify.com/s/files/1/1027/2035/products/5_fad6153f-6343-4c4c-b66e-d8a41764155b.jpg?v=1571438909",
        category: "",
      },
    ],
    tourist: [
      {
        name: "Ahmedabad",
        info: "A rapidly growing metropolis, an industrial hub, an educational hotspot, and a city with a magnificent past – Ahmedabad is one of the most important cities in Gujarat. Located on the banks of the Sabarmati River, Ahmedabad is the former capital of Gujarat, and its delicious food, colourful culture is making it a fast-growing tourist destination. The historic city of Ahmedabad or the old part of the city was declared as the UNESCO World Heritage Site.Home to a plethora of remarkable temples like Swaminarayan Temple, intriguing museums and classy markets, with a little bit of colonial history attached to it, Ahmedabad is an excellent example of how a city can still retain every bit of its old-world charm while still rapidly progressing on the path of globalisation.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Jama_Masjid_Ahmedabad_heritage_20190515120421.jpg",
        location:
          "https://www.google.co.in/maps/place/Ahmedabad,+Gujarat/data=!4m2!3m1!1s0x395e848aba5bd449:0x4fcedd11614f6516?sa=X&ved=2ahUKEwiM-bWC84fmAhVSwjgGHQ1sCLQQ8gEwHXoECBwQBA",
      },
      {
        name: "Kutch",
        info: "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past.Kutch is probably one of the most beautiful, yet surreal places in India. With the vast expanses of white salt desert in the Rann of Kutch area, this is an amazing experience to witness. One would be able to see just stretches of pure white land as far as the eyesight goes. The place comes to life during the winters when the Rann Festival is held during December-February everywhere in which there are huge camp settlements with cultural programs, functions and adventure activities like hot-air ballooning. Kutch is also among the largest district of India with a terribly low population density.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Great_Rann_of_Kutch_20180205161526.jpg",
        location:
          "https://www.google.co.in/maps/place/Kutch,+Gujarat/@23.7083639,68.8013806,8z/data=!3m1!4b1!4m5!3m4!1s0x39511e0750db4489:0x2049bf8ec25dea88!8m2!3d23.7337326!4d69.8597406",
      },
      {
        name: "Gir National Park",
        info: "Gir National Park is the only remaining home for the Asiatic Lions that are almost a definition to this park in Gujarat, which has a lot more to offerGir provides you with the unique experience of visiting a place which almost singularly plays a crucial and defining role in the preservation and sustaining of a certain species. The preservation of these lions was initiated by the Nawab of Junagadh when these were just about to enter the phase of extinction due to hunting. Official count said that there were 411 lions in 2010. Also, there are roughly different 2375 species of fauna here with 38 species of mammals, over 300 species of birds, 37 species of reptiles and over 2000 species of insects.",
        images:
          "https://www.holidify.com/images/bgImages/GIR-NATIONAL-PARK.jpg",
        location:
          "https://www.google.co.in/maps/place/Gir+National+Park/@21.1329211,70.7843612,13z/data=!3m1!4b1!4m5!3m4!1s0x3be2bfc278812b53:0x3408d6d983464baf!8m2!3d21.1243054!4d70.8241507",
      },
      {
        name: "Somnath",
        info: "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.Primarily a temple town, Somnath is a place where a strong scent of religion and legends lingers around tourism and even daily life. Its spiritual environment is ornamented by the huge number of temples in the area, however, Somnath also offers beaches, museums and other attractions. While the Somnath temple and Somnath beach are the primary places to visit here, Gita Mandir, Balukha Tirtha, Kamnath Mahadev Temple, Somnath Museum are some of the other places that one can visit.",
        images: "https://www.holidify.com/images/bgImages/SOMNATH.jpg",
        location:
          "https://www.google.co.in/maps/place/Somnath,+Gujarat/@20.9031968,70.3730104,14z/data=!3m1!4b1!4m5!3m4!1s0x3bfd328b9ce28aeb:0x6d2efaa0d9eda083!8m2!3d20.9060022!4d70.3843721",
      },
    ],
  },
];
