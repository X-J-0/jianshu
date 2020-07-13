import Loadable from 'react-Loadable';
import React from 'react';
const LoadableaComponent = Loadable({
    loader:() => import('./'),
    loading() {
        return <div>正在加载</div>
    }
});

export default () => <LoadableaComponent/>
