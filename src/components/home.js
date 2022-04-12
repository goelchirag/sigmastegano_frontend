import { Field, Form, Formik } from "formik";
import { Component } from "react";
import homeService from "../service/homeService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      message: "",
      type: null
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
    if (values.type === "encrypt") {
      homeService
        .getEncodedImage(values.image, values.message)
        .then((response) => {
          this.setState({ image: response.data.img });
        });
    } else {
      homeService.getDecodedMessage(values.img).then((response) => {
        this.setState({ message: response.data.message });
      });
    }
  }

  render() {
    return (
      <div className="container">
          
        <div name="request">
            
          <Formik
            initialValues={{
              image: "",
              message: "",
              type: ""
        }}
           onSubmit ={this.onSubmit} 
          >
            {(props) => (
                   <Form>
                       <fieldset className="form-group">
                           <label>Image</label>
                           <Field className = "form-control" type = "file" name ="image"></Field>
                       </fieldset>
                       
                       <fieldset className="form-group">
                           <label>Message</label>
                           <Field className = "form-control" type = "text" name ="message"></Field>
                       </fieldset>
                       <button type = "Submit" onClick={()=>{props.values.type = "encrypt"}}>Encrypt</button>
                        <button type = "submit"onClick={()=>{props.values.type = "decrypt"}} >Decrypt</button>
                   </Form>
                    
                )}
          </Formik>
        </div>
        <div name="response">
          The response is : {this.state.type === "encrypt" && this.state.image}
          {this.state.type === "decrypt" && this.state.message}
        </div>
      </div>
    );
  }
}

export default Home;
