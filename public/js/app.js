class MyTitle extends React.Component {

    constructor(props){
        //Since we are extending the default constructor,
        //handle default activities first.
        super(props);
      
        //Extract the firstname from the prop
        let title = this.props.title
        //Please don't judge me by the way I extract the first name.
        //This is an example.
        
        //In the constructor, feel free to modify the
        //state property on the current context.
        this.state = {
            title: title
        }

    } //Look maa, no comma required in JSX based class defs!

    render() {
        return <h2><span className="badge bg-secondary">{this.state.title}</span></h2>
    }
}

class MyMain extends React.Component {
  
  constructor(props) {
    super(props);
	this.state = {rows:[],
	 formData:{
		id:'',
		firstName:'',
		lastName:'',
		age:'',
		photo:'',
	 },
	 btnVal:'Add Data',
	 hideshowAlert:{
		display:"none"
	},
	alert:''
	};
 	this.submitData = this.submitData.bind(this);
	this.getDetail = this.getDetail.bind(this);
	this.deleteData = this.deleteData.bind(this);
	this.onFieldChange = this.onFieldChange.bind(this);
 }
 componentDidMount() {
	 this.preLoadImage();
	fetch("https://simple-contact-crud.herokuapp.com/contact")
      .then(res => res.json())
      .then(
        (result) => {
		  this.setState({
             rows: result.data,
		  });
		  this.finishLoadImage();
		});	
  }
  
  preLoadImage(){
    var img = new Image();
    var imgUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif';
    img.onload = function(){
        // this gets run once the image has finished downloading
		document.getElementById('idOfImgElement').style.display = 'block';
        document.getElementById('idOfImgElement').src = imgUrl;
    }
    img.src = imgUrl; // this causes the image to get downloaded in the background
  }
  
  finishLoadImage(){
     document.getElementById('idOfImgElement').src = '';
	 document.getElementById('idOfImgElement').style.display = 'none';
  }

  myChange(event) {
	var keynum
    if(window.event) {// IE8 and earlier
       keynum = event.keyCode;
    } else if(event.which) { // IE9/Firefox/Chrome/Opera/Safari
       keynum = event.which;
    } else {
       keynum = 0;
    }

    if(keynum === 8 || keynum === 0 || keynum === 9) {
        return;
    }
    if(keynum < 46 || keynum > 57 || keynum === 47) {
        event.preventDefault();
    } 
  } 
 
	onFieldChange(fieldName) {
        return function (event) {
            this.setState({
             formData:{
				id:this.state.formData.id, 
				firstName:this.state.formData.firstName,
				lastName:this.state.formData.lastName,
				age:this.state.formData.age,
				photo:this.state.formData.photo,
				[fieldName]: event.target.value
			 }
		  });
        }
    }  
  myChange(event) {
	var keynum
    if(window.event) {// IE8 and earlier
       keynum = event.keyCode;
    } else if(event.which) { // IE9/Firefox/Chrome/Opera/Safari
       keynum = event.which;
    } else {
       keynum = 0;
    }

    if(keynum === 8 || keynum === 0 || keynum === 9) {
        return;
    }
    if(keynum < 46 || keynum > 57 || keynum === 47) {
        event.preventDefault();
    } 
  } 
  
 
  getDetail(data,event) {
	  window.scrollTo(0, 0);
        this.setState({
             formData:{
				id:data.id, 
				firstName:data.firstName,
				lastName:data.lastName,
				photo:data.photo,
				age:data.age
			 },
			 btnVal:'Edit Data',
			 name: data.firstName
		  });
  }
  deleteData(id,event) {
	  fetch('https://simple-contact-crud.herokuapp.com/contact/'+id, {
		  method: 'delete',
		  headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			dataType: "jsonp",
			body: JSON.stringify(id)
				}).then(res => res.json())
			  .then(
				(result) => {
				  this.componentDidMount();
	});	
  }
  
  hasWhiteSpace(s) {
    return /\s/g.test(s);
  }
  
  validURL(str) {
   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);  
  }
  
  submitData(event) {
	event.preventDefault();  
	var formData = {};
	let theUrl;
	let theMethod;
	var cekId = event.target.theId.value;
	this.setState({
             alert: "",
			 hideshowAlert:{
				display:"none"
			},
		  });
	if(this.hasWhiteSpace(event.target.firstName.value)){
		this.setState({
             alert: "First Name can not contain white space",
			 hideshowAlert:{
				display:"block"
			},
		  });
		  return false;
	}
	
	if(this.hasWhiteSpace(event.target.lastName.value)){
		this.setState({
             alert: "Last Name can not contain white space",
			 hideshowAlert:{
				display:"block"
			},
		  });
		  return false;
	}
	
	if(parseInt(event.target.age.value) >= 100){
		
		this.setState({
             alert: "Age must be equal or less than 100",
			 hideshowAlert:{
				display:"block"
			},
		  });
		  return false;
	}
	
	if(!this.validURL(event.target.photo.value)){
		this.setState({
             alert: "Photo link is not valid",
			 hideshowAlert:{
				display:"block"
			},
		  });
		  return false;
	}
	
	formData.firstName = event.target.firstName.value;
	formData.lastName = event.target.lastName.value;
	formData.age = event.target.age.value;
	formData.photo = event.target.photo.value;
	
	if(cekId){
		theUrl = "https://simple-contact-crud.herokuapp.com/contact/"+cekId;
		theMethod = "PUT"; 
	}
	else{
		theUrl = "https://simple-contact-crud.herokuapp.com/contact";
		theMethod = "post";
	}
	this.setState({
             formData:{
				id:'', 
				firstName:'',
				lastName:'',
				age:'',
				photo:''
			 },
			 btnVal:'Add Data'
		  });
	fetch(theUrl, {
		  method: theMethod,
		  headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			dataType: "jsonp",
			body: JSON.stringify(formData)
				}).then(res => res.json())
			  .then(
				(result) => {
				  this.componentDidMount();
	});	
	
	
	event.preventDefault();
  }
	render() {
    return (
	<div>
	<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={this.showMenuSearch} >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div>
     <form className="row g-3" onSubmit={this.submitData} >
	 <h2><span className="badge bg-secondary mt-3">Form Contact</span></h2>
	 <div className="alert alert-danger" style={this.state.hideshowAlert} role="alert">
	     {this.state.alert}
	</div>
	 <div className="col-md-4">
    <label htmlFor="inputSearch" className="form-label">First Name</label>
	<input type="hidden" className="form-control" id="theId" value={this.state.formData.id || ''} onChange={this.onFieldChange('id').bind(this)}  name = "theId" required/>
	<input type="text" className="form-control" onChange={this.onFieldChange('firstName').bind(this)} value={this.state.formData.firstName || ''} name = "firstName" required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputSearch" className="form-label">Last Name</label>
    <input type="text" className="form-control" onChange={this.onFieldChange('lastName').bind(this)} id="lastName" value={this.state.formData.lastName || ''} name = "lastName" required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputSearch" className="form-label">Age</label>
    <input type="number" className="form-control" onChange={this.onFieldChange('age').bind(this)} id="age" value={this.state.formData.age || ''} onKeyDown={this.myChange} id="age" name = "age" required/>
  </div> 
  <div className="col-md-12 m">
    <div className="col-md-8">
    <label htmlFor="inputSearch" className="form-label">Image Link</label>
   <input type="text" className="form-control" onChange={this.onFieldChange('photo').bind(this)} value={this.state.formData.photo || ''} id="photo" name = "photo" required/>
  </div>  
  </div> 
  <div className="col-md-2">
    <button type="submit" className="form-control btn btn-primary mb-4 ">{this.state.btnVal}</button>
	<img id="idOfImgElement" width="130" height="130"/>
  </div>
</form>
<div className="row">
          <div className="col">
            <table className="table table-dark">
			   <thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">Action</th>
				  <th scope="col">Photo</th>
				  <th scope="col">First Name</th>
				  <th scope="col">Last Name</th>
				  <th scope="col">Age</th>
				</tr>
			  </thead>
               <tbody>
			    {
				   
				   this.state.rows.map((k, v) => {	
                   		
				   return (
				   <tr key={String(k) + String(v)}><th scope="col">{v+1}</th>
				   <th scope="col"><h5><span onClick={() => this.getDetail(k)} className="badge bg-success m-1"><svg width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg> Edit</span><span onClick={() => this.deleteData(k.id)} className="m-1 badge bg-danger"><svg width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Delete</span></h5></th>
				   <th scope="col"> <img src={k.photo} alt={k.firstName+" "+k.lastName} width="130" height="130"/> </th>
				   <th scope="col">{k.firstName}</th>
				   <th scope="col">{k.lastName}</th>
				   <th scope="col">{k.age}</th>
				   </tr>) 
				})}
               </tbody>
              </table>
          </div>
		 
</div>
</div>
</div>
    );
  }
}

var theTitle = "Contact";

ReactDOM.render(<MyMain/>, 
                document.getElementById('mymain'));		
document.title=theTitle;									