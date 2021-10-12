import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" atl="" />
				<SignUp>GET THE DISNEY BUNDLE</SignUp>
				<Description>
					<p>
						Stream now. <a href="">Terms apply</a>.
					</p>
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" atl="" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		position: absolute;
		content: "";
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opactity: 0.8;
		background-image: url("/images/login-background.jpg");
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	width: 70%;
	padding: 80px 40px;
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.div`
	font-size: 11px;
	text-align: center;
	margin: 0 0 24px;

	p {
		color: #c0c0c0cc;
	}

	a {
		color: #f9f9f9;
	}
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
