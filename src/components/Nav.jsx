import React from 'react';

const Nav = () => {
	return (
		<>
			<section className="nav">
				<div className="nav__wrapper">
					<div className="container">
						<div className="nav__inner">
							<a className="logo-link" href="#">
								<div className="logo-img"></div>
							</a>
							{/* <div className="menu-bar"></div> */}
							<div className="menu__wrapper">
								<input type="checkbox" id="check-menu" />
								<label htmlFor="check-menu" className="menu-label">
									<div className="menu-bar"></div>
								</label>
								<div className="main-menu">
									<h3 className="title">Menu</h3>
									<a href="#home">
										<h2 className="first-group">Home</h2>
									</a>
									<a href="#services">
										<h2 className="first-group">Services</h2>
									</a>
									<a href="#portfolio">
										<h2 className="first-group">Portfolio</h2>
									</a>
									<a href="#about">
										<h2 className="first-group">About</h2>
									</a>
									<h3 className="title">Get in Touch</h3>
									<a href="#contact">
										<h2 className="second-group">Contact Me</h2>
									</a>
									<h3 className="title">Get Social</h3>
									<a href="#">
										<h2 className="second-group">Behance</h2>
									</a>
									<a href="#">
										<h2 className="second-group">Dribble</h2>
									</a>
									<a href="#">
										<h2 className="second-group">Twitter</h2>
									</a>
									<h2 className="third-group">© leon.com 2019</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Nav;