import React, {useState} from "react";

import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
import TableView from 'react-table-view';
// components
import Widget from "../../../components/Widget";
import Table from "../../dashboard/components/Table/Table";
import { Grid, Typography } from "@material-ui/core";
import Dot from '../../../components/Dot/Dot';
import { withStyles } from '@material-ui/core/styles';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts"; 
import chartsData from '../../../pages/dashboard/mock';
// data
import mock from "../../../pages/dashboard/mock";
import Donut from '../../../pages/profile/Components/DonutChart';


export default function Absence() {
  const DATA = [
    { id: 0, make: 'Honda', model: 'NSX', year: '1997' },
    { id: 1, make: 'Toyota', model: 'Supra', year: '1996' },
    { id: 2, make: 'Nissan', model: '300ZX', year: '1998' },
    { id: 0, make: 'Honda', model: 'NSX', year: '1997' },
    { id: 1, make: 'Toyota', model: 'Supra', year: '1996' },
    { id: 2, make: 'Nissan', model: '300ZX', year: '1998' }
  ];
  const styles = (theme) => ({
    legendItemContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      paddingLeft: 10
    },
    detailsWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 0,
      paddingLeft: 0,
      width: '100%',
      bottom: 5,
    },
    legendItemsContainer: {
      display: 'flex', 
      alignItems: 'center', 
      flexWrap: 'wrap'
    }
  });
  const PieChartData = [
    { name: "New", value: 400 ,color: "#536DFE" },
    { name: "In Progress", value: 300 ,color: "#FFC35F" },
    { name: "Completed", value: 300 ,color: "#3CD4A0" },
    { name: "Cancel", value: 200 ,color: "#FF5C93" }
  ];
  
 
  
  /* define the look of each column, OPTIONAL */
  let COLUMNS = {
    make: function(data) {
      return <span>What an awesome year: {data.year}</span>
    },
    model: function(data) {
      return <a>{data.model}</a>
    },
    year: function(data) {
      return (
        <p style={{textAlign: 'left', margin: '0 15px'}}>
          {`Id: ${data.id}`}
          <br />
          {`Year: ${data.year}`}
        </p>
      )
    }
  }

  return (
    <div>
    <h1>Absences</h1>
    <div style={{backgroundColor:'#E0E0E0'}}>
      
      <TableView data={DATA} columns={COLUMNS} />
      <div>
      
       
      </div>
    </div>
    </div>
  )
}

