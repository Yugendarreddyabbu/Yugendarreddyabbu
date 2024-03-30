import React from "react";

const Advisories = () => {
    const handleUploadClick = () => {
        // Trigger file picker
        document.getElementById('fileInput').click();
    };

    const handleFileInputChange = (event) => {
        // Handle file selection logic here
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);
    };
    return (
        <div>
            <div class="card radius-10 w-100">
                <div class="card-body" style={{ paddingTop: "0px", fontSize: "13px" }}>
                    <div class="table-responsive mt-2">
                        <table class="table align-middle mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>Vehicle No</th>
                                    <th>Type of Car</th>
                                    <th>Customer Name</th>
                                    <th>Mail ID</th>
                                    <th>Contact Number</th>
                                    <th>Schedule Date and Time</th>
                                    <th>Service</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DAU 1518</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box">
                                                <img src="assets/images/mercedes.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1">Mercedes-Benz S-Class</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Anderson</td>
                                    <td>Anderson@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>666-881-9919</span></td>
                                    <td>Apr 8, 2021 18:21:30</td>
                                    <td>General Service</td>
                                    {/* <td><span class="badge alert-primary">Confirmed</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                                <tr>
                                    <td>A193958</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box ">
                                                <img src="assets/images/range.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1" style={{ paddingLeft: "10px" }}>Range Rover</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Williams</td>
                                    <td>Williams@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>789-665-1119</span></td>
                                    <td>Apr 9, 2021 13:16:19 </td>
                                    <td>Engine Repair</td>
                                    {/* <td><span class="badge alert-primary">Confirmed</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                                <tr>
                                    <td>P0198602</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box">
                                                <img src="assets/images/polo.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1">Volkswagen Polo</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Smith</td>
                                    <td>Smith@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>944-144-1090</span></td>
                                    <td>Apr 10, 2021 11:22:33</td>
                                    <td>GearBox Repair</td>
                                    {/* <td><span class="badge alert-success">Completed</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                                <tr>
                                    <td>DMC 4583</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box ">
                                                <img src="assets/images/ferrari.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1">Ferrari 488 Spyder</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jhon</td>
                                    <td>jhon@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>888-999-1111</span></td>
                                    <td>Apr 11, 2021 10:11:23</td>
                                    <td>Electric Repair</td>
                                    {/* <td><span class="badge alert-warning">In Progress</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                                <tr>
                                    <td>BA 96857</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box">
                                                <img src="assets/images/audi.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1">Audi A3 Cabriolet</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Joe Root</td>
                                    <td>root@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>634-567-2345</span></td>
                                    <td>Apr 15, 2021 16:23:55</td>
                                    <td>Brake Unit Repair</td>
                                    {/* <td><span class="badge alert-danger">Cancelled</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                                <tr>
                                    <td>CA 12123</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="product-box ">
                                                <img src="assets/images/baleno.png" alt="" width="50px" />
                                            </div>
                                            <div class="product-info">
                                                <h6 class="product-name mb-1" style={{ paddingLeft: "30px" }}>Baleno</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Klaseen</td>
                                    <td>Klaseen@gmail.com</td>
                                    <td><span style={{ fontSize: "11px", fontWeight: "500" }}>721-674-2727</span></td>
                                    <td>Apr 18, 2021 10:13:23</td>
                                    <td>Suspension Repair</td>
                                    {/* <td><span class="badge alert-warning">In Progress</span></td> */}
                                    <td>
                                        <a className='mfp-open' data-title="Call" onClick={handleUploadClick}>
                                            <i className='icon icon-upload'></i>
                                        </a>
                                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                    </td>
                                    <td> <a> <i className="icon icon-envelope"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advisories;