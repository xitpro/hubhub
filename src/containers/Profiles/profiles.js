import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeftWindow from '../../components/Left/LeftWindow';
import RightWindow from '../../components/Right/RightWindow';
import * as sessionAction from '../../store/actions/sessionAction';


class Profiles extends Component {
    constructor(props) {
        super(props);
            
          this.state = {
            defaultProfiles: [],
            showDeleteCfm: false,
            showFormEdit: false,
            nameCurrentProfile: '',
            nameChanged: '',
            name: '' 
          };
          
      }
      
      componentWillMount = async e => {
        document.addEventListener('mousedown', this.handleClickOut);
        
      };

      componentDidMount = async () => {
        await this.props.actions.getProfileList();
        
        console.log('something change ',this.props.defaultProfiles);
        var name = this.props.defaultProfiles[this.props.selected].name;
        this.setState({
            nameCurrentProfile: name,
            showDeleteCfm: false,
            showFormEdit: false,
        });
      };
    
      handleClickOut = e => {
        console.log('click at ' + e.target.id);
        
        var name =  this.state.name.trim() || this.props.defaultProfiles[this.props.selected].name;
        if (this.state.showFormEdit === true && e.target.id !== 'profileRename') {
         // this.renameProfileWithButton();
        
          this.setState({ 
            showFormEdit: false,
            name: name,
           });
        }
        if (
          this.state.showDeleteCfm === true &&
          e.target.id !== 'cfmDelete' &&
          e.target.id !== 'profileDelCfm' &&
          e.target.id !== 'delName' &&
          e.target.id !== 'deletediv'
        ) {
          this.setState({ showDeleteCfm: false });
        }
      };
    
      setCurrentProfile = async (e, index) => {
        let newIndex = index === undefined ? this.prop.selected : index;
        await this.props.actions.chooseProfile(newIndex, e.target.id);
        if (newIndex !== undefined) {
        this.setState({
          name: this.props.defaultProfiles[newIndex].name,
        });
        }
        console.log('cccccccccccc ' + this.props.defaultProfiles[this.props.selected].name)
      };
    
      addProfile = async () => {
        await this.props.actions.addNewProfile();
        this.setState({
          name: this.props.defaultProfiles[this.props.selected].name,
        });
        document.getElementById('profileList').scrollTop = 9999999;
      };
    
      moveUp = () => {
        this.props.actions.moveUp();        
      };
    
      moveDown = () => {
        this.props.actions.moveDown();
      };
    
      renameProfileToggle = async (e, index) => {
     
        
        this.setState({
          showFormEdit: true ,        
        });
        
      };
    
      deleteProfileToggle = () => {
        this.setState({ showDeleteCfm: true });
      };
    
      handleFocus = event => {
        console.log('aaaaaaaaaaaaaaaaaaa  ' + event.target.select());
        event.target.select();
      };
    
      handleInputChange = e => {
        
        console.log('name changing handle ' + e.target.value);
       
        this.setState({
          nameCurrentProfile: e.target.value, 
          nameChanged: e.target.value });
        
      };
    
      keyPress = e => {
        if (e.keyCode === 13) {
          this.renameProfileWithButton();
        }
       
      };
    
      renameProfileWithButton = async () => {
        await this.props.actions.changeProfileName(this.state.nameChanged);
        var name =  this.state.name.trim() || this.props.defaultProfiles[this.props.selected].name;
        this.setState({
          nameSelected: '',
          name: name,
          showFormEdit: false,
        });
      };
    
      renameProfile = async e => {
        console.log('ths is change name profile  '+ e.target.value);
      //  var name = this.props.defaultProfiles[this.props.selected].name;
        
        await this.props.actions.changeProfileName(e.target.value);
        var name =  this.state.name.trim() || this.props.defaultProfiles[this.props.selected].name;
        this.setState({
          nameSelected: '',
          name: name,
          showFormEdit: false,
        });
      };
    
      deleteProfile = async e => {
        await this.props.actions.removeProfile();
        this.setState({
          name: this.props.defaultProfiles[this.props.selected].name,
          showDeleteCfm: false,
        });
      };
      handleChangeName = (name) =>{
        this.setState({
          name: name
        })
      }
    
      render() {
        if(!localStorage.hasOwnProperty('defaultProfiles')){
          console.log('test' + localStorage["defaultProfiles"])
          return <div>Loading data....</div>;
        } else {
          
          console.log('test ' + this.props.defaultProfiles);
          return (
            <div className="wrapper-box flex">
              <LeftWindow
                defaultProfiles={this.props.defaultProfiles}
                selected={this.props.selected}
                showFormEdit={this.state.showFormEdit}
                handleInputChange={this.handleInputChange}
                nameSelected={this.state.nameSelected}
                //nameSelected = {this.state.nameCurrentProfile}
                keyPress={this.keyPress}
                handleFocus={this.handleFocus}
                showEdit={this.renameProfileToggle}
                addProfile={this.addProfile}
                showDelete={this.deleteProfileToggle}
                moveUp={this.moveUp}
                moveDown={this.moveDown}
                setCurrentProfile={this.setCurrentProfile}
                showDeleteCfm={this.state.showDeleteCfm}
                deleteProfile={this.deleteProfile}
                renameProfile={this.renameProfile}
                handleChangeName={this.handleChangeName}
              />
              <RightWindow 
              nameProfileSelected={this.state.name}/>
            </div>
          );            
        }
      }
    }
    
    const mapStateToProps = state => ({
      defaultProfiles: localStorage.defaultProfiles
        ? JSON.parse(localStorage.defaultProfiles)
        : [],
      selected: localStorage.selected ? localStorage.selected : 0,
    });
    
    function mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(sessionAction, dispatch) };
    }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profiles);
 
