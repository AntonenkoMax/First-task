import React from 'react';

const Services = () => {
	return (
		<>
			<section className="services">
				<div className="services__wrapper">
					<div className="container">
						<div className="services__inner">
							<h2 className="title" id="services">services</h2>
							<div className="content">
								<div className="info">
									<div className="info-item">
										<div className="info-logo graphic"></div>
										<div className="info-cont">
											<h3 className="info-head">Graphic Design</h3>
											<p className="info-text">Graphic design is the process of visual
											communication and problem-solving
											using one or more of typography,
photography and illustration.</p>
										</div>
									</div>
									<div className="info-item">
										<div className="info-logo design"></div>
										<div className="info-cont">
											<h3 className="info-head">Web Design</h3>
											<p className="info-text">Web design encompasses many different
											skills and disciplines in the production
and maintenance of websites.</p>
										</div>
									</div>
									<div className="info-item">
										<div className="info-logo ui"></div>
										<div className="info-cont">
											<h3 className="info-head">UI & UX</h3>
											<p className="info-text">Process of enhancing user satisfaction
											with a product by improving the
											usability, accessibility, and pleasure
provided in the interaction.</p>
										</div>
									</div>
									<div className="info-item">
										<div className="info-logo development"></div>
										<div className="info-cont">
											<h3 className="info-head">Web Development</h3>
											<p className="info-text">Web development is a broad term for
											the work involved in developing a web site
for the Internet or an intranet.</p>
										</div>
									</div>
								</div>
								<div className="graphics">
									{/* <div className="first"></div>
									<div className="second"></div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;