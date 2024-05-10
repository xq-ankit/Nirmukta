import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../component/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "avatar", 
    headerName:"Avatar",
    width: 100,
    renderCell: (params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
    }
  },

  {
    field:"status", headerName:"Verified", width:100, type:"boolean"
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },


];

const rows = [
  { id: 1, lastName: 'Bisht', firstName: 'Saksham', age: 35, status:true },
  { id: 2, lastName: 'Sharma', firstName: 'Chirag', age: 42, status:true },
  { id: 3, lastName: 'Aryan', firstName: 'Saxsena', age: 45, status:true },
  { id: 4, lastName: 'Rahul', firstName: 'Singh', age: 16, status:true },
  { id: 5, lastName: 'Tarak', firstName: 'Mehta', age: null, status:true },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status:true },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status:true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:true },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:true },
];
 
const Users = () => {
  return (
   <div className="users">
    <div className="info">
      <h1>Users</h1>
      <button>Add New Users</button>
    </div>
      <DataTable slug= "users" columns={columns} rows={userRows}/>
   </div>
)
}

export default Users