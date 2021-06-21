import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Container } from "react-boostrap";
import NavItem from "components/NavItem";

const SecondaryNavbar = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { links } = frontmatter;

    return (
        <>
            <Container className={clsx("bg-dark", "text-white", className)}>
                <Row className="align-items-left">
                    {links.map((link) => (
                        <Col md={12} key={link.href}>
                            <NavItem {...link} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

SecondaryNavbar.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object
}

SecondaryNavbar.defaultProps = {
    className: null,
    frontmatter: null
}

export const SecondaryNavbar;