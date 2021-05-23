import { Link } from 'react-router-dom'

export function NavBar() {

	// window scroll thing
	window.onscroll = function() {
		if (!window.matchMedia('(min-width: 800px)').matches)
			return;

		if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
			document.documentElement.style.setProperty('--header-fs', '0.8');
		else {
			document.documentElement.style.setProperty('--header-fs', '1');
		}
	}

	return (
		<header>
			<Link to='/' id='logo-link'><img className='logo' src='./logo.svg' alt='logo' /></Link>
			<nav>
				<ul id='nav-link-list'>
					<Link to='/about' id='nav-list-item'>About Me</Link>
					<Link to='/contact' id='nav-list-item'>Contact Me</Link>
					<li id='overflow-x-space'></li>
				</ul>
			</nav>
		</header>
	);
}

export function Heading(props: {text: string}) {
	return(
		<div className='heading'>
			<h1>{props.text}</h1><hr></hr>
		</div>
	);
}

interface ELProps {
	url: string,
	children?: React.ReactNode,
	noCSS?: boolean,
	className?: string,
}
export function ExtLink(props: ELProps) {
	return (
		<a
			href={props.url}
			target='_blank'
			rel='noopener noreferrer'
			className={props.noCSS? '' : (props.className? props.className : 'ext-link')}
		>
			{props.children}
		</a>
	);
}