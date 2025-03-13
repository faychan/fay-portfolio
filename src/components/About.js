import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import parse from "html-react-parser";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = require("../images/" + this.props.sharedBasicInfo.image);
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var more = this.props.resumeBasicInfo.more;
      var download = this.props.resumeBasicInfo.download;
    }

    const handleClickDownload = () => {
      const link = document.createElement("a");
      link.href = "Resume.pdf"; // File must be in the 'public' folder
      link.download = "Farah_Noriffat_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    style={{ objectFit: "cover" }}
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 me-3"
                    style={{
                      height: "auto",
                      fontSize: "1.325rem",
                      lineHeight: "200%",
                    }}
                  >
                    <span className="wave">{hello} </span>
                    <div className="about-description">
                      {about && parse(about)}
                    </div>
                    <div className="container-btn-download">
                      {more} &nbsp;
                      <div
                        className="btn-download"
                        onClick={handleClickDownload}
                      >
                        <span
                          className="iconify"
                          data-icon="et:download"
                          data-inline="false"
                        ></span>
                        <span className="text">{download}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
