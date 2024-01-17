const Features = () => {
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-full flex-col gap-16 bg-white/5  pt-6 ring-1 ring-white/10 sm:rounded-3xl lg:flex-row lg:items-center">
          <div className="w-full ml-4 mx-auto flex-auto">
            <h2 className="text-3xl font-bold   sm:text-4xl">
            Feel the music in your bones
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-500 text-justify">
            Explore our extensive range of over-ear headphones designed to help you enjoy your favourite music on the go.
            </p>
          </div>
          <div className="h-full  w-full  mx-auto flex-none rounded-[10px] object-cover shadow-xl lg:max-w-sm">
            <img src="/music.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
