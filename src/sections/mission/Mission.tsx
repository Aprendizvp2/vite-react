import mission from "../../assets/mission/mission.png";

export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 sm:grid-cols-2 items-center gap-8 ">
      <div className="flex flex-col gap-6">
        <p className="text-primary-blue text-2xl md:text-4xl  font-bold">
          Our core mission
        </p>
        <p className="text-gray-500 text-base text-justify italic w-full sm:w-4/5">
          "Drive sustainable manufacturing transformation by removing the
          invisible systemic barriers to change, enabling a cycle of
          self-sustaining operational excellence."
        </p>
        <button className="bg-primary-blue text-white px-8 py-4 rounded-lg w-full sm:w-3/5">En savior plus</button>
      </div>
      <img className="rounded-2xl" src={mission} alt="mission" />
    </div>
  );
}
