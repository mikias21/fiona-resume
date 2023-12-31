import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";

// Components
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";

// Css
import "./ColumnOne.css";

const ColumnOne = ({ className }) => {
  return (
    <div className={`col1 ${className}`}>
      {/* Name */}
      <div className="col1_name_contact_container">
        <div className="col1_name">
          <p>李艺菲 / Fiona Li</p>
        </div>
        <div className="col1_contact_info">
          <div className="col1_contact_info_p1">
            <ul>
              <li>
                <p>
                  <small className="email">Email: maggie.li67@yahoo.com</small>
                </p>
              </li>
              <li>
                <p>
                  <small>Check out my Linkedin</small>
                </p>
              </li>
            </ul>
          </div>
          {/* <div className="col1_contact_info_p2">
            <ul>
              <li>
                <p>
                  <small>Check out my Github</small>
                </p>
              </li>
              <li>
                <p>
                  <small>Check out my Portiflio</small>
                </p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* Profile */}
      <div className="col1_profile">
        <div className="col1_profile_title">
          <GiPlagueDoctorProfile className="col1_profile_title_icon" />
          <p>Profile</p>
        </div>
        <div className="col1_profile_content">
          <p>
            I'm 李艺菲 / Fiona Li a dedicated and highly skilled professional in
            the field of managment, specializing in tourism and hospitality.
            Holding a Bachelor's degree in Diplomacy from Xi'an International
            Studies University and a Master's degree in Tourism & Hospitality
            from Edinburgh Napier University.
          </p>
        </div>
      </div>
      {/* Work Experience */}
      <div className="col1_work">
        <div className="col1_work_title">
          <MdWork className="col1_experience_title_icon" />
          <p>Work Experience</p>
        </div>
        <div className="col1_work_content">
          <WorkExperience />
        </div>
      </div>
      {/* Education */}
      <div className="col1_edu">
        <div className="col1_edu_title">
          <FaUserGraduate className="col1_edu_title_icon" />
          <p>Education</p>
        </div>
        <div className="col1_edu_content">
          <Education />
        </div>
      </div>
      <div className="col1_soft_skills">
        <div className="col1_soft_skills_title">
          <AiOutlineExperiment className="col1_softskill_title_icon" />
          <p>Soft Skills</p>
        </div>
        <div className="col1_soft_skills_content">
          <p>
            Product development, Penetration Testing, DevOps Activities, Project
            Managment, Testing and deployment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColumnOne;
