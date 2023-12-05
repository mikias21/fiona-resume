import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="work_exp">
      <div className="work_exp_date_loc">
        <p>
          <small>2022 / 10 - 2023 / 05 </small>
        </p>
        <p>
          <small>China, Shanghai</small>
        </p>
      </div>
      <div className="work_exp_title_company">
        <p>Software Developer</p>
        <p>Binary Touch Technologies LLP</p>
      </div>
      <div className="work_exp_content">
        <ul>
          <li>This will be 1</li>
          <li>This will be 2</li>
          <li>This will be 3</li>
          <li>This will be 4</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
