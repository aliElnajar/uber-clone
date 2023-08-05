import Link from "next/link";

const notFound = () => {
  return (
    <>
      <title>page not found</title>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404</h1>
            <h6 className="mb-5 text-2xl ">
              Looks like you've found the doorway to the great nothing
            </h6>
            <p className="font-sm text-slate-300 tracking-wide mb-5">
              Please visit our hompage to get where you need to go.
            </p>
            <Link href="/" className="btn btn-warning ">
              Home Page
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default notFound;
