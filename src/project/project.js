// import * as React from "react";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import "./project.css";

const columns = [
  { field: "id", headerName: "S.No", width: 70, headerClassName: "columns" },
  {
    field: "projectTitle",
    headerName: "Project Title",
    width: 250,
    headerClassName: "columns",
  },
  {
    field: "userName",
    headerName: "UserName",
    width: 250,
    headerClassName: "columns",
  },
  {
    field: "categoryType",
    headerName: "Category Type",
    width: 250,
    headerClassName: "columns",
  },
];

export default function Projects() {
  const [list, setList] = useState(null);

  useEffect(async () => {
    axios
      .get("http://localhost:3001/api/v1/projects/getProjects", {
        headers: {
          authorization: "Basic",
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data.data.data);
        if (data.data.statusCode === 200) {
          setList(data.data.data);
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h1>Project Details</h1>
      <div className="container">
        <div className="table">
          <DataGrid
            Background="Red"
            className="gridTable"
            rows={list}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { Box, Button, Container, Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { blue, lightBlue } from "@material-ui/core/colors";
// // import { useAdminDispatch } from '../../provider'
// import Tooltip from "@material-ui/core/Tooltip";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import Snackbar from "@material-ui/core/Snackbar";
// // import MuiAlert from '@material-ui/lab/Alert';
// import Backdrop from "@material-ui/core/Backdrop";
// import { createStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Divider from "@material-ui/core/Divider";
// // import { getDate } from 'date-fns';
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import "./login.css";

// function Alert(props) {
//   // return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStylesforbackdrop = makeStyles((theme) =>
//   createStyles({
//     backdrop: {
//       zIndex: theme.zIndex.drawer + 1,
//       color: "#fff",
//     },
//   })
// );

// const useStyles = makeStyles({
//   table: {
//     // widht: 300,
//     // height: 300,
//     // // minWidth: 650,
//     // fontWeight: "bold",
//     // margin: 50,
//   },
//   tableHead: {
//     // fontWeight: "bold",
//     // width: 500,
//     // backgroundColor: "blue",
//     // border:2
//   },
//   tableBody: {
//     // fontWeight: 'bold',
//     // width: 200,
//     // width: 500,
//   },
//   tableRow: {
//     // fontWeight: "bold",
//   },
//   lightblue: {
//     // backgroundColor:lightBlue
//   },
//   btncolor: {
//     // borderRadius: 0,
//     // color: "white",
//     // background: "#1890ff",
//     // "&:hover": {
//     //   backgroundColor: "#40a9ff !important",
//     // },
//   },
//   formControl: {
//     //margin: theme.spacing(1),
//     // minWidth: 120,
//     // widht: 200,
//     // // marginLeft: 50,
//     // display: "flex",
//   },
//   Box: {
//     //margin: theme.spacing(1),
//     // minWidth: 120,
//     // width: 500,
//     // marginLeft: 50,
//     // display: "flex",
//   },
//   typesDropDown: {
//     // width: 200,
//     // marginRight: 20,
//     // height: 50
//   },

//   selectEmpty: {
//     // marginTop: 10,
//   },
//   success: {
//     // color: "#1890ff",
//   },
//   deleteBox: {
//     // width: 300,
//     // height: 100,
//     // fontWeight: "bold",
//     // alignItems: "center",
//   },
//   editBox: {
//     // width: 500,
//     // height: 300,
//     // fontWeight: "bold",
//   },
//   editBoxTitle: {
//     // fontWeight: "bold",
//     // fontSize: 20,
//     // display: "flex",
//   },
// });

// export default function ConfigDB() {
//   const classes = useStyles();
//   const [alertbox, setalertbox] = useState({ open: false, type: "", msg: "" });
//   const [backdrop, setbackdrop] = useState(false);
//   const [image, setimage] = useState({
//     open: false,
//     imageurl: "",
//   });
//   const [rowdata, setrowdata] = React.useState([]);
//   const [configTypes, setConfigTypes] = React.useState([]);
//   const [loaded, setloaded] = useState(false);
//   // const [loading, setbackdrop] = useState(false);
//   const [confirmdelete, setconfirmDelete] = useState({ open: false, id: "" });
//   const [editData, setEditData] = useState({ type: "", key: "", value: "" });
//   const [confirmEdit, setconfirmEdit] = useState({ open: false, id: "" });
//   const [confirmAdd, setconfirmAdd] = useState({ open: false, id: "" });

//   useEffect(() => {
//     getdata("")
//       .then((res) => {
//         // SetAllClientPartner(res.data.result.data);
//         setrowdata(res.data.result.data);
//         setConfigTypes(res.data.result.types);
//         console.log(res.data.result.configTypes, "config data");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   // const { SetAllClientPartner, SetID } = useAdminDispatch();
//   // SetID('');

//   const getdata = async (type) => {
//     if (type === "All") {
//       type = "";
//     }
//     const responsedata = await axios.post(
//       "https://us-central1-wsl-multitenancy-dev-ac13b.cloudfunctions.net/getConfig",
//       { data: { type: type } },
//       {
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     );

//     setloaded(true);
//     return responsedata;
//   };

//   const deleteData = async (params) => {
//     //console.log("params", params)
//     setconfirmDelete({ open: false, id: "" });
//     setbackdrop(true);
//     const responsedata = await axios.post(
//       "https://us-central1-wsl-multitenancy-dev-ac13b.cloudfunctions.net/deleteConfig",
//       { data: params },
//       {
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     );
//     console.log(responsedata);
//     if (responsedata.status === 200) {
//       setconfirmDelete({ open: false, id: "" });
//       getdata("")
//         .then((res) => {
//           // SetAllClientPartner(res.data.result.data);
//           setbackdrop(false);
//           setrowdata(res.data.result.data);
//         })
//         .catch((err) => {
//           console.log(err);
//           setbackdrop(false);
//         });
//     }
//   };

//   const updateData = async (params) => {
//     setconfirmEdit({ open: false, id: "" });
//     setbackdrop(true);
//     const responsedata = await axios.post(
//       "https://us-central1-wsl-multitenancy-dev-ac13b.cloudfunctions.net/updateConfig",
//       { data: params },
//       {
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     );
//     console.log(responsedata);

//     if (responsedata.status === 200) {
//       setconfirmEdit({ open: false, id: "" });
//       getdata("")
//         .then((res) => {
//           setbackdrop(false);
//           // SetAllClientPartner(res.data.result.data);
//           setrowdata(res.data.result.data);
//         })
//         .catch((err) => {
//           console.log(err);
//           setbackdrop(false);
//         });
//     }
//   };

//   const addData = async (params) => {
//     setconfirmAdd({ open: false, id: "" });
//     setbackdrop(true);
//     const responsedata = await axios.post(
//       "https://us-central1-wsl-multitenancy-dev-ac13b.cloudfunctions.net/insertConfig",
//       { data: params },
//       {
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     );
//     console.log(responsedata);
//     if (responsedata.status === 200) {
//       setconfirmAdd({ open: false, id: "" });
//       getdata("")
//         .then((res) => {
//           // SetAllClientPartner(res.data.result.data);
//           setbackdrop(false);
//           setrowdata(res.data.result.data);
//         })
//         .catch((err) => {
//           console.log(err);
//           setbackdrop(false);
//         });
//     }
//   };

//   console.log("editData", editData);
//   const forbackdrop = useStylesforbackdrop();
//   function ConfirmAlertBox() {
//     return (
//       <>
//         <Dialog
//           open={confirmdelete.open}
//           onClose={() => setconfirmDelete({ open: false, id: "" })}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent className={classes.deleteBox}>
//             <DialogContentText>
//               Do you really want to Delete it?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={() => setconfirmDelete({ open: false, id: "" })}
//               color="primary"
//             >
//               Cancel
//             </Button>
//             <Button color="secondary" onClick={() => deleteData(editData)}>
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </>
//     );
//   }

//   const handleChangeType = (event) => {
//     setEditData({ ...editData, type: event.target.value });
//   };

//   const handleChangeValue = (event) => {
//     setEditData({ ...editData, value: event.target.value });
//   };

//   const handleChangeKey = (event) => {
//     setEditData({ ...editData, key: event.target.value });
//   };

//   const selectConfigType = (event) => {
//     setbackdrop(true);
//     setEditData({ ...editData, type: event.target.value });
//     console.log("editData", editData);
//     getdata(event.target.value)
//       .then((res) => {
//         // SetAllClientPartner(res.data.result.data);
//         setrowdata(res.data.result.data);
//         setbackdrop(false);
//         console.log(res.data.result.data, "config data");
//       })
//       .catch((err) => {
//         console.log(err);
//         setbackdrop(false);
//       });
//   };

//   function ConfirmAddBox() {
//     return <></>;
//   }

//   return (
//     <>
//       <Box>
//         <Snackbar
//           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//           open={alertbox.open}
//           autoHideDuration={6000}
//           onClose={() => setalertbox({ oepn: false, type: "", msg: "" })}
//         >
//           <Alert
//             onClose={() => setalertbox({ oepn: false, type: "", msg: "" })}
//             severity={alertbox.type}
//           >
//             {alertbox.msg}
//           </Alert>
//         </Snackbar>
//         <Backdrop className={forbackdrop.backdrop} open={backdrop}>
//           <CircularProgress />
//         </Backdrop>

//         <ConfirmAlertBox />
//         <ConfirmAddBox />
//         <div>
//           <table>
//             <tr>
//               <th>S.No</th>
//               <th>Project Title</th>
//               <th>UserName</th>
//               <th>Category Type</th>
//               <th>Options</th>
//             </tr>
//             <tr>
//               {loaded ? (
//                 !rowdata.length ? (
//                   <tr>
//                     <td align="center" colSpan={9}>
//                       No Data Found
//                     </td>
//                   </tr>
//                 ) : (
//                   rowdata.map((row) => (
//                     <tr key={row.id}>
//                       <td className={classes.tableBody}>{row.type}</td>
//                       <td className={classes.tableBody}>{row.key}</td>
//                       <td className={classes.tableBody}>{row.value}</td>
//                       <td className={classes.tableBody}>{row.value}</td>

//                       <td align="center">
//                         {/* <Link to={'/dashboard/tenantform'}> */}
//                         <IconButton
//                           aria-label="edit"
//                           onClick={() => {
//                             setEditData(row);
//                             setconfirmEdit({ open: true, id: "" });
//                           }}
//                         >
//                           <EditIcon className={classes.success} />
//                         </IconButton>
//                         {/* </Link> */}
//                         <IconButton
//                           aria-label="delete"
//                           onClick={() => {
//                             setEditData(row);
//                             setconfirmDelete({ open: true, id: row.id });
//                           }}
//                         >
//                           <DeleteIcon color="secondary" />
//                         </IconButton>
//                       </td>
//                     </tr>
//                   ))
//                 )
//               ) : (
//                 <>
//                   <TableRow>
//                     <TableCell align="center" colSpan={9}>
//                       <CircularProgress />
//                     </TableCell>
//                   </TableRow>
//                 </>
//               )}
//             </tr>
//           </table>
//         </div>
//         <Container>
//           <Grid>
//             <Container>
//               <TableContainer component={Paper}>
//                 <Table className={classes.table} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell className={classes.tableHead}>S.No</TableCell>
//                       <TableCell className={classes.tableHead}>
//                         Project Title
//                       </TableCell>
//                       <TableCell className={classes.tableHead}>
//                         UserName
//                       </TableCell>
//                       <TableCell align="center" className={classes.tableHead}>
//                         Category Type
//                       </TableCell>
//                       <TableCell align="center" className={classes.tableHead}>
//                         Options
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {loaded ? (
//                       !rowdata.length ? (
//                         <TableRow>
//                           <TableCell align="center" colSpan={9}>
//                             No Data Found
//                           </TableCell>
//                         </TableRow>
//                       ) : (
//                         rowdata.map((row) => (
//                           <TableRow key={row.id}>
//                             <TableCell className={classes.tableBody}>
//                               {row.type}
//                             </TableCell>
//                             <TableCell className={classes.tableBody}>
//                               {row.key}
//                             </TableCell>
//                             <TableCell className={classes.tableBody}>
//                               {row.value}
//                             </TableCell>
//                             <TableCell className={classes.tableBody}>
//                               {row.value}
//                             </TableCell>

//                             <TableCell align="center">
//                               {/* <Link to={'/dashboard/tenantform'}> */}
//                               <IconButton
//                                 aria-label="edit"
//                                 onClick={() => {
//                                   setEditData(row);
//                                   setconfirmEdit({ open: true, id: "" });
//                                 }}
//                               >
//                                 <EditIcon className={classes.success} />
//                               </IconButton>
//                               {/* </Link> */}
//                               <IconButton
//                                 aria-label="delete"
//                                 onClick={() => {
//                                   setEditData(row);
//                                   setconfirmDelete({ open: true, id: row.id });
//                                 }}
//                               >
//                                 <DeleteIcon color="secondary" />
//                               </IconButton>
//                             </TableCell>
//                           </TableRow>
//                         ))
//                       )
//                     ) : (
//                       <>
//                         <TableRow>
//                           <TableCell align="center" colSpan={9}>
//                             <CircularProgress />
//                           </TableCell>
//                         </TableRow>
//                       </>
//                     )}
//                   </TableBody>
//                   {/* {loading?<CircularProgress color="primary" />: null} */}
//                 </Table>
//               </TableContainer>
//             </Container>
//           </Grid>
//         </Container>

//         {/* <ConfirmEditBox /> */}
//         <Dialog
//           open={confirmEdit.open}
//           onClose={() => setconfirmEdit({ open: false, id: "" })}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent className={classes.editBox}>
//             <DialogContentText className={classes.editBoxTitle}>
//               Edit Configs
//             </DialogContentText>
//             <Divider />
//             <TableContainer component={Paper}>
//               <Table className={classes.table} aria-label="simple table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Type</TableCell>
//                     <TableCell>{editData.type}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Key</TableCell>
//                     <TableCell>{editData.key}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Value</TableCell>
//                     <TableCell>
//                       <TextField
//                         id="standard-basic"
//                         value={editData.value}
//                         onChange={handleChangeValue}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//               </Table>
//             </TableContainer>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={() => setconfirmEdit({ open: false, id: "" })}
//               color="primary"
//             >
//               Cancel
//             </Button>
//             <Button color="secondary" onClick={() => updateData(editData)}>
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* add config */}
//         <Dialog
//           open={confirmAdd.open}
//           onClose={() => setconfirmAdd({ open: false, id: "" })}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent className={classes.editBox}>
//             <DialogContentText className={classes.editBoxTitle}>
//               Add Config
//             </DialogContentText>
//             <Divider />
//             <TableContainer component={Paper}>
//               <Table className={classes.table} aria-label="simple table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Type</TableCell>
//                     <TableCell>
//                       <FormControl className={classes.formControl}>
//                         <InputLabel id="demo-simple-select-label">
//                           Types
//                         </InputLabel>
//                         <Select
//                           labelId="demo-simple-select-label"
//                           id="demo-simple-select"
//                           onChange={handleChangeType}
//                           disabled={!configTypes?.length}
//                           className={classes.typesDropDown}
//                         >
//                           {configTypes?.map((item, index) => {
//                             return (
//                               item !== "All" && (
//                                 <MenuItem key={index} value={item}>
//                                   {item}
//                                 </MenuItem>
//                               )
//                             );
//                           })}
//                         </Select>
//                       </FormControl>
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Key</TableCell>
//                     <TableCell>
//                       <TextField
//                         id="standard-basic"
//                         onChange={handleChangeKey}
//                       />
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell className={classes.tableRow}>Value</TableCell>
//                     <TableCell>
//                       <TextField
//                         id="standard-basic"
//                         onChange={handleChangeValue}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//               </Table>
//             </TableContainer>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={() => setconfirmAdd({ open: false, id: "" })}
//               color="primary"
//             >
//               Cancel
//             </Button>
//             <Button color="secondary" onClick={() => addData(editData)}>
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </>
//   );
// }
