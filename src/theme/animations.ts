import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: rotateY(-2deg) rotateX(-2deg);
	}
	to {
		opacity: 1;
		transform: rotateY(0deg) rotateX(0deg);
	}
`;

export const scrollFadeIn = keyframes`
	from {
		opacity: 0;
		transform: rotateY(-2deg) rotateX(-2deg);
	}
	to {
		opacity: .6;
		transform: rotateY(0deg) rotateX(0deg);
	}
`;

export const bounce = keyframes`
	from,
	20%,
	53%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	40%,
	43% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
		transform: translate3d(0, -30px, 0) scaleY(1.1);
	}
	70% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
		transform: translate3d(0, -15px, 0) scaleY(1.05);
	}
	80% {
		-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
		transform: translate3d(0, 0, 0) scaleY(0.95);
	}
	90% {
		-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
		transform: translate3d(0, -4px, 0) scaleY(1.02);
	}
`;