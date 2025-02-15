import React from "react"
import Banners from "~/components/banner"

export default function Left() {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen flex-col bg-primary">
        <div
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          className="h-60 w-full bg-banner"
        >
          <video className="w-full h-[200px] object-cover" loop autoPlay muted>
            <source src="https://files.catbox.moe/kpwbbj.mp4" />
            Maaf tampaknya browser anda tidak support tag video
          </video>
        </div>
        <div className="mx-auto -mt-[130px] flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
          <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
            <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
              <div className="relative">
                <img
                  className="rounded-full border-4 border-solid border-primary bg-primary object-cover"
                  src="/image.jpg"
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative flex flex-row items-center justify-center">
                <div className="mb-1 flex flex-col">
                  <div className="mt-1 flex flex-row items-center justify-center">
                    <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                      @mysu
                    </span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-1 h-5 w-5 text-indigo-600"
                      >
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href="https://github.com/mysu-dev"
                    >
                      信じてください、無駄なことなど何もないのです
                    </a>
                  </p>
                  <div className="mt-1 flex flex-col">
                    <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                      Welcome to my simple portofolio website. Below are some of my skills and some of my projects that I have worked <span id="flip">on.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Banners />
              </div>
              <div className="mt-1 rounded pt-2">
                <div>
                  <div className="flex flex-row flex-wrap  items-center justify-center">
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href="/instagram"
                      className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                    >
                      <svg
                        className="h-6 fill-current text-pink-400 transition-all"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                      </svg>
                    </a>
                  <a
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href="mailto:yogisugalih99@gmail.com"
                    className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                  >
                    <svg
                      className="h-6 fill-current text-red-500"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Gmail</title>
                          <path
                          d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
                        </svg>
                      </a>
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href="/github"
                      className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                    >
                      <svg
                        className="h-6 fill-current text-primary transition-all dark:text-gray-100"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          fill="#3E75C3"
                          d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.5 5.5-4.9 5.8.4.4.7 1.1.7 2.2v3.3c0 .4.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4C24 5.4 18.6 0 12 0z"
                        />
                      </svg>
                    </a>
                    {/* <div className="flex items-center">
                        <div className="mx-auto inline-block">
                          <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full border-white border-opacity-10 px-2 py-2 hover:bg-white hover:bg-opacity-5">
                            <svg
                              className="h-5 fill-current text-indigo-500"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="#7289DA"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Discord</title>
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                            <p className="text-sm font-medium text-indigo-100">
                              <a
                                href="/madebytragic"
                                className="text-sm font-medium text-indigo-100"
                              >
                                Fahmi-XD
                              </a>
                            </p>
                          </div>
                        </div>
                      </div> */}
                    <div className="max-w-s mt-5 w-full space-y-2">

                      <div className="bg-animate group mb-8 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://rest.api-otakuwibu.my.id"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <img className="block h-16 w-16 rounded object-cover" src="https://c.tenor.com/GiUbb4qg_vwAAAAC/tenor.gif" alt="Pusing jir" />
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Nothing"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Otaku Wibu Nusantara Rest API's
                                  </span>
                                  <span
                                    title="API's"
                                    className="xs:w-[220px] truncate mt-1 w-[175px] text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    Rest API's are created for bots.
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                        <div className="flex w-full h-auto items-center gap-3 py-[3px]">
                          <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border w-auto border-neutral-100/30 px-[7px] py-[1px] my-1">
                            <span className="w-2 text-[10px]">#</span>
                            <span className="text-banner text-[10px]">Node JS</span>
                          </div>
                          <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border w-auto border-neutral-100/30 px-[7px] py-[1px] my-1">
                            <span className="w-2 text-[10px]">#</span>
                            <span className="text-banner text-[10px]">Rest API's</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-animate group mb-3 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://wa.me/6281410404318"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <img className="block h-16 w-16 rounded object-cover" src="https://c.tenor.com/rZPzTbfYtC4AAAAC/tenor.gif" alt="Pusing jir" />
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Nothing"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Yue Emdeh 
                                  </span>
                                  <span
                                    title="Whatsapp Bot"
                                    className="xs:w-[220px] truncate mt-1 w-[175px] text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    Powerfull simpel bot whatsapp
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                        <div className="flex w-full h-auto items-center gap-3 py-[3px]">
                          <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border w-auto border-neutral-100/30 px-[7px] py-[1px] my-1">
                            <span className="w-2 text-[10px]">#</span>
                            <span className="text-banner text-[10px]">Node JS</span>
                          </div>
                          <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border w-auto border-neutral-100/30 px-[7px] py-[1px] my-1">
                            <span className="w-2 text-[10px]">#</span>
                            <span className="text-banner text-[10px]">Bot Whatsapp</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
                  <div className="mb-4 flex justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
            <footer>
              <div className="container mx-auto text-center opacity-60">
                Thanks to <a className="text-blue-500 hover:text-opacity-50" href="https://github.com/lrmn7">L RMN7</a>
                <p className="text-gray text-s">
                  © 2025 L RMN. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}