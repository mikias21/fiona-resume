import { FaBook } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { AiFillExperiment } from "react-icons/ai";

import "./ColumnTwo.css";

const ColumnTwo = ({ className }) => {
  return (
    <div className={`col2 ${className}`}>
      <div className="col2_main_skills">
        <div className="col2_main_skills_title_set">
          <AiFillExperiment className="col2_main_skills_icon" />
          <p className="col2_main_skills_title">Skills</p>
        </div>
        <div className="col2_main_skills_content">
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
          <div className="col2_main_skills_subcontent skills_last">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python, Java</p>
          </div>
        </div>
      </div>
      <div className="col2_personal_projects">
        <div className="col2_projects_title_set">
          <FaBook className="col2_projects_icon" />
          <p className="col2_personal_projects_title">Personal Projects</p>
        </div>
        <div className="col2_personal_projects_content">
          <div className="col2_personal_projects_subcontent">
            <p>My DURP</p>
            <p className="col2_personal_projects_link">
              <small>https:helloworld.com</small>
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div className="col2_personal_projects_subcontent project_last">
            <p>My DURP</p>
            <p className="col2_personal_projects_link">
              <small>https:helloworld.com</small>
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col2_certificates">
        <div className="col2_certificates_title_set">
          <GrCertificate className="col2_certificates_icon" />
          <p className="col2_certificates_title">Certificates</p>
        </div>
        <div className="col2_certificates_content">
          <div className="col2_certificates_subcontent">
            <p className="col2_certificates_date">
              <small>2015-06</small>
            </p>
            <p className="col2_certificate_title">AWS Developer Essentials</p>
            <p className="col2_certificates_issuer">LinkedIn</p>
          </div>
          <div className="col2_certificates_subcontent">
            <p className="col2_certificates_date">
              <small>2015-06</small>
            </p>
            <p className="col2_certificate_title">AWS Developer Essentials</p>
            <p className="col2_certificates_issuer">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnTwo;
