import { useState } from "react";

const LoginForm = () => {
    const [form, setForm] = useState({userName: '', email: '',password:''});
    

const onChange = (event) =>{
    let fieldName = event.target.getAttribute('state_field');
    let fieldType = event.target.getAttribute('state_field_type');
    
    setForm({...form , [fieldName] : event.target.value});
}
const onSubmit = (event)=>{
    event.preventDefault();
    console.log('form : ', form);
    let result = sendData(form);
    if(result){
        setForm({userName: '', email: '', password: ''});
    }

}


const sendData = (data)=>{
    console.log('data send successfully');
    return true;
}

    return (
        <>
       
            <form onSubmit={onSubmit} >
                
                <div>
                    <p>{form.userName}</p>
                    <label>userName:
                        <input
                            state_field="userName"
                            state_field_type = "string"
                            name="txt_userName"
                            type="text"
                            onChange={onChange}
                            value={form.userName}
                        />
                    </label>
                </div>

                <div>
                    <p>{form.email}</p>
                    <label>Email:
                        <input
                            state_field="email"
                            state_field_type = "email"
                            name="txt_email"
                            type="text"
                            onChange={onChange}
                            value={form.email}
                        />
                    </label>
                </div>

                <div>
                    <p>{form.password}</p>
                    <label>password:
                        <input
                            state_field="password"
                            state_field_type="string"
                            name="txt_pass"
                            type="password"
                            onChange={onChange}
                            value={form.password}
                        />
                    </label>
                </div>

                <button>gönder</button>
            </form>
        </>
    )

}

export default LoginForm;