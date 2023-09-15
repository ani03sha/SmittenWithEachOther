import React from "react";
import PropTypes from "prop-types";
import "./TeamMember.scss";

const TeamMember = ({
    header,
    subheader
}) => {
    return (
        <div className="team-member">
            <h5>{subheader}</h5>
            <br />
            <h5>{header}</h5>
        </div>
    );
};

TeamMember.propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string
};

TeamMember.defaultProps = {
    header: "",
    subheader: "",
};

export default TeamMember;
