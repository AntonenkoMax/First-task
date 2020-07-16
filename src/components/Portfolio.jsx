import React from 'react';

const Portfolio = () => {
	return (
		<>
			<section className="portfolio">
				<div className="portfolio__wrapper">
					<div className="container">
						<div className="portfolio__inner">
							<h2 className="title" id="portfolio">portfolio</h2>
							<div className="content">
								<div className="card">
									<div className="baner"></div>
									<h3 className="card-titel">Project Here</h3>
									<p className="card-text">My creative ability is very difficult to measure because it can
manifest in so many surprising and.</p>
								</div>
								<div className="card">
									<div className="baner"></div>
									<h3 className="card-titel">Project Here</h3>
									<p className="card-text">My creative ability is very difficult to measure because it can
manifest in so many surprising and.</p>
								</div>
								<div className="card">
									<div className="baner"></div>
									<h3 className="card-titel">Project Here</h3>
									<p className="card-text">My creative ability is very difficult to measure because it can
manifest in so many surprising and.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;