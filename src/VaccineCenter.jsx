import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

const VaccineCenter = ({ data, i }) => {
  return (
    <div style={{border:"1px solid black",padding:"5%"}}>
      <ListItem>
        <ListItemText>
           
          <h4>
            {" "}
            {i + 1}). Center Name : {data.name}, Center Id : {data.center_id}
          </h4>
          <p>
            Address : {data.address}, {data.district_name},{data.state_name}
          </p>
          <p>Block Name: {data.block_name}</p>
          <p>
            Timing : {data.from} A.M - {data.to} P.M
          </p>
          <div>
            <h4>Sessions</h4>
            <ul>
              {data?.sessions?.map((item, i) => (
                <div>
                    <p>Date:{item.date}</p>
                    <p>Vaccine: <b>{item.vaccine}</b></p>
                    <p>Available Capacity : {item.available_capacity}</p>
                    <p>Available Vaccine Doses 1 : {item.available_capacity_dose1}</p>
                    <p>Available Vaccine Doses 2 : {item.available_capacity_dose2}</p>
                    <p>Minimum age limit : {item.min_age_limit}</p>
                    <p>Slots: {item?.slots.map((x)=><p>{x}</p>)}</p>
                    <p>**************************</p>
                </div>
              ))}
            </ul>
          </div>
        </ListItemText>
      </ListItem>
    </div>
  );
};

export default VaccineCenter;
