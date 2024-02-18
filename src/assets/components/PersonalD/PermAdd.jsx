import RegiNavBar from '../VehicleReg/RegistervlNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Home/Footer';
import { useState } from 'react';

const permantAd = () => {

    const [formData, setFormData] = useState({
        permanentAddressStreet: '',
        permanentAddressCity: '',
        permanentAddressState: '',
        permanentAddressCountry: '',
        permanentAddressZipCode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }
    const myStyles = {
        marginTop: "40px", marginBottom: "40px", marginRight: "40px", marginLeft: "40px"
    };

    return (
        <>
            <RegiNavBar />

            <h4 style={myStyles}>Permanent Address:</h4>
            <div className='container mb-3'>
                <div className="row g-3">

                    <div className="col-12">
                        <label htmlFor="permanentAddressStreet" className="form-label">Street</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressStreet"
                            placeholder="1234 Main St"
                            value={formData.permanentAddressStreet}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressCity" className="form-label">City</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressCity"
                            value={formData.permanentAddressCity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressState" className="form-label">State</label>
                        <select name="permanentAddressState" className="form-select" value={formData.permanentAddressState} onChange={handleChange}
                            required>
                            <option selected>Choose From Below</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttarakhand</option>
                            <option>Uttar Pradesh</option>
                            <option>West Bengal</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressZipCode" className="form-label">Zip-Code</label>
                        <input type="text" className="form-control"
                            name="permanentAddressZipCode"
                            value={formData.permanentAddressZipCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="permanentAddressCountry" className="form-label">Country</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressCountry"
                            value={formData.permanentAddressCountry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>

                        <div className="col-2">
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default permantAd;