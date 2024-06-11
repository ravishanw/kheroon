import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import VerticalGrades from "./VerticalGrades";
import KheroonCard from "./KheroonCard";
import RingImg from "../assets/rings.jpg";
import PendantImg from "../assets/pendants.jpg";
import EarringImg from "../assets/earrings.jpg";
import NecklaceImg from "../assets/necklace.jpg";
import BraceletImg from "../assets/bracelet.jpg";

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
];

function Products() {
  return (
    <Grid container spacing={0} className="screen-block padding-full">
      <Grid item xs={3}>
        <KheroonTitle titleText="Products"></KheroonTitle>
        <VerticalGrades></VerticalGrades>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={0} xs={12}>
          {productsArr.map((el, index) => {
            return (
              <Grid item xs={4} sx={{ paddingRight: "20px" }}>
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
  );
}

export default Products;
