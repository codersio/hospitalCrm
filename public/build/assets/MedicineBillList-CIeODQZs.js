import{r as a,j as e}from"./app-CEg9JAB6.js";import{S as ce,H as de}from"./sidebar-DryF3hU2.js";import{F as oe}from"./index-B4nz579p.js";import{R as ue}from"./index-Uofm2pEf.js";import{P as xe}from"./patientsmodal-CLPLGMO_.js";import{S as me}from"./sweetalert2.all-Crg2-Bly.js";const we=({admin:c,medicineCategories:k,medicinebill:P})=>{const[d,D]=a.useState(!0),[o,A]=a.useState(!0),[F,M]=a.useState([]),[s,T]=a.useState({}),[u,B]=a.useState(c.type),[x,R]=a.useState(c.id),[E,Q]=a.useState(""),[m,V]=a.useState(""),[h,q]=a.useState(""),[p,H]=a.useState(""),[j,I]=a.useState(""),[g,$]=a.useState(""),[f,z]=a.useState(""),[i,O]=a.useState(""),[L,G]=a.useState(""),[n,J]=a.useState(""),[y,K]=a.useState(""),[U,he]=a.useState(""),[b,pe]=a.useState(""),[v,W]=a.useState(""),[N,je]=a.useState(""),[w,X]=a.useState(""),[Y,Z]=a.useState(""),[ee,te]=a.useState(""),[ae,se]=a.useState(""),[le,_]=a.useState(""),r=t=>{const{name:l,value:ne}=t.target;setformData({...formData,[l]:ne}),T({...s,[l]:""})},C=async()=>{try{const t=await axios.get("/api/admin/patient-fetch");M(t.data)}catch(t){console.error("Error fetching data:",t)}};a.useEffect(()=>{C()},[]);const re=async t=>{t.preventDefault();try{const l={admin_type:u,admin_id:x,category_id:m,medicine_id:h,Batch_No:p,Expiry_Date:j,Quantity:g,Sale_Price:f,Tax:i,Amount:n,paid_amount:y,balance_amount:U,Total:b,Discount:N,Payment_mode:w,Payment_Amount:v,files_attach:le};await axios.post("/api/admin/medicine-bill-store",l,{headers:{"Content-Type":"multipart/form-data"}}),AppoinmentfetchData(),me.fire({icon:"success",title:"Success!",text:"Form submitted successfully!"})}catch(l){console.log(l)}},S=()=>{D(!d)},ie=()=>{A(!o)};return e.jsxs("div",{className:"flex h-screen",children:[e.jsx("div",{className:"bg-gray-800 text-white w-[11%] flex-shrink-0",children:e.jsx(ce,{})}),e.jsxs("div",{className:"flex-grow bg-gray-100 ",children:[e.jsx(de,{}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"card mt-2",children:e.jsxs("div",{className:"card-header flex justify-between px-[3rem] border py-3",children:[e.jsx("div",{className:"grid place-items-center text-[18px]",children:e.jsx("h1",{children:"MedicinePurchase Bill"})}),e.jsxs("button",{type:"button",onClick:S,className:"bg-gray-700 p-2 text-white rounded-md flex space-x-2",children:[e.jsx("div",{className:"grid place-items-center mt-1",children:e.jsx(oe,{})}),e.jsx("h1",{children:"Purchase Medicine "})]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table-auto min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pharmacy Purchase No"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Purchase Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Bill No"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Supplier Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total ($)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Tax ($)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Discount ($)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Net Amount (Rs.)"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:P.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-3 text-left",children:t.bill_no}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.Batch_No}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.supplier_id}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.Total}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.Tax}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.Discount}),e.jsx("td",{className:"px-6 py-3 text-left",children:t.Amount})]}))})]})}),e.jsxs("div",{id:"exampleModal",className:d?"  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden":"fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center",children:[e.jsx("div",{className:"back-model w-[60%] bg-white relative ",children:e.jsxs("div",{className:"modal-content w-full",children:[e.jsxs("div",{className:"modal-header grid grid-cols-2  bg-[#0E99F4] p-2",children:[e.jsxs("div",{className:"w-[80%] ",children:[e.jsx("div",{className:"w-[80%] flex space-x-2 px-4 mt-[0.29rem]",children:e.jsxs("select",{value:E,onChange:t=>Q(t.target.value),name:"supplier_id",id:!0,className:"w-[100%] h-9",children:[e.jsx("option",{value:"",children:"Select Supplier"}),F.map(t=>e.jsx("option",{value:t.id,children:t.name}))]})}),s.supplier_id&&e.jsx("span",{className:"text-red-500",children:s.supplier_id})]}),e.jsx("div",{className:"flex mt-[0.40rem]",children:e.jsx("button",{onClick:S,className:"ml-auto text-[2rem] text-white",children:e.jsx(ue,{})})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"flex justify-between w-[100%] border bg-slate-300 px-[2rem]",children:[e.jsxs("div",{className:"rowsd w-[30%] flex justify-between",children:[e.jsx("h1",{children:"Bill No PATHOB418"}),e.jsx("h1",{children:"Case ID"})]}),e.jsx("div",{className:"rowsd w-[40%] flex justify-end",children:e.jsx("h1",{children:"Date 03/01/2024 5:26 PM"})})]}),e.jsxs("div",{className:"w-full grid grid-cols-4 gap-3 px-6 mt-10 relative",children:[e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:" Medicine Category *"}),e.jsxs("select",{value:m,onChange:t=>V(t.target.value),name:"category_id",id:!0,className:"w-full border-gray-300",children:[e.jsx("option",{value:"",children:"Select Medicine Category"}),k.map(t=>e.jsx("option",{value:t.id,children:t.name}))]}),s.Medicine_Category&&e.jsx("span",{className:"text-red-500",children:s.Medicine_Category})]}),e.jsx("input",{name:"admin_type",value:u,onChange:t=>B(t.target.value),type:"hidden",className:" border-gray-300 w-full"}),e.jsx("input",{name:"admin_id",value:x,onChange:t=>R(t.target.value),type:"hidden",className:" border-gray-300 w-full"}),e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:" 	Medicine Name *"}),e.jsxs("select",{value:h,onChange:t=>q(t.target.value),name:"medicine_id",className:"w-full border-gray-300",children:[e.jsx("option",{value:"",children:"Select Medicine Name"}),e.jsx("option",{value:"Alprovite",children:"Alprovite"})]}),s.Medicine_Name&&e.jsx("span",{className:"text-red-500",children:s.Medicine_Name})]}),e.jsxs("div",{className:"form-group w-full ",children:[e.jsx("label",{htmlFor:!0,children:"	Batch No *"}),e.jsxs("select",{value:p,onChange:t=>H(t.target.value),name:"Batch_No",id:!0,className:"w-full border-gray-300",children:[e.jsx("option",{value:!0,children:"Select Batch No"}),e.jsx("option",{value:"",children:"34578"})]})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"	Expiry Date *"})," ",e.jsx("br",{}),e.jsx("input",{value:j,onChange:t=>I(t.target.value),name:"Expiry_Date",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:" Quantity * | Available Qty	"})," ",e.jsx("br",{}),e.jsx("input",{value:g,onChange:t=>$(t.target.value),name:"Quantity",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Sale Price (IDR) *	"})," ",e.jsx("br",{}),e.jsx("input",{value:f,onChange:t=>z(t.target.value),name:"Sale_Price",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Tax	Amount (IDR) * "})," ",e.jsx("br",{}),e.jsx("input",{value:i,onChange:t=>O(t.target.value),type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full border-gray-300",children:[e.jsx("label",{htmlFor:!0,children:" Bill no"})," ",e.jsx("br",{}),e.jsx("input",{value:L,onChange:t=>G(t.target.value),name:"bill_no",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Amount"})," ",e.jsx("br",{}),e.jsx("input",{value:n,onChange:t=>J(t.target.value),name:"Amount",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Amount"})," ",e.jsx("br",{}),e.jsx("input",{value:y,onChange:t=>K(t.target.value),name:"paid_amount",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"MRP"})," ",e.jsx("br",{}),e.jsx("input",{value:ee,onChange:t=>te(t.target.value),name:"mrp",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Purchase Amount"})," ",e.jsx("br",{}),e.jsx("input",{value:ae,onChange:t=>se(t.target.value),name:"purchase_amount",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Packageing Qty"})," ",e.jsx("br",{}),e.jsx("input",{value:Y,onChange:t=>Z,name:"paking_quantity",type:"text",className:"w-full border-gray-300"})]}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Attach Document"})," ",e.jsx("br",{}),e.jsx("div",{class:"flex items-center justify-center w-full",children:e.jsxs("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[e.jsx("div",{class:"flex flex-col items-center justify-center mt-4",children:e.jsx("svg",{class:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})})}),e.jsx("input",{id:"dropzone-file",name:"files_attach",value:_,onChange:t=>_(t.target.files[0]),type:"file",class:"hidden"})]})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 px-6 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-2 gap-3"}),e.jsxs("div",{className:"form-group  mt-4 w-full ",children:[e.jsx("label",{htmlFor:!0,children:"Note"})," ",e.jsx("br",{}),e.jsx("textarea",{name:!0,id:!0,rows:3,className:"px-6 w-full border-gray-300",defaultValue:""})]})]}),e.jsxs("div",{className:"content mt-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Total (Rs.)"}),e.jsx("input",{value:b,onChange:r,name:"Total",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Discount (Rs.)"}),e.jsx("input",{value:N,onChange:r,name:"Discount",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Tax (Rs.) "}),e.jsx("input",{value:i,onChange:r,name:"Tax",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{children:"Net Amount (Rs.)"}),e.jsx("input",{value:n,onChange:r,name:"Batch_No",type:"text",defaultValue:2e3,className:"border-t-0 border-l-0 border-r-0 border-gray-300"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{className:"form-group w-full border-gray-300 mt-6",children:e.jsxs("select",{name:"Payment_mode",onChange:t=>X(t.target.value),value:w,className:" border-gray-300 w-full",children:[e.jsx("option",{value:"",children:"Select payment"}),e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"Credit Card",children:"Credit Card"}),e.jsx("option",{value:"Debit Card",children:"Debit Card"})]})}),e.jsxs("div",{className:"form-group w-full",children:[e.jsx("label",{htmlFor:!0,children:"Amount (Rs.) *"})," ",e.jsx("br",{}),e.jsx("input",{value:v,onChange:t=>W(t.target.value),name:"Payment_Amount",type:"text",className:"w-full border-gray-300"})]})]})]})]}),e.jsx("div",{className:"form-group   bottom-0  left-0 right-0 mt-10 py-4",children:e.jsx("div",{className:"flex justify-end px-5 p-3 space-x-3 w-full",children:e.jsx("button",{onClick:re,className:"bg-gray-800 p-2 text-white w-[12%] ",children:"Save"})})})]})}),e.jsx(xe,{Patientsmodal:o,handlePatients:ie,fetchData:C})]})]})]})]})};export{we as default};
