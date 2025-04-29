import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto my-48">
        <div className="flex  justify-between ">
          <div className="w-1/4">
            <div className="relative bg-Navy-900 rounded-2xl  w-64 h-[31.8rem]">
              <div className="absolute bottom-10 px-6 ">
                <div className="grid gap-y-3  items-center text-Navy-200 text-lg font-rubik font-light">
                  <p>Daily</p>
                  <p>Weekly</p>
                  <p>Monthly</p>
                </div>
              </div>
              <div className="absolute top-0 bg-Purple-600 rounded-2xl w-full h-[21rem] z-10">
                <div className="px-6 ">
                  <img
                    src="/images/image-jeremy.png"
                    alt="user's image"
                    className="h-12 w-12 ring-1 ring-white rounded-full my-6 "
                  />
                  <div>
                    <p className="text-Navy-200 font-rubik text-sm">
                      Report for
                    </p>
                    <h1 className="capitalize text-4xl text-white font-rubik font-light">
                      Jeremy robson
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="grid grid-rows-2 gap-y-[170px] ">
              <div className="grid grid-cols-3 items-center gap-x-7">
                <div className="bg-Orange-work w-full h-full relative rounded-2xl ">
                  <img
                    src="/images/icon-work.svg"
                    alt="work-column"
                    className="float-right pr-4 "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik capitalize ">
                        work
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
                <div className="bg-Blue-play w-full h-full relative rounded-2xl">
                  <img
                    src="/images/icon-play.svg"
                    alt="play-column"
                    className="float-right "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik capitalize">
                        play
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
                <div className="bg-Pink-400-study w-full h-full relative rounded-2xl">
                  <img
                    src="/images/icon-study.svg"
                    alt="study-column"
                    className="float-right "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik capitalize ">
                        study
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-x-7">
                <div className="bg-Green-exercise w-full h-full relative rounded-2xl">
                  <img
                    src="/images/icon-exercise.svg"
                    alt="exercise-column"
                    className="float-right pr-4 "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik capitalize ">
                        exercise
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
                <div className="bg-Purple-social w-full h-full relative rounded-2xl">
                  <img
                    src="/images/icon-social.svg"
                    alt="social-column"
                    className="float-right pr-4 "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik text-lg capitalize">
                        Social
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
                <div className="bg-Yellow-self-care w-full h-full relative rounded-2xl">
                  <img
                    src="/images/icon-self-care.svg"
                    alt="self-care-column"
                    className="float-right pr-4 "
                  />

                  <div className="absolute top-12 rounded-2xl bg-Navy-900 h-auto w-full">
                    <div className="flex justify-between items-center px-4 pt-6">
                      <div className="text-white font-rubik text-lg capitalize">
                        Self care
                      </div>
                      <div>
                        <img src="/images/icon-ellipsis.svg" alt="menu" />
                      </div>
                    </div>
                    <div className="text-5xl font-rubik text-white font-normal px-4 py-3">
                      5hrs
                    </div>
                    <p className="text-white text-lg font-rubik font-light pb-10 px-4">
                      last week - 10hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
