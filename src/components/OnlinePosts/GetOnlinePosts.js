import React, { Component } from 'react';
import './GetOnlinePosts.css'

class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []
        };
    }
    

    componentDidMount(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
       
        fetch("https://prod-13.uksouth.logic.azure.com:443/workflows/6a3f9ddb6e02486cba287635be124372/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XCLP676-MU4uu-T_nLsvesS1bBkHSQKCWiTNuGv02P0", requestOptions)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;
        console.log(this.state)

        

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ul classname="item">
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div class="test">
                                    <p className="title">Incident ID #{post.id}  /  {post.title} </p>
                                
                                        <p className="severity">{post.severity}</p>
                                    
                             
                                </div>

                                <div>
                                <p className="description">{post.description}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            );
        }    
    }
  }
  
  export default GetOnlinePosts;