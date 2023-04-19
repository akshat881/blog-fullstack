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
  FontAwesomeIco,
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
// import { FontAwesomeIco } from "@fortawesome/react-fontawesome";
import { useGet, usePostdata } from "hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Blogs from "components/post";
import Dash from "components/dashboard";
import {  useDispatch,useSelector } from "react-redux";
import { addpost } from 'store/slice';
// import Subrouts from "components/subrouts";
const Sidnav = () => {
  const dispatch=useDispatch();
const {data}= useGet("/postdata")
  useEffect(()=>{
dispatch(addpost(data?.data))
  },[data])
  const mydata=useSelector((state:any)=>{
    return state.postdata
  })
 const mypostdata=mydata[0]
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
              <FontAwesomeIco icon={faBars}  />
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
            <Linkbar to="/blog/hjryhjythjndjfndj">
              <FontAwesomeIco
                icon={faNewspaper}
               
              />
              <Text>News</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/home">
              <FontAwesomeIco icon={faFilm}  />
              <Text>Movie</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndjj">
              <FontAwesomeIco icon={faMusic}  />
              <Text>Music</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndj">
              <FontAwesomeIco icon={faPlane}  />
              <Text>Travel</Text>
            </Linkbar>
          </List>
          <Hr left="7%" width="80%" />
          <List>
            <Linkbar to="/blog/djndj">
              <FontAwesomeIco
                icon={faCircleUser}
              
              />
              <Text>Account</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/ndjfndj">
              <FontAwesomeIco icon={faGear}  />
              <Text>Setting</Text>
            </Linkbar>
          </List>
          <List>
            <Linkbar to="/blog/djfndj">
              <FontAwesomeIco icon={faLifeRing}  />
              <Text>Help & Support</Text>
            </Linkbar>
          </List>
          <List onClick={clearCookies}>
            <Linkbar to="/blog/djfndjfndj">
              <FontAwesomeIco
                icon={faArrowRightFromBracket}
               
              />
              <Text>Log Out</Text>
            </Linkbar>
          </List>
        </Ul>
      </Container>
      <Upernav>
        <Navitem>
          <Navtext>
            <Linkbar  to="/blog/djfndjfndj">
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
            <FontAwesomeIco
              icon={faBell}
              style={{
                width: "60px",
                color: "#6e6e6e",
                borderRight: "2px solid  #EEF1F2 ",
                borderLeft: "2px solid  #EEF1F2 ",
              }}
            />
            <FontAwesomeIco
              icon={faComments}
              style={{
                width: "60px",
           
                borderRight: "2px solid  #EEF1F2 ",
                borderLeft: "2px solid  #EEF1F2 ",
              }}
            />
            <Input placeholder="Type to search" />
            <div style={{ position: "relative" }}>
              <FontAwesomeIco
                icon={faMagnifyingGlass}
                style={{
           
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
  
          <Cardsinner>
            <News>
          
              <Routes>
                <Route path="blog/:id" element={<Blogs />} />
                <Route path="/" element={<Dash />} />
              </Routes>
            </News>
            <Newsupdate>
              <Ul2>
                <Head>
                  <Text>Trending News</Text>
                  <FontAwesomeIco
                    icon={faArrowRight}
          
                  />
                </Head>
                <Hr style={{ marginTop: "6%" }} />
                {
                  mypostdata?.slice(0).reverse().map((item:any,index:any)=>{
                    if(index<4)
                    return <Newslatest>
                    <img
                      src={item.imageData}
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
                       {item.title}
                      </Text>
                    </Text>
                  </Newslatest>
                  })
                }
        
               
              </Ul2>
              
              <Ul2 style={{ marginTop: "6%"}}>
                <Head>
                  <Text>Popular Tags</Text>
                  <FontAwesomeIco icon={faPlus}  />
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
    
      </Mainsection>
   
    </>
  );
};
export default Sidnav;
