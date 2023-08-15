import React from 'react';

import * as S from './EmptyComponent.styles';

import * as Interface from './EmptyComponent.types';

export default function Component() {
    const state: Interface.EmptyComponentPropTypes = {
        message: 'Componente vazio',
    };

    return (
        <S.Container>
            <h1>{state.message}</h1>
        </S.Container>
    );
}
