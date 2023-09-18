import React from "react";
import PropTypes from "prop-types";
import Countdown from 'react-countdown';
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { header, subheader, imageFileName } = frontmatter;

    const renderer = () => {
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
