import Bg from 'Assets/Logo/WITS@4x.svg'
import { Container,Link,Ul,List,Hr} from 'styled/sidenavbar';

const Sidnav=()=>{
  
    return( 
      <>
      <Container>
        <Ul>
<List>
<Link>
<img src={Bg} style={{maxWidth:"40%"}}/>
</Link>
</List>
<Hr/>
<List>
<img src={Bg} style={{maxWidth:"50%"}}/>
</List>
<Hr/>
<List>

</List>
<Hr/>
<List>
  <Link>
<img src={Bg} style={{maxWidth:"50%"}}/>
</Link>
</List>
        </Ul>
      </Container>
        </>
    )
}
export default Sidnav;