import React, { useState } from "react";
import "../styles/TechTable.css";
import generalData from "../data/general.json";
import { Row, Col } from "react-bootstrap";

const TechTable = () => {
  const [activeCategory, setActiveCategory] = useState(
    generalData.iconSkillCategories[0].name
  );

  return (
    <div className="tech-table">
      <Row className="tech-table-row">
        <Col lg={12} className="tech-table-col">
          <Row>
            <Col lg={3} md={12} sm={12} className="toggles-col">
              <div className="toggle-buttons">
                {generalData.iconSkillCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`toggle-button ${
                      activeCategory === category.name ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </Col>
            <Col lg={9} md={12} sm={12} className="content-col">
              {generalData.iconSkillCategories.map((category, index) => {
                if (category.name === activeCategory) {
                  return (
                    <div key={index} className={`category ${category.name}`}>
                      <div className="category-content">
                        <h3>{category.name}</h3>
                        <p>{category.content}</p>
                        <div className="skills">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill">
                              <img
                                src={`/icons/${skill}.svg`}
                                alt={`${skill} icon`}
                                className="skill-icon"
                                onError={(e) => {
                                  e.target.src = `/icons/default.svg`;
                                  // Fallback if even default isn't available
                                  e.target.onerror = () => {
                                    e.target.style.display = "none";
                                  };
                                }}
                              />
                              <p>{skill}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TechTable;
