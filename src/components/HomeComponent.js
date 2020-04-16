import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Button } from 'reactstrap'; 
import { Card, CardImg, CardImgOverlay, CardText,CardBody, CardTitle } from 'reactstrap';
import HomeDetail from './HomedetailedComponent';
import '../App.css';
class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedWeb: null
             
        }
    }
    onWebSelect(web)
    {
        this.setState({ selectedWeb: web})
    }
    renderWeb(web){
        if(web!=null){
            return(
                <div>
                    <HomeDetail selectedWeb={web} />
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    render(){
        const home = this.props.webs.map((web)=>{
            return(
                <div key={web.id} className="col-8 col-md-3 m-4 shadow p-3 mb-5 bg-white rounded">
                    <Card onClick={() => this.onWebSelect(web)}>
                   
                            <Card className="shadow p-3 mb-5 bg-secondary rounded text-white">
                            
                            <CardTitle>{web.name}</CardTitle>
                            
                        </Card>
                       
                        <CardImg width ="70%" src={web.image} alt ={web.image}/>
                           
                    </Card>
                </div>

            );
        });
        return(
            <div className="container homecss">
            <div className="container">
                <div className="row">
                    {this.renderWeb(this.state.selectedWeb)}
                </div>
                <div className = "row">
                    {home} 
                    
                </div>
                
               </div>
            </div>
        );
    }
}

export default Home;