import React from 'react';

function Settings(){
    return(
        <div>
            <h2>Settings</h2>
            <p>manage app's settings here</p>
            <div>
                <h3>Preferences</h3>
                <ul>
                    <li>Theme: dark/Light</li>
                    <li>Notification: ON/OFF</li>
                    <li>Language: English</li>
                </ul>
            </div>
        </div>
    );
};
export default Settings;