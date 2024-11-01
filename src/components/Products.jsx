import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";
import KheroonCard from "./KheroonCard";
import RingImg from "../assets/ringImg.jpg";
import PendantImg from "../assets/pendantImg.jpg";
import EarringImg from "../assets/earringImg.jpg";
import NecklaceImg from "../assets/necklaceImg.jpg";
import BraceletImg from "../assets/braceletImg.jpg";
import ViewAllImg from "../assets/viewAllImg.jpg";

const productsArr = [
  {
    productTitle: "Rings",
    productHref: "#products",
    imgSrc: RingImg,
    imgAlt: "An image of rings",
  },
  {
    productTitle: "Pendants",
    productHref: "#products",
    imgSrc: PendantImg,
    imgAlt: "An image of pendants",
  },
  {
    productTitle: "Earrings",
    productHref: "#products",
    imgSrc: EarringImg,
    imgAlt: "An image of earrings",
  },
  {
    productTitle: "Necklaces",
    productHref: "#products",
    imgSrc: NecklaceImg,
    imgAlt: "An image of necklaces",
  },
  {
    productTitle: "Bracelets",
    productHref: "#products",
    imgSrc: BraceletImg,
    imgAlt: "An image of braclets",
  },
  {
    productTitle: "View all products",
    productHref: "#products",
    imgSrc: ViewAllImg,
    imgAlt: "An image of braclets",
  },
];

function Products(props) {
  return (
    <section
      id="products"
      className={props.visibleState ? "lazy-load" : "invisible"}
    >
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
