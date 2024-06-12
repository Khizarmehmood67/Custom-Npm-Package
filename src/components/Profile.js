import { FaMicrosoft, FaGoogle, FaBars } from 'react-icons/fa';


const Profile = ({ handleSignOut }) => {
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="profileOffcanvas" style={{ width: "150px" }}>
                <div className="offcanvas-header">
                    <a href="#" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></a>
                </div>
                <div className="offcanvas-body">
                    <h5 className="offcanvas-title">Profile</h5>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <FaMicrosoft size={24} className="me-2" />
                            <span>Microsoft Account</span>
                        </div>
                        <button className="btn btn-link text-danger" onClick={handleSignOut}>Sign out</button>
                    </div>
                    <hr />
                    <div>
                        <input type="file" accept="image/*" className="form-control mb-2" />
                        <div className="mb-2">
                            <FaGoogle size={24} className="me-2" />
                            <span>Gmail Account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
