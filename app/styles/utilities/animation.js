import { css } from 'styled-components';

import constants from 'styles/tokens/animation';

export function transition(property = 'all', duration = constants.duration, easing = constants.easing) {
    return css`
        transition: ${ property } ${ duration } ${ easing };
    `;
}
