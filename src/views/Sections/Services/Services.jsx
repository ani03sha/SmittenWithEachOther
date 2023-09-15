import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import './Services.scss';

const Announcement = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                <div className="message">
                    <p className="paragraph1">
                        <h3>🎉✨ Save the Date: October 20, 2023! 🎩👰</h3>
                        <br />
                        Hey there, wonderful people!
                        We have got some incredibly exciting news to share, and we cannot wait a moment longer to spill the beans. It is official - Aakanksha and Anirudh are tying the knot, and we want YOU to be a part of our magical day!
                    </p> {/* paragraph1 */}
                    <p className="paragraph2">
                        Once upon a time (well, not so long ago), two souls crossed paths and instantly clicked. It was like finding the missing piece of a puzzle. We felt so at ease, so right, like we had known each other for a thousand lifetimes. 💑
                        And now, after countless knowing smiles, teasing friends, and a fair share of <b>When is the big day?</b> questions, we are thrilled to announce that we are making it official!
                    </p> {/* paragraph2 */}
                    <p className="paragraph3">
                        Please join us on <b>October 20, 2023</b>, as we embark on this beautiful journey together. It is going to be a day filled with love, laughter, and unforgettable moments.
                        So, mark your calendars, dust off your dancing shoes, and get ready for a celebration like no other. We promise it is going to be a day to remember. 🥂🕺💃
                        Stay tuned for more details, and keep the excitement alive. We cannot wait to have you by our side as we get married and begin this incredible chapter of our lives.
                        <br />
                        <br />
                        Let the countdown to the big day begin! 🗓️🥳
                    </p> {/* paragraph3 */}
                    <p className="paragraph4">
                        With love and anticipation,
                    </p> {/* paragraph4 */}
                    <p className="paragraph5">
                        Aakanksha & Anirudh 💕
                    </p> {/* paragraph5 */}
                </div> {/* message */}
            </Row>
        </PageSection>
    );
};

Announcement.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Announcement.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Announcement;
