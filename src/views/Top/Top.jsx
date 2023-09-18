import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Countdown from 'react-countdown';
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { header, subheader, imageFileName, jumpToAnchor } = frontmatter;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scrollToSection = useSmoothScrollTo(jumpToAnchor);

    const renderer = ({ days }) => {
        return (
            <></>
        )
    }

    const extraInfoPart = (
        <Countdown
            date='2023-10-20T20:00:00+05:30'
            renderer={renderer}
        />
    );

    return (
        <ImageCard
            imageFileName={imageFileName}
            header={header}
            subheader={subheader}
            extraInfo={extraInfoPart}
        />
    );
};

Top.propTypes = {
    frontmatter: PropTypes.object,
};

Top.defaultProps = {
    frontmatter: null,
};

export default Top;
