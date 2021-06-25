import React from 'react'
import "../Components/Components.css"

function SideBar() {
    return (
        <div >

            <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
                Technologies Used
            </button>
            <div className="offcanvas offcanvas-start"  id="offcanvas" aria-labelledby="offcanvas">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvas">Technologies</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar
