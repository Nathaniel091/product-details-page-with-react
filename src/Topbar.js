

import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
	return (
		<header>
			<nav className={classes.Topbar}>
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
					alt="Amazon Logo"
				/>
			</nav>
		</header>
	);
};

export default Topbar;