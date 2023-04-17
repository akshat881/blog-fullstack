import Bg from "Assets/Logo/WITS@4x.svg";
import {
  Linkbar,
  Form,
  Button,
  Cardcontent,
  Span,
  Tag,
  Ul2,
  Newslatest,
  Newcard,
  Newsupdate,
  News,
  Cardsinner,
  Container,
  Ul,
  List,
  Hr,
  Text,
  Head,
  Upernav,
  Navitem,
  Navtext,
  Sideitem,
  Input,
  Mainsection,
  Cards,
  Cardimg,
} from "styled/sidenavbar";
import {
  faNewspaper,
  faBars,
  faFilm,
  faMusic,
  faPlane,
  faUser,
  faCircleUser,
  faGear,
  faLifeRing,
  faArrowRightFromBracket,
  faComments,
  faBell,
  faMagnifyingGlass,
  faArrowRight,
  faPlus,
  faHeart,
  faImage,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGet, usePostdata } from "hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Blogs from "components/post";
import Dash from "components/dashboard";
// import Subrouts from "components/subrouts";
const Sidnav = () => {
  const clearCookies = async () => {
    await axios
      .get("http://localhost:4000/logout", { withCredentials: true })
      .then(() => {
        window.location.href = "/";
      });
  };
  return (
    <>
    
      <Container>
        <Ul>
          <List>
            <Head>
              <img src={Bg} style={{ maxWidth: "40%" }} />
              <FontAwesomeIcon icon={faBars} style={{ color: "#a3a3a3" }} />
            </Head>
          </List>
          <Hr />
          <List>
            <Head>
              <img
                src="https://api.dicebear.com/6.x/bottts/png?seed=abhishake"
                width="50px"
                height="50px"
                alt=""
              />
              <Text>AKSHAT</Text>
            </Head>
          </List>
          <Hr left="7%" width="80%" />
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ color: "#9c9c9c" }}
              />
              <Text>News</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/home">
              <FontAwesomeIcon icon={faFilm} style={{ color: "#9c9c9c" }} />
              <Text>Movie</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon icon={faMusic} style={{ color: "#949494" }} />
              <Text>Music</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon icon={faPlane} style={{ color: "#545454" }} />
              <Text>Travel</Text>
            </Linkbar>
          </List>
          <Hr left="7%" width="80%" />
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ color: "#787878" }}
              />
              <Text>Account</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon icon={faGear} style={{ color: "#8a8a8a" }} />
              <Text>Setting</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon icon={faLifeRing} style={{ color: "#999999" }} />
              <Text>Help & Support</Text>
            </Linkbar>
          </List>
          <List onClick={clearCookies}>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{ color: "#707070" }}
              />
              <Text>Log Out</Text>
            </Linkbar>
          </List>
        </Ul>
      </Container>
      <Upernav>
        <Navitem>
          <Navtext>
            <Linkbar to="/blog/djfndjfndj">
              <Text>Latest News</Text>
            </Linkbar>

            <Linkbar to="/blog/djfndjfndj">
              <Text>Political</Text>
            </Linkbar>

            <Linkbar to="/blog/djfndjfndj">
              <Text>Business</Text>
            </Linkbar>

            <Linkbar to="/blog/djfndjfndj">
              <Text>Sports</Text>
            </Linkbar>
            <Linkbar to="/blog/djfndjfndj">
              <Text>Teach</Text>
            </Linkbar>
          </Navtext>

          <Sideitem>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                width: "60px",
                color: "#6e6e6e",
                borderRight: "2px solid  #EEF1F2 ",
                borderLeft: "2px solid  #EEF1F2 ",
              }}
            />
            <FontAwesomeIcon
              icon={faComments}
              style={{
                width: "60px",
                color: "#757575",
                borderRight: "2px solid  #EEF1F2 ",
                borderLeft: "2px solid  #EEF1F2 ",
              }}
            />
            <Input placeholder="Type to search" />
            <div style={{ position: "relative" }}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  color: "#707070",
                  position: "absolute",
                  top: "-8px",
                  right: "35px",
                }}
              />
            </div>
          </Sideitem>
        </Navitem>
      </Upernav>
      <Mainsection>
        <Cards>
          <Cardsinner>
            <News>
          
              <Routes>
                <Route path="blog/:id" element={<Blogs />} />
                <Route path="/home" element={<Dash />} />
              </Routes>
            </News>
            <Newsupdate>
              <Ul2>
                <Head>
                  <Text>Trending News</Text>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#707070" }}
                  />
                </Head>
                <Hr style={{ marginTop: "6%" }} />
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
              </Ul2>
              <Ul2>
                <Head>
                  <Text>Trending News</Text>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#707070" }}
                  />
                </Head>
                <Hr style={{ marginTop: "6%" }} />
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
                <Newslatest>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    style={{ borderRadius: "5px" }}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <Text>
                    <Text>Sport</Text>
                    <Text>
                      Tiger Woods in a Stirring Return to the Top,Capture the
                      Master at 43
                    </Text>
                  </Text>
                </Newslatest>
              </Ul2>
              <Ul2 style={{ marginTop: "6%", height: "25vh" }}>
                <Head>
                  <Text>Popular Tags</Text>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#575757" }} />
                </Head>
                <Hr style={{ marginTop: "6%" }} />
                <Tag>
                  <Span>Politics</Span>
                  <Span>Advertising</Span>
                  <Span>News</Span>
                  <Span>Development</Span>
                  <Span>Design</Span>
                  <Span>Finance</Span>
                  <Span>Football</Span>
                  <Span>Future</Span>
                  <Span>Travel</Span>
                  <Span>Style</Span>
                  <Span>Real Estate</Span>
                </Tag>
              </Ul2>
            </Newsupdate>
          </Cardsinner>
        </Cards>
      </Mainsection>
   
    </>
  );
};
export default Sidnav;
