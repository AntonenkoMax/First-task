import React from 'react';

const About = () => {
	return (
		<>
			<section className="about">
				<div className="about__wrapper">
					<div className="container">
						<div className="about__inner">
							<h2 className="title" id="about">about</h2>
							<div className="content">
								<div className="graph"></div>
								<div className="art">
									<h3 className="art-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliqui</h3>
									<p className="art-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliqu</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;