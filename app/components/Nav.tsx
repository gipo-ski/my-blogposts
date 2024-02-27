import Link from "next/link";
import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'
export default function Nav() {
	return (
		<nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex flex-col justify-between sm:flex-row text-center'>
				<h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
					<Link
						href='/'
						className='text-white/90 no-underline hover:text-white'
					>
						myBlog
					</Link>
				</h1>
				<div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
					<Link
						href='https://www.youtube.com/'
						className='text-white/90 hover:text-white'
					>
						<FaYoutube />
					</Link>
					<Link
						href='https://twitter.com/'
						className='text-white/90 hover:text-white'
					>
						<FaTwitter />
					</Link>
					<Link
						href='https://github.com/gipo-ski'
						className='text-white/90 hover:text-white'
					>
						<FaGithub />
					</Link>
					<Link
						href='https://kunle-o-portfolio.netlify.app/'
						className='text-white/90 hover:text-white'
					>
						<FaLaptop />
					</Link>
				</div>
			</div>
		</nav>
	);
}
