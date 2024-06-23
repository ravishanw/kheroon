import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";
import KheroonCard from "./KheroonCard";
import RingImg from "../assets/rings.jpg";
import PendantImg from "../assets/pendants.jpg";
import EarringImg from "../assets/earrings.jpg";
import NecklaceImg from "../assets/necklace.jpg";
import BraceletImg from "../assets/bracelet.jpg";
import ViewAllImg from "../assets/viewAll.jpg";

const productsArr = [
  {
    productTitle: "Rings",
    productHref: "#",
    imgSrc: RingImg,
    imgAlt: "An image of rings",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    productTitle: "Pendants",
    productHref: "#",
    imgSrc: PendantImg,
    imgAlt: "An image of pendants",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    productTitle: "Earrings",
    productHref: "#",
    imgSrc: EarringImg,
    imgAlt: "An image of earrings",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    productTitle: "Necklaces",
    productHref: "#",
    imgSrc: NecklaceImg,
    imgAlt: "An image of necklaces",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    productTitle: "Bracelets",
    productHref: "#",
    imgSrc: BraceletImg,
    imgAlt: "An image of braclets",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    productTitle: "View all products",
    productHref: "#",
    imgSrc: ViewAllImg,
    imgAlt: "An image of braclets",
    productDetails: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

function Products() {
  return (
    <section id="products">
      <Grid
        container
        spacing={0}
        className="screen-block padding-horizontal padding-vertical"
      >
        <Grid item xs={12} md={3} className="left-panel">
          <KheroonTitle
            titleText="Products"
            tildaColor="#D8B6A4"
          ></KheroonTitle>
          <DoubleGrades></DoubleGrades>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={0}>
            {productsArr.map((el, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ padding: "0 20px 20px 0" }}
                >
                  <KheroonCard
                    key={index}
                    productTitle={el.productTitle}
                    productHref={el.productHref}
                    imgSrc={el.imgSrc}
                    imgAlt={el.imgAlt}
                    productDetails={el.productDetails}
                  ></KheroonCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Products;
