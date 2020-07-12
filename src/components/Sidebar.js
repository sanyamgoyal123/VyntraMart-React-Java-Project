import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed; 
  height: 60%;
  width: 40px;     
  z-index: 1;      
  top: 3.4em; 
  background-color: #222;
  overflow-x: hidden;
  padding-top: 10px;
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 40px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 1.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Home',
          css: 'fa fa-fw fa-home fa-2x',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/about',
          name: 'About',
          css: 'fas fa-address-card fa-2x',
          key: 2
        },
        {
          path: '/products',
          name: 'Products',
          css: 'fab fa-product-hunt fa-2x',
          key: 3
        },
        {
          path: '/login',
          name: 'Login',
          css: 'fas fa-sign-in-alt',
          key: 4
        },
        {
          path: '/signup',
          name: 'Signup',
          css: 'fas fa-user-plus fa-2x',
          key: 5
        }
      ]
    }  
  }
  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }
  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
            )
          })
        }
      </StyledSideNav>
    );
  }
}

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
    render() {
      const { active } = this.props;
      return ( 
        <StyledNavItem active={active}>
          <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
            <NavIcon></NavIcon>
          </Link>
        </StyledNavItem>
      );
    }
  }

  const NavIcon = styled.div`
  
  `;
  const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
    render() {
      return (
        <RouterSideNav></RouterSideNav>
      );
    }
  }