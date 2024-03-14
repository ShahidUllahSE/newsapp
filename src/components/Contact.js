import React, { useState } from 'react'

const Contact = () => {

const [name,setName]=useState();
const [email,setEmail]=useState();
const [message,setMessage]=useState();


  return (
    <div>
<section className="mb-4" >

    <h2 className="h1-responsive font-weight-bold text-center my-4 mt-5 mb-5 p-3">Contact us</h2>

    <div className="row">

        <div className="col-md-9 mb-md-0 mx-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    <div className="col-md-6">
                        <div className="md-form mb-0 ml-5">
                            <label for="name" className="font-weight-bold">Your name</label>
                            <input type="text" id="name" value={name}  name="name" className="form-control"
                            style={{ borderWidth: '2px' }}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0 ml-5">
                            <label for="email" className="font-weight-bold">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"
                            style={{ borderWidth: '2px' }}/>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0 ml-5">
                            <label for="subject" className="font-weight-bold">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"
                            style={{ borderWidth: '2px' }}/>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form ml-5">
                            <label for="message" className='font-weight-bold'>Your message</label>
                            <textarea type="text" id="message" name="message" rows="7" className="form-control md-textarea"
                            style={{ borderWidth: '2px' }}></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left mx-5 mt-2">
                {/* <a className="btn btn-success" onclick="document.getElementById('contact-form').submit();">Send</a> */}
                <button type="button" class="btn btn-outline-success">Submit</button>

            </div>
            <div className="status"></div>
        </div>

 

    </div>

</section>

    </div>
  )
}

export default Contact
