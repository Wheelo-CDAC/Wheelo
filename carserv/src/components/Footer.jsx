import '../css/Footer.css'

export default function Footer() {
    return (
        <div className='footer text-center p-2'>
            <h5>&copy;{new Date().getFullYear()} carservicepro</h5>
            <div className="row" >
                <div className="col">
                    <h6>About</h6>
                    <p>Address:<br/>Jane Doe,<br/>
                        456 Oak Ave, Apt 7B
                        Somecity, NY 10001</p>
                    <p></p>
                    <p></p>
                </div>
                <div className="col">
                    <h6>Contact Us</h6>
                    <p>Phone:<br />9876543210</p>
                    <p>Email:<br />carservicepro@gmail.com</p>
                    <p></p>
                </div>
                <div className="col">
                    <h6>Social</h6>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}

