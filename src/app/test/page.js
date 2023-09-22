import ThreeLumos from "../components/threeLumos";
// import "../test/threeLumo.css";

export default function test() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between "
      id="mainpage"
    >
      <ThreeLumos />

      <div className=" fixed bottom-10 left-10 flex items-end justify-start ">
        <p>
          <b className="text-xl" target="_blank" rel="noopener noreferrer">
            The Best Cafe in Sydney
          </b>
          <br />
          <b className=" text-sm">Light Your Day</b>
          <br />
          <a className="text-xs	">1 Denison Street, North Sydney, 2060, NSW</a>
        </p>
      </div>
    </main>
  );
}
