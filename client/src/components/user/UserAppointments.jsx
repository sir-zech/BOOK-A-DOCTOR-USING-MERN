import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';

const UserAppointments = () => {
  const [userid, setUserId] = useState();
  const [type, setType] = useState(false); // false = user, true = doctor
  const [userAppointments, setUserAppointments] = useState([]);
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [statusUpdated, setStatusUpdated] = useState(false); // Used to trigger re-fetch

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      const { _id, isdoctor } = user;
      setUserId(_id);
      setType(isdoctor);
    } else {
      alert('No user to show');
    }
  };

  const getUserAppointment = async () => {
    try {
      console.log("Fetching user appointments for userId:", userid); // Debugging log
      const res = await axios.get('http://localhost:8001/api/user/getuserappointments', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { userId: userid },
      });
      if (res.data.success) {
        console.log("User Appointments Fetched Successfully:", res.data.data); // Debugging log
        setUserAppointments(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching user appointments:", error); // More specific error log
      message.error('Something went wrong');
    }
  };

  const getDoctorAppointment = async () => {
    try {
      console.log("Fetching doctor appointments for userId:", userid); // Debugging log
      const res = await axios.get('http://localhost:8001/api/doctor/getdoctorappointments', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { userId: userid },
      });
      if (res.data.success) {
        console.log("Doctor Appointments Fetched Successfully:", res.data.data); // Debugging log
        setDoctorAppointments(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching doctor appointments:", error); // More specific error log
      message.error('Something went wrong');
    }
  };

  const handleStatus = async (userid, appointmentId, status) => {
    try {
      const res = await axios.post('http://localhost:8001/api/doctor/handlestatus', {
        userid,
        appointmentId,
        status,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (res.data.success) {
        console.log("Status updated successfully:", status); // Debug log
        message.success(res.data.message);
        
        // Trigger a re-fetch of appointments
        setStatusUpdated(!statusUpdated); // Toggle to re-trigger useEffect
      }
    } catch (error) {
      console.error("Error updating status:", error); // More specific error log
      message.error('Something went wrong');
    }
  };

  const handleDownload = async (url, appointId) => {
    try {
      const res = await axios.get('http://localhost:8001/api/doctor/getdocumentdownload', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { appointId },
        responseType: 'blob'
      });
      if (res.data) {
        const fileUrl = window.URL.createObjectURL(new Blob([res.data], { "type": "application/pdf" }));
        const downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);
        downloadLink.setAttribute("href", fileUrl);

        const fileName = url.split("/").pop(); // Extract the file name
        downloadLink.setAttribute("download", fileName);
        downloadLink.style.display = "none";
        downloadLink.click();
      } else {
        message.error(res.data.error);
      }
    } catch (error) {
      console.error("Error downloading document:", error); // More specific error log
      message.error('Something went wrong');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (userid) {
      if (type === true) {
        getDoctorAppointment();
      } else {
        getUserAppointment();
      }
    }
  }, [type, userid, statusUpdated]); // Re-fetch on statusUpdated toggle

  return (
    <div>
      <h2 className='p-3 text-center'>All Appointments</h2>
      <Container>
        {type === true ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Appointment</th>
                <th>Phone</th>
                <th>Document</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctorAppointments.length > 0 ? (
                doctorAppointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.userInfo?.fullName || "No Name"}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.userInfo?.phone || "No Phone"}</td>
                    <td>
                      {appointment.document?.path && appointment.document.filename ? (
                        <Button variant='link' onClick={() => handleDownload(appointment.document.path, appointment._id)}>
                          {appointment.document.filename}
                        </Button>
                      ) : (
                        <span>No document</span>
                      )}
                    </td>
                    <td>{appointment.status}</td>
                    <td>
                      {appointment.status !== 'approved' && (
                        <Button onClick={() => handleStatus(appointment.userInfo?._id, appointment._id, 'approved')}>
                          Approve
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <Alert variant="info">
                      <Alert.Heading>No Appointments to show</Alert.Heading>
                    </Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Date of Appointment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userAppointments.length > 0 ? (
                userAppointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.docName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>
                    <Alert variant="info">
                      <Alert.Heading>No Appointments to show</Alert.Heading>
                    </Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default UserAppointments;
