import React from 'react';

const Contact = () => {
	return (
		<>
			<section className="contact">
				<div className="contact__wrapper">
					<div className="container">
						<div className="contact__inner">
							<h2 className="title" id="contact">contact</h2>
							<div className="content">
								<h2 className="text">Feel free to drop us a line at:</h2>
								<h2 className="email">leonagency@mail.com</h2>
								<div className="social">
									<p className="social-text">Find us on social networks:</p>
									<div className="social-link">
										<a className="link" href="#">
											<div className="link-web"></div>
										</a>
										<a className="link" href="#">
											<div className="link-google"></div>
										</a>
										<a className="link" href="#">
											<div className="link-twit"></div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;