import { HandRaisedIcon } from "@heroicons/react/24/solid";
import Typical from "react-typical";

function App() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-2 bg-gray-100">
      <main className="px-8">
        <div className="flex flex-col space-y-8 items-start justify-start">
          <HandRaisedIcon className="w-20 text-juxe animate-[wiggle_1s_ease-in-out_infinite]" />
          <h1 className="font-silkscreen text-7xl font-bold text-juxe tracking-wide">
            Panjul!
          </h1>
          <h3 className="font-silkscreen text-back text-5xl">
            Namaku adalah{" "}
            <strong className="bg-red-400 text-white">panjul</strong> sekian dan{" "}
            <strong className="bg-green-400">terima</strong> kasih
          </h3>
          <div className="font-silkscreen text-5xl flex space-x-3 ">
            <h4> Panggil aku </h4>
            <strong className="bg-juxe px-1">
              <Typical
                steps={[
                  "Panjul",
                  2000,
                  "Manujul",
                  2000,
                  "Sikujul",
                  2000,
                  "Marijul",
                  2000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
