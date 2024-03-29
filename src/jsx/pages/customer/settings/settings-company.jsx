import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import SettingsNav from '../../../partial/customer/settings/settings-nav';



function SettingsCompany() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsNav/>                            
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Şirket Bilgileri</h4>
                                        </div>
                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Şirket İsmi</label>
                                                        <input type="text" className="form-control" placeholder="Lütfen Şirket İsminizi ve Ünvanınızı Giriniz." />
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Fatura Adresi</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Lütfen Fatura Adresinizi Giriniz" name="presentaddress" />
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label for="inputState">İl</label>
                                                        <select id="inputState" class="form-control">
                                                            <option selected>Seçiniz</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label for="inputState">İlçe</label>
                                                        <select id="inputState" class="form-control">
                                                            <option selected>Seçiniz</option>
                                                            <option>Pendik</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Vergi Dairesi</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Lütfen Vergi Dairesi'ni Giriniz"
                                                               autoComplete="off" name="dob"/>
                                                    </div>
                                                    
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Vergi Numarası</label>
                                                        <input type="text" className="form-control" placeholder="Lütfen Vergi Numarası'nı Giriniz" />
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary float-right waves-effect">Kaydet</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default SettingsCompany;