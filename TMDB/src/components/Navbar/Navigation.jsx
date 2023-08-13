import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [screenSize, setscreenSize] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        setscreenSize(false);
      } else {
        setscreenSize(true);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // NavBrand image source
  const imageSource = screenSize
    ? "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
    : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

  // NavBrand width source
  const widthSource = screenSize ? "154" : "55";

  // NavBrand height source
  const heightSource = screenSize ? "20" : "40";

  return (
    <>
      <Navbar expand="xxl" className="custom-navbar navbar-dark ">
        <Container fluid className="d-flex">
          <Navbar.Toggle
            aria-controls={"offcanvasNavbar-expand-xxl"}
            hidden={screenSize}
          />

          {screenSize ? (
            ""
          ) : (
            <>
              <Navbar.Offcanvas
                id={"offcanvasNavbar-expand-xxl"}
                aria-labelledby={"offcanvasNavbarLabel-expand-xxl"}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={"offcanvasNavbarLabel-expand-xxl"}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className={`flex-column ${screenSize ? "d-none" : ""}`}>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <Nav.Link href="#action1">Movies</Nav.Link>
                    <Nav.Link href="#action2">TV Shows</Nav.Link>
                    <Nav.Link href="#action2">People</Nav.Link>
                    <Nav.Link href="#action2">More</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )}

          <Navbar.Brand
            href="#"
            className={`mx-5 custom-logo ${
              screenSize ? "" : "center-navbrand"
            }`}
          >
            <img
              src={imageSource}
              alt="The Movie Database (TMDB)"
              width={widthSource}
              height={heightSource}
            />
          </Navbar.Brand>

          {/* left navItems */}

          <Nav className="me-auto d-none d-lg-flex">
            <div className="d-flex me-3">
              <Nav.Link href="#action1" className="px-3 text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#action2" className="px-3 text-white">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#action2" className="px-3 text-white">
                People
              </Nav.Link>
              <Nav.Link href="#action2" className="px-3 text-white">
                More
              </Nav.Link>
            </div>
          </Nav>

          {/* right navItems */}
          <Nav className="ms-auto d-flex d-lg-flex">
            <div className="d-flex me-5 mt-1">
              {screenSize ? (
                <>
                  <Nav.Link href="#action1" className="px-3 text-white">
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3 text-white">
                    <div className="custom-border">EN</div>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3 text-white">
                    Login
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3 text-white">
                    Join TMDB
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-3 text-white">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: "#01b4e4" }}
                      size="lg"
                    />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#action2" className="px-3 text-white">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                  </Nav.Link>
                  <Nav.Link href="#action2" className="text-white">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: "#01b4e4" }}
                      size="lg"
                    />
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
