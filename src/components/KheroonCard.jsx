import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
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
            <Typography
              variant="h3"
              sx={{ fontSize: "1.2rem", fontWeight: "600", margin: "10px 0" }}
            >
              {props.productTitle}
            </Typography>
            <Typography>{props.productDetails}</Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default KheroonCard;
