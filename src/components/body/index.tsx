import React, { useState } from 'react';

import { BodyContainer } from './styled';

export const Body: React.FC = () => {
    const [steps, setSteps] = useState<number>(0);

    return (
        <BodyContainer>
            <p>Body activity</p>
        </BodyContainer>
    );
};
