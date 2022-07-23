import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const history = useNavigate();
    const [click,setClick]=useState(false);

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    function handleClick(value){
        setClick(!click);
    }
    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const {email, password } = inpval;

        if (email === "") {
            toast.error('email field is required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } 
        else if (password === "") {
            toast.error('password field is required',{
                position: "top-center",
            });
        } 
        else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        
        <div style={{display:"flex"}}>
                <div style={{background:"#1d252c ",height:"720px",width:"50%"}}>
                    <img style={{padding:"220px 50px 0px 50px"}}
                    src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
                    />
                </div>
{/* ....................................................................................................................................... */}
                <div style={{width:"50%",display:"flex",flexDirection:"column",textAlign:"center",padding:"2.5rem"}}>
                    <div >
                        <img style={{height:"15px"}}
                        src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
                        />
                        <br/>
                        <br/>
                        <div style={{border:"0.5px solid grey",margin:"0px 180px 0px 200px",cursor:"pointer",borderRadius:"5px",padding:"0.3rem"}}>
                            <img style={{height:"20px"}}
                            src="data:image/png;base64,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"
                            />
                            <b style={{fontSize:"12px"}}>  Sign up with Google</b>
                        </div>
                        <br/>
                        <div style={{border:"0.5px solid grey",margin:"0px 180px 0px 200px",cursor:"pointer",borderRadius:"5px",padding:"0.3rem"}}>
                            <img style={{height:"20px"}}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC"
                            />
                            <b style={{fontSize:"12px"}}>  Sign up with Microsoft</b>
                        </div>
                        <br/>
                        <div style={{border:"0.5px solid grey",margin:"0px 180px 0px 200px",cursor:"pointer",borderRadius:"5px",padding:"0.3rem",}}>
                            <img style={{height:"20px"}}
                            src="data:image/png;base64,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"
                            />
                            <b style={{fontSize:"12px"}}>  Sign up with Apple</b>
                        </div>
                    </div>
                    <div className="container mt-3">
                        <section className='d-flex justify-content-between'>
                            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                                <h6>Sign up with your email</h6>
                                <br/>
                                <Form >
                                    
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" style={{marginLeft:"170px"}}>

                                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Email" style={{textAlign:"center"}}/>
                                    </Form.Group>

                                

                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword" style={{marginLeft:"170px"}}>

                                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{textAlign:"center"}}/>
                                    </Form.Group>

                                    <div>
                                    <input type="checkBox" onClick={handleClick} value={click}></input>
                                    <p style={{fontSize:"12px"}}>I agree with the <b style={{textDecoration: "underline",fontSize:"12px"}}>Terms of service & Privacy Policy</b></p>
                                    </div>


                                    <Button disabled={!click} variant="primary" className='col-lg-6' onClick={addData} style={{ background: "Black" }} type="submit">
                                        SIGN UP
                                    </Button>
                                </Form>
                                <NavLink to="/login" style={{color:"black",fontSize:"12px"}}>Back to login</NavLink>
                                <br/>
                                <NavLink to="" style={{color:"black",fontSize:"12px"}}>Terms of service / Privacy Policy</NavLink>
                            </div>
                            
                        </section>
                        <ToastContainer />
                    </div>
                </div>


        </div>
    )
}

export default Signup