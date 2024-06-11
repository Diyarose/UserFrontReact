import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewUser = () => {
    const [data,setData]=useState(
        []
    )
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">bloodgrp</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Pincode</th>
                                            <th scope="col">District</th>
                                            <th scope="col">Place</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Username</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.dob}</td>
                                                <td>{value.bgroup}</td>
                                                <td>{value.mob}</td>
                                                <td>{value.address}</td>
                                                <td>{value.pin}</td>
                                                <td>{value.district}</td>
                                                <td>{value.place}</td>
                                                <td>{value.email}</td>
                                                <td>{value.uname}</td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser