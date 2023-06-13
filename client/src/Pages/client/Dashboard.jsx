import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div>
      <h1>Dashboard</h1>
      <h6>Good day, {user.first_name}</h6>

      {/* <iframe
        src="https://api.clixlo.com/widget/form/gXI6I2fe3nn0BMk4fHoS"
        style={{width:'100%',height:'100%',border:'none',borderRadius:'4px'}}
        id="inline-gXI6I2fe3nn0BMk4fHoS"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form - Sara"
        data-height="573"
        data-layout-iframe-id="inline-gXI6I2fe3nn0BMk4fHoS"
        data-form-id="gXI6I2fe3nn0BMk4fHoS"
        title="Contact Form - Sara"
      >
      </iframe> */}
    </div>
  )
}

export default Dashboard;