import React from "react";

function card({ details }) {
    // console.log(details[0]);
    return (
        <>
            <div className="newscard">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[0].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[0].title}</div>
                            <p className="text-gray-700 text-base">{details[0].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[1].author}</p>
                                <p className="text-gray-600">{details[0].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[1].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[1].title}</div>
                            <p className="text-gray-700 text-base">{details[1].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[1].author}</p>
                                <p className="text-gray-600">{details[1].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[2].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[2].title}</div>
                            <p className="text-gray-700 text-base">{details[2].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[2].author}</p>
                                <p className="text-gray-600">{details[2].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[3].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[3].title}</div>
                            <p className="text-gray-700 text-base">{details[3].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[3].author}</p>
                                <p className="text-gray-600">{details[3].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[4].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[4].title}</div>
                            <p className="text-gray-700 text-base">{details[4].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[4].author}</p>
                                <p className="text-gray-600">{details[4].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <img className="h-96 lg:h-auto lg:w-96" src={details[5].urlToImage} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{details[5].title}</div>
                            <p className="text-gray-700 text-base">{details[5].description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{details[5].author}</p>
                                <p className="text-gray-600">{details[5].publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default card;