import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { cartState } from "../store/index";

//mui imput
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function Product({ title, image, price, id }) {
  const [qty, setQty] = useState(1);
  const [cart, setCartState] = useRecoilState(cartState);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const addToCart = () => {
    const newCart = { ...cart };

    if (newCart[id] === undefined) {
      newCart[id] = 0;
    }
    newCart[id] += qty;

    setCartState(newCart);
  };

  const maxTitleLength = 18;
  if (title.length > maxTitleLength) {
    title = title.substr(0, maxTitleLength) + "...";
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <Link to={"/product/" + id}>{title}</Link>
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Price: € {price}
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={"/product/" + id}>
            <Button size="small">Read more</Button>
          </Link>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className="myLabel">
              Quantity
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={qty}
              label="Qty"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" size="small" onClick={addToCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;
