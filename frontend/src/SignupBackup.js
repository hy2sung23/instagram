// import React, {useEffect, useState} from 'react'
// import Axios from "axios";
// import {Alert} from "antd";
// import {useHistory} from 'react-router-dom'
//
// export default function Signup() {
//     const history = useHistory();
//
//     const [inputs, setInputs] = useState({});
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false)
//     // const [validate, setValidate] = useState(false)
//
//     const onSubmit = (event) => {
//         event.preventDefault()
//         // console.log(inputs.username)
//         setErrors({})
//         setLoading(true)
//         Axios.post("http://localhost:8000/account/signup/", inputs)
//             .then(res => {
//                 history.push("/account/login")
//             })
//             .catch(error => {
//                 console.log(error)
//                 if(error.response) {
//                     setErrors({
//                         username: error.response.data.username,
//                         password: error.response.data.password
//                     })
//                 }
//             })
//             .finally(() => setLoading(false))
//     }
//
//     const onChange = (e) => {
//         const {name, value} = e.target;
//         setInputs(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }
//
//     const validate = () => {
//         return (inputs.username && inputs.username.length > 0) && (inputs.password && inputs.password.length > 0)
//     }
//
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input
//                     type="text"
//                     name={"username"}
//                     onChange={onChange}
//                 />
//                 {errors.username && <Alert type={"error"} message={errors.username}/>}
//                 <input
//                     type="password"
//                     name={"password"}
//                     onChange={onChange}
//                 />
//                 {errors.password && <Alert type={"error"} message={errors.password} />}
//                 <input type="submit" value={"회원가입"} disabled={!validate()} />
//             </form>
//         </div>
//     )
// }
//
//
