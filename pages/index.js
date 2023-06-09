import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className=" pt-32 pb-16 flex items-center justify-center min-h-screen-100">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto -mt-0">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Exams Nepal
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus corrupti quasi modi, quas aliquam, provident, atque maxime vitae eum soluta laborum.
                  </p>
                  <div className="buttons mt-5 flex justify-center">
                    <button className=" bg-blueGray-700 mr-2 text-white p-3 rounded">Find Exams</button>
                    <button className=" bg-blueGray-700 ml-2 text-white p-3 rounded">Publish your Exams</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"

          >

          </div>
        </div>

        <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i class="fas fa-eye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Lok Sewa Exams</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum quis ex modi nobis iure?
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i class="fas fa-eye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">IOE Exam</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nulla ea autem magni enim quibusdam?
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i class="fas fa-eye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">IOM Exams</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nihil quisquam veritatis, ad blanditiis recusandae.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-bold leading-normal">
                  Track your progress so that you'll know where you stand.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt sed modi laudantium impedit in itaque suscipit assumenda perferendis! Amet repellat ipsum eaque adipisci architecto explicabo officiis possimus odio quidem?
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dolor omnis incidunt maxime numquam cumque! Molestiae.
                </p>
                <Link href="/">
                  <a href="#pablo" className="font-bold bg-blueGray-700  text-white  p-5 py-2 rounded mt-10">
                    Find Exams
                    <i className="fas fa-arrow-right ml-2 text-sm opacity-50"></i>
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">

                    <h4 className="text-xl font-bold text-white">
                      First online exam in Nepal
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequatur aut inventore quis tempora architecto, asperiores atque odit numquam tenetur deleniti illum ut nemo doloremque. Amet quos aliquam nesciunt accusamus?
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >

          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A platform for Teachers</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo pariatur consequatur eveniet laboriosam atque adipisci omnis voluptas enim, beatae natus eaque maxime quis doloribus quaerat quam error optio molestiae.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Teacher  Feature 1
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Teacher   Feature 2

                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Teacher Feature 3

                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Why Exams Nepal?</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio consequuntur officia corrupti excepturi est suscipit, exercitationem corporis sit? Nam.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 text-center">
                  <div className="icon h-16 text-3xl rounded-full w-16 bg-blueGray-700 mx-auto text-white flex items-center justify-center">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Reason Title</h5>
                    <p className="mt-1 text-sm text-blueGray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum provident molestias illo facilis dolorum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 text-center">
                  <div className="icon h-16 text-3xl rounded-full w-16 bg-blueGray-700 mx-auto text-white flex items-center justify-center">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Reason Title</h5>
                    <p className="mt-1 text-sm text-blueGray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum provident molestias illo facilis dolorum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 text-center">
                  <div className="icon h-16 text-3xl rounded-full w-16 bg-blueGray-700 mx-auto text-white flex items-center justify-center">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Reason Title</h5>
                    <p className="mt-1 text-sm text-blueGray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum provident molestias illo facilis dolorum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 text-center">
                  <div className="icon h-16 text-3xl rounded-full w-16 bg-blueGray-700 mx-auto text-white flex items-center justify-center">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Reason Title</h5>
                    <p className="mt-1 text-sm text-blueGray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum provident molestias illo facilis dolorum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >

          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
