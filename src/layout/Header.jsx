import React from 'react'
import { Link,NavLink} from 'react-router-dom'

const activeStyle = {
    color: "green",
}
export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    
                    <Link to="/"><img alt="image1" src="/images/pic03.jpg" width={100}/>
                    </Link>
                </li>
                <li>
                    <Link activeStyle={activeStyle} to="/cart">Choose Films</Link>
                </li>
                {/* <li>
                    <Link activeStyle={activeStyle} to="/test">Card</Link>
                </li> */}
            </ul>
        </nav>
        </header>
  )
}

