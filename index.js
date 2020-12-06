import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager sample with firebase realtime database service
 */
export class Firebase extends SampleBase {
    constructor() {
        super(...arguments);
        this.hostUrl = "https://realtime-firebase.azurewebsites.net/";
    }
    render() {
        return (<div>
                <div className="control-section">
                    <FileManagerComponent id="firebase" ajaxSettings={{
            url: this.hostUrl + 'api/FirebaseProvider/FirebaseRealtimeFileOperations',
            getImageUrl: this.hostUrl + 'api/FirebaseProvider/FirebaseRealtimeGetImage',
            uploadUrl: this.hostUrl + 'api/FirebaseProvider/FirebaseRealtimeUpload',
            downloadUrl: this.hostUrl + 'api/FirebaseProvider/FirebaseRealtimeDownload'
        }}>
                        <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                    </FileManagerComponent>
                </div>
            </div>);
    }
}

render(<Firebase />, document.getElementById('sample'));