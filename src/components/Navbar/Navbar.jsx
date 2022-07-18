import React, {useState} from 'react';
import  './Navbar.scss';
import { Link } from 'react-router-dom';
import Dropdown from '../UI/Dropdown/Dropdown';



 const Navbar = () => {
  const [navbar,setNavbar] = useState(false)
  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu=() => setClick(false)
  const [dropdown, setDropdown] = useState(false)
  
  const onMouseEnter= () => {
	if(window.innerWidth < 960){
		setDropdown(false)
	}
	else{
		setDropdown(true)
	}
  };
  const onMouseLeave= () => {
	if(window.innerWidth<960){
		setDropdown(false)
	}
	else{
		setDropdown(false)
	}
  }	

  const changeBackground = () =>{
	if(window.scrollY>=80){
		setNavbar(true)
	}
	else {
		setNavbar(false)
	}
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
	<>
		<nav className={navbar? 'navbar active':'navbar'}>
		<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        </Link>
			<div className='menu-icon' onClick={handleClick}>
				<i className ={click ? 'fas fa-times': 'fas fa-bars'}/>
			</div>
			<ul className= {click? 'nav-menu active':'nav-menu'}>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeMobileMenu}>
						ГЛАВНАЯ
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/info' className='nav-links' onClick={closeMobileMenu}>
						ИНФОРМАЦИЯ
					</Link>
				</li>
				<li className='nav-item'
				onMouseEnter= {onMouseEnter}
				onMouseLeave= {onMouseLeave}>
					<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
						О ЦЕНТРАХ
						<i className='fa fa-caret-down'/>
					</Link>
					{dropdown && <Dropdown/>}
				</li>
				<li className='nav-item'>
					<Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
						ОТЗЫВЫ
					</Link>
				</li>
			</ul>
			
		</nav>
	</>
  )
}
export default Navbar;

