// @flow
import React from 'react';
import {View} from 'react-native';
import moduleTypes from '@components/platform/module-types';

type ModulePropsType = {
    data: any,
}

function extractModuleFromLayout (data) {
    return data.content?.[0];
}

const Module = ({data, index} : ModulePropsType) => {
    const moduleData = extractModuleFromLayout(data);
    const ModuleComponent = moduleTypes[moduleData._type];

    if (!ModuleComponent) {
        return null;
    }

    return (
        <View style={{marginTop: index ? 10 : 0}}>
            <ModuleComponent {...moduleData} />
        </View>
    );
};

export default Module;
