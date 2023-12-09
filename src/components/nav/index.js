import { Link } from "react-router-dom"
import { navRoutes } from "../../router/nav-router"

function Nav() {
  return (
      <>
        {
          navRoutes.map(route => 

          <Link 
            key={route.path} 
            className={'Nav-link'} 
            to={route.path}
          >
            {route.name}
          </Link>
          
          )
        }
      </>
    )
  }

  export default Nav