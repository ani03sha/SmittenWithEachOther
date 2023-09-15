import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const {
        anchor,
        header: rootHeader,
        subheader: rootSubHeader,
        teamMember
    } = frontmatter;

    const copiedToClipboard = () => {
        const alertColor = { background: "#9ebc9f", text: "white" };
        notify.show(
            "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
            "custom",
            5000,
            alertColor
        );
    }

    return (
        <div>
            <PageSection className={className} id={anchor}>
                <Notifications options={{ zIndex: 200, top: '50px' }} />
                <Row>
                    <SectionHeader header={rootHeader} subheader={rootSubHeader} />
                </Row>
                <Row className="charities">
                    <Col lg={8} className="mx-auto text-center">
                        <p className="large text-muted">
                            In lieu of a gift, we would love for you to treat yourself to delicious food, to honor the start of our marriage. Feel free to send us a selfie, or use
                            <CopyToClipboard text="#AnikSha2023">
                                <button
                                    type="button"
                                    onClick={copiedToClipboard}
                                    className="invisibleButton text-muted"
                                >
                                    <b>#AnikSha2023</b>
                                </button>
                            </CopyToClipboard>
                            on social media!
                        </p>
                    </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
                    <h2>Celebration Captains</h2>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
                    {teamMember.map(({ header, ...tmProps }) => (
                        <Col sm={4} key={header}>
                            <TeamMember header={header} {...tmProps} />
                        </Col>
                    ))}
                </Row>
            </PageSection>
        </ div>
    );
};

Team.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Team.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Team;
