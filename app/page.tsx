import Posts from "./components/Posts";

export default function Home() {
	return (
		<main className='flex-col'>
			<h1 className='text-5xl text-white font-bold text-center mb-10'>
				Hello! HomePage. 😁&nbsp;
			</h1>
			<p className='prose prose-xl mx-auto text-2xl font-extralight'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum
				reprehenderit eveniet dicta vitae odit quae error amet quasi qui, sed
				temporibus ea vel consequuntur? Exercitationem consectetur mollitia
				provident harum.
			</p>
			<Posts/>
		</main>
	);
}
