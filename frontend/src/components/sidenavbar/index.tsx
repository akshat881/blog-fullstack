import Bg from 'Assets/Logo/WITS@4x.svg'
import { Container,Link,Ul,List,Hr,Text,Head,Upernav,Navitem,Navtext,Sideitem,Input} from 'styled/sidenavbar';
import { faNewspaper,faBars,faFilm,faMusic,faPlane,faUser, faCircleUser, faGear, faLifeRing, faArrowRightFromBracket, faComments, faBell, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faBell} style={{color: "#6e6e6e",borderRight:""}} />
          <FontAwesomeIcon icon={faComments} style={{color: "#757575",}} />
           <Input placeholder='Type to search'/>
           <div style={{position:"relative"}} >
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#707070",position:"absolute",top:"-8px",right:"35px"}} />
           </div>
          </Sideitem>
        </Navitem>
      </Upernav>
        </>
    )
}
export default Sidnav;