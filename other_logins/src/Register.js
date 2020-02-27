import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    PostData(signup, postData) {
        return postData;
    }

    signup(res, type) {
        console.log(res, type)
        let postData;
        if (type === 'facebook' && res.email) {
            postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }
        if (type === 'google' && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }
   
        // if (postDataPo) {
            
        // }
        if (postData) {
            this.PostData('signup', postData)
            .then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                this.setState({redirect: true});
            });
        }
    }

    render() { 
        // FB.getLoginStatus(function(response) {
        //     statusChangeCallback(response);
        // });
        const responseFacebook = (response) => {
            console.log("facebook console");
            console.log(response);
            this.signup(response, 'facebook');
        }
        // return ( <div>
        //         <fb:login-button 
        //             scope="public_profile,email"
        //             onlogin="checkLoginState();">
        //             </fb:login-button>
        //     </div> );
        
        return ( <div>
            <FacebookLogin
        appId={208877876971025}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}/>
            </div> );
    }
}
 
export default Register;