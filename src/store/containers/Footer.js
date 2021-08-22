import { connect } from "react-redux";
import {saveTheme} from '../action/changeThemeAction'; 
import Footer from "../../components/layout/Footer";

const mapDispathToProps = dispath => ({
    dispath, 
    saveColorTheme: color => dispath(saveTheme(color)), 
}); 
function mapStateToProps(state){
    return{
        themeColor: state.color
    }; 
}; 
export default connect(
    mapStateToProps, 
    mapDispathToProps 
)(Footer); 