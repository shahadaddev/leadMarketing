import workOne from "../../../assets/images/worksOne.jpg";

const WorkLeftContent = () => {
  return (
    <div className="flex gap-0.5">
      <div>
        <img className="rounded-xl" src={workOne} alt="" />
      </div>
      <div>
        <img className="rounded-xl" src={workOne} alt="" />
      </div>
    </div>
  );
};

export default WorkLeftContent;
