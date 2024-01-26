import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=" shadow-sm h-32 m-8">
                <div className="flex flex-row ml-12">
                    <img
                        className="w-28"
                        src="https://s3-alpha-sig.figma.com/img/3764/0204/d9db35f46d0e258b7b07ac83a5018eeb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eB1BfYhPGuUmO80ANCerOMkN~h3oGxzskp~YBYeXTYL-2rW8gVm7MFlebhUzlqiJJW-e66zIvEFoJhLhBQ9O4GLOgCTR4-xsTQIZURHFeMiMRWNKs3AwKjKz1lVc71LfNsNf83RbSAsMzhA30wIo1IVdDiy2O5X4rqhXMr-SsiyAmbcVnzG5-UNYEaa4Ad4NLKzzpf~9Bmgrf9ptYzhUzQVwG3beP1lZNH7VJIKThOeAFCJVkdx-KSto1f2jT4EK4t7bgwOz9bpbcs2Ng2v20KEeffm39UzBDJHXf4-YhazasyoOclKV7KfPMYF5jzyDfOa668ozf58WlF656VvvKw__"
                    />
                    <span className="flex ml-[580px]">
                        <button  className={"h-12 w-28 text-black font-medium text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                        <button  className={"h-12 w-28 text-gray-400 text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                        <button  className={"h-12 w-60 text-gray-400 text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                    </span>
                    <div className="flex-1 flex items-center justify-end space-x-4 text-gray-500">
                        <a className="hidden md:inline" href="#">
                            Become a host
                        </a>
                        <svg
                            className="h-6 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div className="flex space-x-2 border-2 rounded-full p-2">
                            <svg
                                className="h-6 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className="h-6 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='w-[900px] flex flex-row h-16  rounded-full m-auto mt-4' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <div className='    border-r-2 h-16  w-[270px] ' >
                        <button  className={"h-16  w-[270px]  text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>

                    <div className='   border-r-2  h-16  w-48 ' >
                        <button  className={"h-16   w-48 text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>
                    <div className='   border-r-2  h-16  w-48 ' >
                        <button  className={"h-16   w-48 text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>

                    <div className='     h-16  w-[330px]  relative flex ' >
                        <button  className={"h-16  w-[270px]  text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                        <img className=" mt-[3px] h-14 w-14 mr-2 "  />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar
