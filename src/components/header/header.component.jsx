import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown';

import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
	HeaderContainer,
	OptionsContainer,
	OptionLink,
	LogoContainer
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/shop'>CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? <CartDropdown /> : null}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden
});

export default connect(mapStateToProps)(Header);
