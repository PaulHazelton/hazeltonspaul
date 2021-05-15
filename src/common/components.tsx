export function NavBar() {

	// window scroll thing
	window.onscroll = function() {
		if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
			document.documentElement.style.setProperty('--header-fs', '0.8');
		else
			document.documentElement.style.setProperty('--header-fs', '1');
	}

	return (
		<header>
			<img className='logo' src='/logo.svg' alt='logo' />
			<nav>
				<ul id='nav-link-list'>
					<li>About Me</li>
					<li>Contact Me</li>
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