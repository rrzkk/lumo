import ThreeLumos from "./components/threeLumos";
// import "../test/threeLumo.css";

export default function test() {
  return (
    <main className="flex flex-col items-center justify-between " id="mainpage">
      <ThreeLumos />

      <div className=" fixed bottom-10 left-10 flex items-end text-center md:text-start ">
        <p>
          <b
            className="text-l md:text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Everyday Coffee Stop
          </b>
          <br />
          <b className="text-xs md:text-sm">Light Your Day</b>
          <br />
          <a className="text-xs md:text-xs font-bold	">Find Us:</a>
          <br />
          <a className="text-xs md:text-xs	">
            1 Denison Street, North Sydney, 2060, NSW
          </a>
          <br />
          <a className="text-xs md:text-xs	">
            100 Pacific Highway, North Sydney, 2060, NSW
          </a>
          <br />
          <a className="text-xs md:text-xs	">
            Departure Plaza, Mascot, 2020, NSW
          </a>
          <br />
          <a className="text-xs md:text-xs	">
            Lumos international airport coming soon
          </a>
        </p>
      </div>
    </main>
  );
}
