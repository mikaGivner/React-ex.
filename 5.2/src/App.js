import Card from "./components/Card";

function App() {
  const data = [
    {
      img: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701319955.jpg",
      title: "title1",
      description: "des1",
      links: ["link1.1", "link1.2"],
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D1BAQE1e-1ciBZI7w/company-background_10000/0/1519801174012?e=2147483647&v=beta&t=utWoEkRvOzsOnonKcc3h1nQp7hwdsWiVz8NgYB8HuGg",
      title: "title2",
      description: "des2",
      links: ["link2.1", "link2.2"],
    },
    {
      img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/red-ocean-view-photography.jpg",
      title: "title3",
      description: "des3",
      links: ["link3.1", "link3.2"],
    },
  ];
  return (
    <div className="container">
      <Card
        img={data[0].img}
        title={data[0].title}
        description={data[0].description}
        link1={data[0].links[0]}
        link2={data[0].links[1]}
      ></Card>
      <Card
        img={data[1].img}
        title={data[1].title}
        description={data[1].description}
        link1={data[1].links[0]}
        link2={data[1].links[1]}
      ></Card>
      <Card
        img={data[2].img}
        title={data[2].title}
        description={data[2].description}
        link1={data[2].links[0]}
        link2={data[2].links[1]}
      ></Card>
    </div>
  );
}

export default App;
