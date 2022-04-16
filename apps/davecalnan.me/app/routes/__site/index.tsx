const Homepage = () => {
  return (
    <div className="p-6">
      <div className="mx-auto mt-12 max-w-xl space-y-6">
        <div className="space-y-4 rounded-lg bg-yellow-200 p-6">
          <h1 className="text-6xl font-extrabold leading-[1.125] text-gray-900">
            Hi,
            <br />
            I'm Dave
            <br />
          </h1>
          <p className="text-right text-6xl">👋🏻</p>
        </div>
        <div className="px-4 text-center">
          <p className="text-xl">
            I'm a software engineer living in Cork, Ireland 🇮🇪
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
