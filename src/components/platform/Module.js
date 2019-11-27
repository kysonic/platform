// @flow
import React from 'react';
import moduleTypes from '@components/platform/module-types';

type ModulePropsType = {
    data: any,
}

function extractModuleFromLayout (data) {
    return data.content?.[0];
}

const Module = ({data} : ModulePropsType) => {
    const moduleData = extractModuleFromLayout(data);
    const ModuleComponent = moduleTypes[moduleData._type];

    if (!ModuleComponent) {
        return null;
    }

    return (
        <ModuleComponent {...moduleData} />
    );
};

export default Module;
