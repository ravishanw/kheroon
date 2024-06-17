import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import KheroonSubTitle from "./KheroonSubTitle";
import Typography from "@mui/material/Typography";

function KheroonCard(props) {
  return (
    <Card
      className="hover-craft"
      sx={{
        borderRadius: "0",
        width: "100%",
      }}
    >
      <a href={props.productHref}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 260 }}
            image={props.imgSrc}
            alt={props.imgAlt}
          />
          <CardContent>
            <KheroonSubTitle subTitle={props.productTitle}></KheroonSubTitle>
            <Typography>{props.productDetails}</Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default KheroonCard;
