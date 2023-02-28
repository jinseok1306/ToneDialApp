import React from 'react';
import Navigation from '../src/navigation';
import { NavigationService } from '../src/common';

const Router =  () => {
    return (
        <Navigation
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        />
    )
}

export default Router;