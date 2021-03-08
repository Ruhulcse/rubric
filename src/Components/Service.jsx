import React from 'react'
import "../Style.css";
function Service() {
    return (
        <div className="da-section bg-light" id="service">
           <div className="da-services">
               <div className="container text-center">
                   <div className="h3 pb-5 text-center">Our Services</div>
                   <div className="row">
                     <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                          <div className="card-body py-5">
                            <div className="text-font"><i className="pb-3 fa fa-code fa-3x"></i>
                                <p class="font-weight-bold">Web Design</p>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                          <div className="card-body py-5">
                            <div className="text-font"><i className="pb-3 fa fa-window-maximize fa-3x"></i>
                                <p class="font-weight-bold">Graphics Design</p>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                          <div className="card-body py-5">
                            <div className="text-font"><i className="pb-3 fa fa-mobile-phone fa-3x"></i>
                                <p class="font-weight-bold">App Development</p>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="card mb-3">
                          <div className="card-body py-5">
                            <div className="text-font"><i className="pb-3 fa fa-undo fa-3x"></i>
                                <p class="font-weight-bold">Application support</p>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                           </div>
                        </div>
                     </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Service
