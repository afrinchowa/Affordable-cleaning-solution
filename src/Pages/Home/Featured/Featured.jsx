import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div>
            <div className="flex  justify-around items-center mx-auto border-4">
            <div className="max-w-lg p-4 shadow-md w-[25rem] h-[32rem] bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100 dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400 dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
            <div className="max-w-lg p-4  shadow-md w-[30rem] h-[34rem] bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100 dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400 dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
            <div className="max-w-lg p-4 shadow-md w-[25rem] h-[32rem] bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100 dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400 dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>

        </div>
        <div>
        <Link to='/services'><button className="flex items-center justify-center mx-auto p-3 font-semibold tracking-wide bg-black text-white">Book Now</button></Link>
    </div>
        </div>
    );
};

export default Featured;