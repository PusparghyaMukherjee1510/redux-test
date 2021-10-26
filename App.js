import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      item:"",
    }
  }
  handleChange=(event)=>{
    console.log(event.target);
    this.setState(item.event.target.value);
  };
  click=()=>{
    this.props.addToDo(this.state.item);
    this.setState({item:""});
  };
}
export default connect(null,mapDispatchToProps(App));

