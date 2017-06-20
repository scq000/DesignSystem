import React from 'react';

const Crumb = props =>
    <li className="breadcrumb__item text-title_caps">
        <a href={props.href}>{props.children}</a>
    </li>;

Crumb.propTypes = { href: React.PropTypes.string };

const BreadCrumbs = props =>
    <nav {...props} role="navigation" aria-label="Breadcrumbs">
        <ol className="breadcrumb list_horizontal wrap">
            {props.children}
        </ol>
    </nav>;

BreadCrumbs.Crumb = Crumb;

export default BreadCrumbs;

//Example
/*
{<BreadCrumbs>
    <Crumb href="javascript:void(0);">Parent Entity</Crumb>
    <Crumb href="javascript:void(0);">Parent Record Name</Crumb>
</BreadCrumbs>}
*/
