import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/shipments/detail-page-title';

import Footer2 from '../../../layout/footer2'
import RecentShipment from "../../../partial/admin/customer/recent-shipment";
import { Accordion, Tabs, Tab, Card } from 'react-bootstrap';
import AccountActivities from '../../../partial/admin/customer/account-activities';



function ShipmentDetail() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />
            




            <div className="content-body">
                <div className="container-fluid">
                    
                        
                            <div className="card-body m-auto col-8 ">

                                <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} >
                                            <span className="card-head text-primary">ID: 123456</span><div><span className=" text-primary">Gönderi Ücreti 1.200TL</span></div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse >
                                            <Card.Body></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <span className="card-head text-primary"> <i className="mr-2 align-middle ri-lg ri-user-star-fill "></i> Alıcı Bilgileri</span> <i className="fa text-primary fa-chevron-right"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <div className="mb-4">
                                                    <h5 className="caption">İsim Soyisim</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Ahmet Yazar</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Telefon No</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 0 (512) 123 12 13</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Adres</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                    </div>
                                                </div>
                                                
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <span className="card-head text-primary"><i className="mr-2 align-middle ri-lg ri-user-fill "></i>Gönderici Bilgileri</span><i className="fa text-primary fa-chevron-right"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div className="mb-4">
                                                    <h5 className="caption">İsim Soyisim</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Burak Yıldırım</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Tel No</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 0 (512) 123 12 13</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Adres</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul </h5>
                                                    </div>
                                                </div>


                                                

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <span className="card-head text-primary"><i className="mr-2 align-middle ri-lg ri-truck-fill "></i>Paket Bilgisi</span><i className="fa text-primary fa-chevron-right"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <div className="mb-4">
                                                    <h5 className="caption">Paket Boyutu</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 120x30x10(cm) - 12 Kg</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Fiyat</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 1.200TL</h5>
                                                    </div>
                                                </div>
                                                

                                                

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>



                                </Accordion>
                            </div>
                            

                        

                        
                    








                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default ShipmentDetail;