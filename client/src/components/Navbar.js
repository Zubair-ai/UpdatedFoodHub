import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import CartModal from "../CartModal";
import Badge from "@mui/material/Badge";
import Cart from "../screens/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Store/UseContext";
import { Modal } from "antd";

export default function ButtonAppBar() {
  const [cartView, setCartView] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [Loggout, setLoggout] = React.useState(false);
  const navigate = useNavigate();
  const data = useCart();
  const onClickHandler = () => {
    setIsModalOpen(true);
    if (Loggout === true) {
      navigate("/login");
      localStorage.removeItem("authToken");
    } else return;
  };
  // modaloverlay
  const handleOk = () => {
    setLoggout(true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/" style={{ color: "inherit" }}>
                {" "}
                <FoodBankIcon sx={{ mb: 1, ml: -2 }} />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: -2.5 }}
            >
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                FoodHUB
              </Link>
            </Typography>
            {localStorage.getItem("authToken") && !Loggout ? (
              <>
                <Link
                  to={"/myorder"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit" sx={{ ml: 3 }}>
                    History
                  </Button>
                </Link>
                <Button
                  className=" rounded"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  {" "}
                  <Badge badgeContent={data?.length} color="success">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </Button>
                {cartView ? (
                  <CartModal
                    onClose={() => {
                      setCartView(false);
                    }}
                  >
                    {" "}
                    <Cart />{" "}
                  </CartModal>
                ) : null}
                <Link style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    color="inherit"
                    onClick={onClickHandler}
                    sx={{ ml: -2 }}
                  >
                    LogOut
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">Login</Button>
                </Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">SignUp</Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal open={isModalOpen} closeIcon okType="danger" onOk={handleOk} onCancel={handleCancel}>
        <Typography>Are you sure you want to logout?</Typography>
      </Modal>
    </>
  );
}
