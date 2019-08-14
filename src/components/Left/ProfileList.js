import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/main.css';
import '../../assets/css/profile.css';
import '../../assets/css/tooltip.css';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionAction from '../../store/actions/sessionAction';

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.defaultProfiles[this.props.selected].name || ''
    }
    this.textInput = React.createRef();
  }

  // componentDidMount() {
  //   if(this.props.edit===true){
  //     this.textInput.current.focus();
  //   }
  //   this.setState({
  //     name: this.props.defaultProfiles[this.props.selected].name
  //   })
  // }
  componentWillUpdate(nextProps, nextState){
    
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.edit===true &&this.props.showFormEdit){
      this.textInput.current.focus();
      
    }
    if (prevState.name.trim() === "" && !this.props.showFormEdit){
      this.setState({
        name: this.props.defaultProfiles[this.props.selected].name
      })
    }
   
    console.log('[component Didupdate]'+ this.props.defaultProfiles[this.props.selected].name)
  }

  handleOnChange = (e) =>{
    this.props.handleInputChange(e);
    this.setState({
      name: e.target.value
    }, ()=> this.props.handleChangeName(this.state.name));
    
  }

  setCurrentProfile= async (e,index) => {
    await this.props.setCurrentProfile(e, index);
    this.setState({
      name: this.props.defaultProfiles[this.props.selected].name
    })
  }

  render() {
    const getProfiles = () => {
      const profiles = this.props.defaultProfiles;
      const listProfiles = profiles.map((profile, index) => (
        <div
          id={
            profile.isDefault === true
              ? 'default-' + profile.id
              : 'custom-' + profile.id
          }
          className={
            profile.isDefault === true
              ? 'profile-item ' + profile.class + ' no-edit ' + profile.choose
              : 'profile-item ' + profile.class + ' ' + profile.choose
          }
          onClick={(e)=>this.setCurrentProfile(e, index)}
        >
          {profile.name}
        </div>
      ));
      let currentProfile = this.props.defaultProfiles[this.props.selected].name
      return (
        <div id="profileList" className="scrollable">
          {listProfiles}
          <input
            id="profileRename"
            type="text"
            ref={this.textInput}
            placeholder="enter new profile"
            className={this.props.showFormEdit ? 'profile-item show' : 'profile-item'}
            maxLength="25"
            defaultValue={currentProfile}
            value={this.state.name}
            style={{ top: 30 * this.props.selected }}
            onFocus={this.handleFocus}
            onChange={this.handleOnChange}
            onKeyDown={this.props.keyPress}
            onBlur={this.props.renameProfile}
          />
        </div>
      );     
    }; 
  return getProfiles();  
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
)(ProfileList);
