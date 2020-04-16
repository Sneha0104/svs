import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Group from './Chat/Group.js' 
 
    function RenderWeb({web}) {
        return(
            <div className="col-12 col-md-5 m-3 shadow p-3 mb-5 bg-white rounded">
            <Card className="shadow p-3 mb-5 bg-primary rounded text-white">
                          <CardTitle>{web.name}</CardTitle>
                          </Card>
                          <CardImg width="100" src={web.image} alt={web.name} />
                         
                
            </div>  
        );
    }
    function renderWeb(web){
        if(web!=null){
            return(
                <div>
                    <Group  />
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    function RenderDesc({web}) {
        return(
            <div className="col-12 col-md-6 m-3 shadow p-3 mb-5 bg-white rounded">
           
                          
                          <Card className="shadow p-3 mb-5 rounded">
                          <CardBody>
                          <CardText>{web.description}</CardText>
                          </CardBody>
                         
                </Card>
                 <Button color="success" size="lg" block onClick={() => this.renderWeb(web)}>
                          Join
                </Button>
            </div>  
        );
    }
 
    
 
 
 
    
 
 
    const HomeDetail = (props) => {
 
        
        if (props.selectedWeb != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderWeb web ={props.selectedWeb} />
                        <RenderDesc web ={props.selectedWeb} />
                         </div>
                </div>
                
            );
        } else {
            return (
                <div></div>
            );
        }
 
        
    }
 
export default HomeDetail;
