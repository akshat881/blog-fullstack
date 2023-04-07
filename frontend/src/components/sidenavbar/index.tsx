import Bg from 'Assets/Logo/WITS@4x.svg'
import {Cardcontent,Span,Tag,Ul2,Newslatest,Newcard,Newsupdate,News,Cardsinner,Container,Link,Ul,List,Hr,Text,Head,Upernav,Navitem,Navtext,Sideitem,Input,Mainsection,Cards, Cardimg} from 'styled/sidenavbar';
import { faNewspaper,faBars,faFilm,faMusic,faPlane,faUser, faCircleUser, faGear, faLifeRing, faArrowRightFromBracket, faComments, faBell, faMagnifyingGlass, faArrowRight, faPlus, faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Sidnav=()=>{
  
    return( 
      <>
      <Container>
<Ul>
<List>     
<Head>
<img src={Bg} style={{maxWidth:"40%"}}/>
<FontAwesomeIcon icon={faBars} style={{color: "#a3a3a3",}} />

</Head>
</List>
<Hr/>
<List>
<Head>
<FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#787878",}} />
<Text>AKSHAT</Text>
</Head>
</List>
<Hr left="7%" width="80%"/>
<List>
  <Link>
  <FontAwesomeIcon icon={faNewspaper} style={{color: "#9c9c9c",}} />
  <Text>News</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faFilm} style={{color: "#9c9c9c",}} />
  <Text>Movie</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faMusic} style={{color: "#949494",}} />
  <Text>Music</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faPlane} style={{color: "#545454",}} />
  <Text>Travel</Text>
</Link>
</List>
<Hr left="7%" width="80%"/>
<List>
  <Link>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",}} />
  <Text>Account</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faGear} style={{color: "#8a8a8a",}} />
  <Text>Setting</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faLifeRing} style={{color: "#999999",}} />
  <Text>Help & Support</Text>
</Link>
</List>
<List>
  <Link>
  <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#707070",}} />
  <Text>Log Out</Text>
</Link>
</List>
        </Ul>
      </Container>
      <Upernav>
        <Navitem>
        <Navtext>
          <Link>
          <Text>
            Latest News
          </Text>
          </Link>
         
         
          <Link>
          <Text>
          Political
          </Text>
          </Link>
        
        
          <Link>
          <Text>
            Business
          </Text>
          </Link>
        
          <Link>
          <Text>
          Sports
          </Text>
          </Link>
          <Link>
          <Text>
          Teach
          </Text>
          </Link>
          </Navtext>
          
          <Sideitem>
          <FontAwesomeIcon icon={faBell} style={{width:"60px",color: "#6e6e6e",borderRight:"2px solid  #EEF1F2 ",borderLeft:"2px solid  #EEF1F2 "}} />
          <FontAwesomeIcon icon={faComments} style={{width:"60px",color: "#757575",borderRight:"2px solid  #EEF1F2 ",borderLeft:"2px solid  #EEF1F2 "}} />
           <Input placeholder='Type to search'/>
           <div style={{position:"relative"}} >
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#707070",position:"absolute",top:"-8px",right:"35px"}} />
           </div>
          </Sideitem>
        </Navitem>
      </Upernav>
      <Mainsection>
       <Cards>
<Cardsinner>
<News>
 
<Newcard>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="600px" height="250px"alt="" />
  <Cardcontent>
  <Text style={{lineHeight:"2rem"}}>Sports</Text>
  <Text style={{fontSize:"1.1rem"}}>Before new  York Auto Show,Car Take Their Own Star Turn</Text>
  <Hr style={{marginTop:"1%"}}/>
  <Tag style={{marginTop:"0",width:"90%",alignItems:"center",justifyContent:"space-evenly"}}>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",marginLeft:"3%"}} />
<Text>Akshat</Text>
    <FontAwesomeIcon icon={faHeart} style={{color: "#696969",marginLeft:"auto"}} />
  </Tag>
  </Cardcontent>
 </Newcard>
 <Newcard>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="600px" height="250px"alt="" />
  <Cardcontent>
  <Text style={{lineHeight:"2rem"}}>Sports</Text>
  <Text style={{fontSize:"1.1rem"}}>Before new  York Auto Show,Car Take Their Own Star Turn</Text>
  <Hr style={{marginTop:"1%"}}/>
  <Tag style={{marginTop:"0",width:"90%",alignItems:"center",justifyContent:"space-evenly"}}>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",marginLeft:"3%"}} />
<Text>Akshat</Text>
    <FontAwesomeIcon icon={faHeart} style={{color: "#696969",marginLeft:"auto"}} />
  </Tag>
  </Cardcontent>
 </Newcard>
 <Newcard>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="600px" height="250px"alt="" />
  <Cardcontent>
  <Text style={{lineHeight:"2rem"}}>Sports</Text>
  <Text style={{fontSize:"1.1rem"}}>Before new  York Auto Show,Car Take Their Own Star Turn</Text>
  <Hr style={{marginTop:"1%"}}/>
  <Tag style={{marginTop:"0",width:"90%",alignItems:"center",justifyContent:"space-evenly"}}>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",marginLeft:"3%"}} />
<Text>Akshat</Text>
    <FontAwesomeIcon icon={faHeart} style={{color: "#696969",marginLeft:"auto"}} />
  </Tag>
  </Cardcontent>
 </Newcard>
 <Newcard>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="600px" height="250px"alt="" />
  <Cardcontent>
  <Text style={{lineHeight:"2rem"}}>Sports</Text>
  <Text style={{fontSize:"1.1rem"}}>Before new  York Auto Show,Car Take Their Own Star Turn</Text>
  <Hr style={{marginTop:"1%"}}/>
  <Tag style={{marginTop:"0",width:"90%",alignItems:"center",justifyContent:"space-evenly"}}>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",marginLeft:"3%"}} />
<Text>Akshat</Text>
    <FontAwesomeIcon icon={faHeart} style={{color: "#696969",marginLeft:"auto"}} />
  </Tag>
  </Cardcontent>
 </Newcard>
 
</News>
<Newsupdate>
<Ul2>
<Head>
<Text>Trending News</Text>
<FontAwesomeIcon icon={faArrowRight} style={{color: "#707070",}} />

</Head >
  <Hr style={{marginTop:"6%"}}/>
<Newslatest>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{borderRadius:"5px"}}width="100px" height="100px"alt="" />
<Text>
<Text>Sport</Text>
<Text>Tiger Woods in a Stirring Return to the Top,Capture the Master at 43</Text>
</Text>
</Newslatest>
<Newslatest>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{borderRadius:"5px"}}width="100px" height="100px"alt="" />
<Text>
<Text>Sport</Text>
<Text>Tiger Woods in a Stirring Return to the Top,Capture the Master at 43</Text>
</Text>
</Newslatest>
<Newslatest>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{borderRadius:"5px"}}width="100px" height="100px"alt="" />
<Text>
<Text>Sport</Text>
<Text>Tiger Woods in a Stirring Return to the Top,Capture the Master at 43</Text>
</Text>
</Newslatest>
<Newslatest>
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{borderRadius:"5px"}}width="100px" height="100px"alt="" />
<Text>
<Text>Sport</Text>
<Text>Tiger Woods in a Stirring Return to the Top,Capture the Master at 43</Text>
</Text>
</Newslatest>

</Ul2>
<Ul2 style={{marginTop:"6%",height:"25vh"}}>
<Head>
<Text>Popular Tags</Text>
<FontAwesomeIcon icon={faPlus} style={{color: "#575757",}} />

</Head >
  <Hr style={{marginTop:"6%"}}/>
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
    )
}
export default Sidnav;