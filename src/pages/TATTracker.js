import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './TaskTracker.css'; 
import Select from "react-dropdown-select";

const TATTracker = () => {

    const sheetName = [
        { value: 1, label: 'Additive' },
        { value: 2, label: 'iProspect_DK' },
        { value: 3, label: 'DDL_iProspect_London' },
        { value: 4, label: 'iProspect_IR' }
      ];  

    const options = [
        { value: 1, label: 'High' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Low' }
      ];  

      const fteNum = [
        { value: 1, label: 1 },
        { value: 2, label: 2, },
        { value: 3, label: 3 }
      ];  

      const jobStatus = [
        { value: 1, label: 'In Process' },
        { value: 2, label: 'In QA', },
        { value: 3, label: 'Completed' },
        { value: 4, label: 'Waiting for Update' }
      ]; 

      const jobAlloted = [
        { value: 1, label: 'Vinoth Kasi Kumar' },
        { value: 2, label: 'Devangi Mota', },
        { value: 3, label: 'ThilipKumar Ganesan' },
        { value: 4, label: 'Pradnya Dabir' },
        { value: 5, label: 'Deepan Nagarajan' },
        { value: 6, label: 'Dinesh Velmurugan' },
        { value: 7, label: 'Prabhu Manu' }
      ]; 

      const jobQa = [
        { value: 1, label: 'Vinoth Kasi Kumar' },
        { value: 2, label: 'Devangi Mota', },
        { value: 3, label: 'ThilipKumar Ganesan' },
        { value: 4, label: 'Pradnya Dabir' },
        { value: 5, label: 'Deepan Nagarajan' },
        { value: 6, label: 'Dinesh Velmurugan' },
        { value: 7, label: 'Prabhu Manu' }
      ]; 

    const [startDate, setStartDate] = useState(new Date());
    const [estDate, setEstDate] = useState(new Date());
    const [value, setValue] = useState('10:00');
    const [estValue, setEstValue] = useState('10:00');

    const [deadDate, setDeadDate] = useState(new Date());
    const [deadValue, setDeadValue] = useState('10:00');
    const [drpdwn, setDrpdwn] = useState('');
    const [fte, setFte] = useState('');
    const [jbStatus, setJbStatus] = useState('');
    const [jballoted, setJballoted] = useState('');
    const [jbQa, setJbQA] = useState('');
    const [sheet, setSheet] = useState('');
 
    console.log(drpdwn, fte, jbStatus, jballoted, jbQa)
    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        //"https://script.google.com/macros/s/AKfycbxJobvDa7PUyfpD_diO9yRE9X5qNb_k4GWxRQQuuRaZO3nC8LmPQhqL-bofZCfY6Zvdvw/exec"
        fetch(
          "",
          {
            method: "POST",
            body: formDatab,
            
          }
          
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
            
          });
          setDrpdwn('')
          setFte('')
          
          alert('data fetched successfully')
      }

      
    
    return <> 
      
      <div className="bg-gray">
      
        <form className="h-full bg-zinc-200  mx-auto mt-10 sm:w-2/4 rounded-t-2xl" onSubmit={(e) => Submit(e)}>
        
                <h1 className="text-4xl bg-blue-950 text-white font-bold text-center pt-20 pb-20 rounded-t-2xl">TAT TRACKER</h1>
                <div className="px-20 pt-20 pb-20 mx-auto flex flex-col">
                    
                <div className="sm:flex flex-row gap-5 items-center">
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Sheet Name</h1> 
                            <Select className="bg-white drpdwn" options={sheetName} onChange={(sheet) => setSheet(sheet)} name="Sheet_Name" />
                            {/* <input placeholder="Sheet_Name" name="Sheet_Name" type="text" />   */}
                            
                        </div> 
                      
                    </div>

                    <div className="sm:flex flex-row gap-5 items-center">
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Year</h1>
                            <ReactDatePicker selected={startDate} onChange={(date) => (setStartDate(date), console.log(date))} name="Year" />  
                            
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Month</h1>
                            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="Month" />  
                        </div>
                      
                    </div>
                   
                    
                    
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Date</h1>
                            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="Date" />  
                        </div>
                        <div className="w-1/2">   
                            <h1 className="font-[700]">Employee ID</h1>
                            <input placeholder="Employee ID" name="Emp_ID" type="number" />
                        </div>
                         
                        
                        
                    </div>
                    <div className="sm:flex flex-row gap-5">
                        
                        <div className="w-1/2">   
                            <h1 className="font-[700]">Employee Name</h1>
                            <input placeholder="Employee Name" name="Emp_Name" type="text" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Job_Type</h1>
                            <input placeholder="Job_Type" name="Job_Type" type="text" />
                        </div>
                        
                        
                    </div>
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Ticket_ID</h1>
                            <input placeholder="Ticket_ID" name="Ticket_ID" type="number" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Task_Title</h1>
                            <input placeholder="Task_Title" name="Task_Title" type="text" />
                        </div>
                     </div>
                    
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Task_Received_On</h1>
                            <ReactDatePicker selected={deadDate} onChange={(date) => setDeadDate(date)} name="Task_Received_On" /> 
                         
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Delivery Date</h1>
                            <input placeholder="Actual_Deadline_Hours" name="Actual_Deadline_Hours" type="number" />
                        </div>
                    </div>
                     
                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Expected_to_Complete</h1>
                            <ReactDatePicker selected={deadDate} onChange={(date) => setDeadDate(date)} name="Expected_to_Complete" /> 
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Completed_On</h1>
                            <ReactDatePicker selected={deadDate} onChange={(date) => setDeadDate(date)} name="Completed_On" /> 
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Hours_Difference</h1>
                            <input placeholder="Hours_Difference(Start_End)" name="Hours_Difference(Start_End)" type="number" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">TAT</h1>
                            <input placeholder="TAT" name="TAT" type="number" />
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Grade</h1>
                            <input placeholder="Grade" name="Grade" type="text" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Reason_for_TAT_Missed</h1>
                            <input placeholder="Reason_for_TAT_Missed" name="Reason_for_TAT_Missed" type="text" />
                        </div>
                     </div>
                    
                      
                     
                    <input name="Name" type="submit" className="bg-blue-950 hover:bg-gray  w-32 mt-10 text-center mx-auto text-white p-2" />
                </div>
                
            
          
        </form> 
      </div>
    </>
}
export default TATTracker;