import React from 'react';

import { Div } from './style';

const PageContent = ({ children, className }) => (
    <Div className={ className }>
        { children }
    </Div>
);

export default PageContent;
