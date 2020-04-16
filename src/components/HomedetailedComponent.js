import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Group from './Chat/Group' 
import Chat from './Chat/Chat';
import history from './history';
import ReactDOM from 'react-dom';
import './Chat/Chat'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
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
            history.push('/'+web.name);
            localStorage.setItem('chat_groupname', web.name);
            /*return(
                <div>
                    <Chat  />
                </div>
            );*/
            ReactDOM.render(
                <React.StrictMode>
                    <BrowserRouter>
                    <div><Route exact path="/" component={() => <Chat groupname={web.name}/>} /></div>
                      
                  </BrowserRouter>
                
                </React.StrictMode>,
                document.getElementById('root')
              );
            }
        else{
            return (
                <div>hello</div>
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
                 <Button color="success" size="lg" block onClick={() => renderWeb(web)}>
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
