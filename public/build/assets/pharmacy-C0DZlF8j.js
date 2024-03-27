import{r as n,j as e,d as D}from"./app-CEg9JAB6.js";import{S as P,H as M}from"./sidebar-DryF3hU2.js";import{F as y}from"./index-B4nz579p.js";import{R as S}from"./index-Uofm2pEf.js";import{P as B}from"./patientsmodal-CLPLGMO_.js";import{S as A}from"./sweetalert2.all-Crg2-Bly.js";const I=({admin:c,medicineCategories:f,pharmacy:k})=>{const[o,g]=n.useState(!0),[m,N]=n.useState(!0),[b,v]=n.useState([]),[w,_]=n.useState([]),[l,i]=n.useState({}),[t,x]=n.useState({admin_type:c.type,admin_id:c.id,patient_id:"",Medicine_Category:"",Medicine_Name:"",Batch_No:"",Expiry_Date:"",Quantity:"",Sale_Price:"",Tax:"",Amount:"",paid_amount:"",balance_amount:"",Doctor:"",Total:"",Discount:"",Payment_mode:"",Payment_Amount:""}),s=a=>{const{name:r,value:d}=a.target;x({...t,[r]:d}),i({...l,[r]:""})},u=async()=>{try{const a=await axios.get("/api/admin/patient-fetch");v(a.data)}catch(a){console.error("Error fetching data:",a)}},h=async()=>{try{const a=await axios.post("/api/admin/pharmacy-fetch-bill");console.log(a),_(a.data)}catch(a){console.error("Error fetching data:",a)}};n.useEffect(()=>{u(),h()},[]);const C=async a=>{a.preventDefault();const r={};if(!t.patient_id.trim())r.patient_id="Patients name is required",i(r);else if(!t.Medicine_Category.trim())r.Medicine_Category="Medicine Category is required",i(r);else if(!t.Medicine_Name.trim())r.Medicine_Name="Medicine Name required",i(r);else if(!t.Batch_No.trim())r.Batch_No="Batch No is required",i(r);else if(!t.Expiry_Date.trim())r.Expiry_Date="Expiry Date is required",i(r);else if(!t.Quantity.trim())r.Quantity="Quantity is required",i(r);else if(!t.Sale_Price.trim())r.Sale_Price="Sale Price is required",i(r);else try{await axios.post("/api/admin/pharmacy-store",t),x({admin_type:"",admin_id:"",patient_id:"",Medicine_Category:"",Medicine_Name:"",Batch_No:"",Expiry_Date:"",Quantity:"",Sale_Price:"",Tax:"",Amount:"",paid_amount:"",balance_amount:"",Doctor:"",Total:"",Discount:"",Payment_mode:"",Payment_Amount:""}),h(),A.fire({icon:"success",title:"Success!",text:"Form submitted successfully!"})}catch(d){console.log(d)}},p=()=>{g(!o)},j=()=>{N(!m)};return e.jsxs("div",{className:"flex h-screen",children:[e.jsx("div",{className:"bg-gray-800 text-white w-[11%] flex-shrink-0",children:e.jsx(P,{})}),e.jsxs("div",{className:"flex-grow bg-gray-100 ",children:[e.jsx(M,{}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"card mt-2",children:e.jsxs("div",{className:"card-header flex justify-between px-[3rem] border py-3",children:[e.jsx("div",{className:"grid place-items-center text-[18px]",children:e.jsx("h1",{children:"Pharmacy Bill"})}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsxs("button",{type:"button",onClick:p,className:"bg-gray-700 p-2 text-white rounded-md flex space-x-2",children:[e.jsx("div",{className:"grid place-items-center mt-1",children:e.jsx(y,{})}),e.jsx("h1",{children:" Generate Bill "})]}),e.jsxs(D,{type:"button",href:"/admin/pharmacy/medicine",className:"bg-gray-700 p-2 text-white rounded-md flex space-x-2",children:[e.jsx("div",{className:"grid place-items-center mt-1",children:e.jsx(y,{})}),e.jsx("h1",{children:"  Medicines "})]})]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table-auto min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Bill No"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Case ID"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Doctor Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Discount (IDR)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount (Rs.)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Paid Amount (Rs.)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Balance Amount (Rs.)"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:w.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-3 text-left",children:a.Bill_No}),e.jsx("td",{className:"px-6 py-3 text-left"}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.Doctor}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.name}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.Discount}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.Amount}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.paid_amount}),e.jsx("td",{className:"px-6 py-3 text-left",children:a.balance_amount})]}))})]})}),e.jsxs("div",{id:"exampleModal",className:o?"  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden":"fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center",children:[e.jsx("div",{className:"back-model w-[60%] bg-white relative ",children:e.jsxs("div",{className:"modal-content w-full",children:[e.jsxs("div",{className:"modal-header grid grid-cols-2  bg-[#0E99F4] p-2",children:[e.jsxs("div",{className:"w-[80%] ",children:[e.jsxs("div",{className:"w-[80%] flex space-x-2 px-4 mt-[0.29rem]",children:[e.jsxs("select",{value:t.patient_id,onChange:s,name:"patient_id",id:!0,className:"w-[100%] h-9",children:[e.jsx("option",{value:"",children:"Select Patient"}),b.map(a=>e.jsx("option",{value:a.id,children:a.name}))]}),e.jsxs("button",{onClick:j,className:"bg-gray-700 w-[100%] h-9  text-white rounded-md",children:[" ",e.jsx("i",{className:"fa-solid fa-plus"}),"Add Patient"]})]}),l.patient_id&&e.jsx("span",{className:"text-red-500",children:l.patient_id})]}),e.jsx("div",{className:"flex mt-[0.40rem]",children:e.jsx("button",{onClick:p,className:"ml-auto text-[2rem] text-white",children:e.jsx(S,{})})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"flex justify-between w-[100%] border bg-slate-300 px-[2rem]",children:[e.jsxs("div",{className:"rowsd w-[30%] flex justify-between",children:[e.jsx("h1",{children:"Bill No PATHOB418"}),e.jsx("h1",{children:"Case ID"})]}),e.jsx("div",{className:"rowsd w-[40%] flex justify-end",children:e.jsx("h1",{children:"Date 03/01/2024 5:26 PM"})})]}),e.jsxs("div",{className:"w-full grid grid-cols-4 gap-3 px-6 mt-10 relative",children:[e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:" Medicine Category *"}),e.jsxs("select",{value:t.Medicine_Category,onChange:s,name:"Medicine_Category",id:!0,className:"w-full border-gray-300",children:[e.jsx("option",{value:"",children:"Select Medicine Category"}),f.map(a=>e.jsx("option",{value:a.id,children:a.name}))]}),l.Medicine_Category&&e.jsx("span",{className:"text-red-500",children:l.Medicine_Category})]}),e.jsx("input",{name:"admin_type",value:t.admin_type,onChange:s,type:"hidden",className:" border-gray-300 w-full"}),e.jsx("input",{name:"admin_id",value:t.admin_id,onChange:s,type:"hidden",className:" border-gray-300 w-full"}),e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:" 	Medicine Name *"}),e.jsxs("select",{value:t.Medicine_Name,onChange:s,name:"Medicine_Name",className:"w-full border-gray-300",children:[e.jsx("option",{value:"",children:"Select Medicine Name"}),e.jsx("option",{value:"Alprovite",children:"Alprovite"})]}),l.Medicine_Name&&e.jsx("span",{className:"text-red-500",children:l.Medicine_Name})]}),e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:"	Batch No *"}),e.jsxs("select",{value:t.Batch_No,onChange:s,name:"Batch_No",id:!0,className:"w-full border-gray-300",children:[e.jsx("option",{value:!0,children:"Select Batch No"}),e.jsx("option",{value:!0,children:"34578"})]}),l.Batch_No&&e.jsx("span",{className:"text-red-500",children:l.Batch_No})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"	Expiry Date *"})," ",e.jsx("br",{}),e.jsx("input",{value:t.Expiry_Date,onChange:s,name:"Expiry_Date",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:" Quantity * | Available Qty	"})," ",e.jsx("br",{}),e.jsx("input",{value:t.Quantity,onChange:s,name:"Quantity",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Sale Price (IDR) *	"})," ",e.jsx("br",{}),e.jsx("input",{value:t.Sale_Price,onChange:s,name:"Sale_Price",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Tax	Amount (IDR) * "})," ",e.jsx("br",{}),e.jsx("input",{disabled:!0,onChange:s,type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full border-gray-300",children:[e.jsx("label",{htmlFor:!0,children:" Doctor"})," ",e.jsx("br",{}),e.jsxs("select",{value:t.Doctor,onChange:s,name:"Doctor",id:!0,className:"w-full border-gray-300",children:[e.jsx("option",{value:!0,children:"Select Patient"}),e.jsx("option",{value:"ss",children:"ss"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 px-6 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-2 gap-3"}),e.jsxs("div",{className:"form-group  mt-4 w-full ",children:[e.jsx("label",{htmlFor:!0,children:"Note"})," ",e.jsx("br",{}),e.jsx("textarea",{name:!0,id:!0,rows:3,className:"px-6 w-full border-gray-300",defaultValue:""})]})]}),e.jsxs("div",{className:"content mt-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Total (Rs.)"}),e.jsx("input",{value:t.Total,onChange:s,name:"Total",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Discount (Rs.)"}),e.jsx("input",{value:t.Discount,onChange:s,name:"Discount",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Tax (Rs.) "}),e.jsx("input",{value:t.Tax,onChange:s,name:"Tax",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Net Amount (Rs.)"}),e.jsx("input",{value:t.Amount,onChange:s,name:"Batch_No",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{className:"form-group w-full border-gray-300 mt-6",children:e.jsxs("select",{name:"Payment_mode",onChange:s,value:t.Payment_mode,className:" border-gray-300 w-full",children:[e.jsx("option",{value:"",children:"Select payment"}),e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"Credit Card",children:"Credit Card"}),e.jsx("option",{value:"Debit Card",children:"Debit Card"})]})}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Amount (Rs.) *"})," ",e.jsx("br",{}),e.jsx("input",{value:t.Payment_Amount,onChange:s,name:"Payment_Amount",type:"text",className:"w-full border-gray-300"})]})]})]})]}),e.jsx("div",{className:"form-group   bottom-0  left-0 right-0 mt-10 py-4",children:e.jsx("div",{className:"flex justify-end px-5 p-3 space-x-3 w-full",children:e.jsx("button",{onClick:C,className:"bg-gray-800 p-2 text-white w-[12%] ",children:"Save"})})})]})}),e.jsx(B,{Patientsmodal:m,handlePatients:j,fetchData:u})]})]})]})]})};export{I as default};