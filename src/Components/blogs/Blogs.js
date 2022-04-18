import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div >
                <h2>Authentication Vs Authorization</h2>
                <h4>Authentication</h4>
                <p>Authentication verifies who the user is.It works through passwords, one-time pins, biometric information, and other information provided or entered by the user.That's why we can say it is the first step of a good identity and access management process also it is visible to and partially changeable by the user.
                </p>
                <h4>Authorization</h4>
                <p>On the other hand authorization determines what resources a user can access.It works through settings that are implemented and maintained by the organization.
			    That's the reason authorization always takes place after authentication and authorization is not visible to or changeable by the user.</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4>Why are you using firebase?</h4>
                <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time.And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                <h4>What other options do you have to implement authentication?</h4>
                <p></p>
            </div>
            <div>
                <h2>What other services does firebase provide other than authentication?</h2>
                <p>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Storage</li>
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;