import "./FullBlog";
const Datatwo = [
  {
    id: 1,
    imgscr:
      "https://chartio.com/images/tutorials/business-intelligence/embedded-analytics-what-is-it-and-how-is-it-used/levelup.png",
    title: "Embedded Analytics: What Is It and How Is It Used?",
    description:
      "What if you could place all the data, visualizations, and insights a business intelligence (BI) platform can provide wherever you want? You could bring the full benefits of BI to your employees",
    link: "https://chartio.com/learn/business-intelligence/embedded-analytics-what-is-it-and-how-is-it-used/#:~:text=%20How%20is%20embedded%20analytics%20used%3F%20%201,your%20product%2C%20enhancing%20the%20end-user%20experience.%20More%20",
    
  },
  {
    id: 2,
    imgscr:
      "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/posts/business-professional-performing-data-wrangling.jpg&w=1200&h=630",
    title: "Data Wrangling: What It Is & Why It’s Important",
    description:
      "Discovery refers to the process of familiarizing yourself with data so you can conceptualize how you migh",
    link: "https://online.hbs.edu/blog/post/data-wrangling#:~:text=%20Data%20Wrangling%20Steps%20%201%20Discovery.%20Discovery,a%20more%20usable%20state%2C%20you%20must...%20More%20",
    
  },
  {
    id: 3,
    imgscr:
      "https://i.pinimg.com/736x/fc/09/aa/fc09aa0cac8d03eacd6297398eabe354.jpg",
    title: "Bias vs Variance In Machine Learning",
    description:
      "There are various ways to evaluate a machine-learning model. We can use MSE (Mean Squared Error) for Regression; Precision ",
    link: "https://www.geeksforgeeks.org/bias-vs-variance-in-machine-learning/",
    
  },
  {
    id: 4,
    imgscr:
      "https://th.bing.com/th/id/OIP.zUdfybspp6Rnui9snTebpQHaD4?pid=ImgDet&rs=1",
    title: "Ensemble Learning - Bagging",
    description:
      "Bagging is an ensemble machine learning algorithm that combines the predictions from many decision trees. It is also easy ",
    link: "https://www.bing.com/search?q=Machine+Learning+Tutorial+Python+-+21%3A+Ensemble+Learning+-+Bagging&cvid=9d40ca12411347e184282af379b860f8&aqs=edge..69i57j69i60j69i64.1003j0j4&FORM=ANAB01&PC=W037",
    
  },
  {
    id: 5,
    imgscr:
      "https://th.bing.com/th/id/OIP.rnwluT3zE8_vv0ffRXjjQAHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    title: "Introduction (Real Estate Price Prediction Project)",
    description:
      "This data science project series walks through step by step process of how to build a real estate price prediction website. We will first  ",
    link: "https://www.youtube.com/watch?v=rdfbcdP75KI",
    
  },
  {
    id: 6,
    imgscr:
      "https://th.bing.com/th/id/OIP.zesHJAXjvMgsRjqoMXZNVwHaEx?w=259&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    title: "Data Cleaning (Real Estate Price Prediction Project)",
    description:
      "Creating a Machine Learning model to predict the home prices in Bangalore, India. We are going to use the dataset from Kaggle.com.We are also goi ",
    link: "https://github.com/satishgunjal/House-Price-Prediction-Project",
    
  },
  {
    id: 7,
    imgscr:
      "https://th.bing.com/th/id/OIP.09-06F3I37nQ3d8k-vLRXwHaEP?w=314&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    title: "Feature Engineering (Real Estate Price Prediction)",
    description:
      "This data science project series walks through step by step process of how to build a real estate price prediction website. We wil",
    link: "https://www.youtube.com/watch?v=gMoJIH0prL4",
    
  },
  {
    id: 8,
    imgscr:
      "https://th.bing.com/th/id/OIP.-03KpkRZZRIbsRrmjKS1SwHaHa?w=189&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    title: "Outlier Removal (Real Estate Price Prediction Project)",
    description:
      "This data science project series walks through step by step process of how to build a real estate price prediction website. We will first bu ",
    link: "https://www.youtube.com/watch?v=cbqZa_1vzcg",
    category:"blreporting"
  },
  {
    id: 9,
    imgscr:
      "https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
    title: " Model Building (Real Estate Price Prediction Project",
    description:
      "A framework for an effective BI solution for analyzing the real estate market and estimating the price of the p",
    link: "https://www.semanticscholar.org/paper/Real-Estate-Price-Prediction-Using-Machine-Learning-Ravikumar/4adf91fc52efc44542091bc0899c164584ff08be",
    category:"sapdata"
  },
  // {
  //   id: 10,
  //   imgscr:"https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
  //   title:"Lorem ipsum dolor sit amet, consectetur adipisc",
  //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
  //   link:"https://lipsum.com/"
  // },
  //   {
  //     id: 11,
  //     imgscr:"https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
  //     first_name: "Hamid",
  //     last_name: "McShirie",
  //     email: "hmcshiriea@nymag.com",
  //     gender: "Male",
  //     ip_address: "29.59.41.29"
  //   },
  //   {
  //     id: 12,
  //     imgscr:"https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
  //     first_name: "Mac",
  //     last_name: "Jackways",
  //     email: "mjackwaysb@php.net",
  //     gender: "Male",
  //     ip_address: "146.45.16.43"
  //   },
  //   {
  //     id: 13,
  //     imgscr:"https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
  //     first_name: "Melinda",
  //     last_name: "Budnk",
  //     email: "mbudnkc@blogtalkradio.com",
  //     gender: "Female",
  //     ip_address: "95.180.104.92"
  //   },
  //   {
  //     id: 14,
  //     imgscr:"https://cdn.vox-cdn.com/thumbor/RyQEP3EYoG6RK7D4z96VKwhxs3Q=/0x0:1600x900/1400x1400/filters:focal(0x617:256x873):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54371427/CODWWII_Portrait_Wide.0.jpg",
  //     first_name: "Pavel",
  //     last_name: "Spenclay",
  //     email: "pspenclayd@flickr.com",
  //     gender: "Non-binary",
  //     ip_address: "152.136.45.253"
  //   },
  //   {
  //     id: 15,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Dania",
  //     last_name: "Petris",
  //     email: "dpetrise@google.com",
  //     gender: "Female",
  //     ip_address: "123.78.73.108"
  //   },
  //   {
  //     id: 16,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Tynan",
  //     last_name: "Plaice",
  //     email: "tplaicef@blinklist.com",
  //     gender: "Male",
  //     ip_address: "79.73.203.152"
  //   },
  //    {
  //     id: 17,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Jemmy",
  //     last_name: "Whitham",
  //     email: "jwhithamg@ebay.co.uk",
  //     gender: "Female",
  //     ip_address: "25.100.226.144"
  //   },
  //   {
  //     id: 18,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Diandra",
  //     last_name: "Dawkes",
  //     email: "ddawkesh@archive.org",
  //     gender: "Female",
  //     ip_address: "120.36.64.143"
  //   },
  //   {
  //     id: 19,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Kathlin",
  //     last_name: "Donaway",
  //     email: "kdonawayi@bandcamp.com",
  //     gender: "Female",
  //     ip_address: "210.214.104.62"
  //   },
  //   {
  //     id: 20,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Mariejeanne",
  //     last_name: "Hockell",
  //     email: "mhockellj@simplemachines.org",
  //     gender: "Female",
  //     ip_address: "65.196.145.187"
  //   },
  //   {
  //     id: 21,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Delinda",
  //     last_name: "Kemston",
  //     email: "dkemstonk@nbcnews.com",
  //     gender: "Polygender",
  //     ip_address: "115.56.43.224"
  //   },
  //   {
  //     id: 22,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Vittorio",
  //     last_name: "Turfs",
  //     email: "vturfsl@51.la",
  //     gender: "Male",
  //     ip_address: "235.142.228.161"
  //   },
  //   {
  //     id: 23,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Eleen",
  //     last_name: "Schuricht",
  //     email: "eschurichtm@1und1.de",
  //     gender: "Female",
  //     ip_address: "112.33.208.28"
  //   },
  //   {
  //     id: 24,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Jermaine",
  //     last_name: "Clewlow",
  //     email: "jclewlown@usnews.com",
  //     gender: "Male",
  //     ip_address: "10.14.130.75"
  //   },
  //   {
  //     id: 25,
  //     imgscr:"https://i.guim.co.uk/img/media/576283a6d1cbda030cdb48ae567d5cab00ac5e31/0_0_1631_979/master/1631.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=26f248320b6654e66b8019bb0083addb",
  //     first_name: "Angelika",
  //     last_name: "Pinor",
  //     email: "apinoro@artisteer.com",
  //     gender: "Polygender",
  //     ip_address: "157.44.211.16"
  //   },
];

export default Datatwo;
