import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const GoogleApi = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [estDate, setEstDate] = useState(new Date());
    const [value, setValue] = useState('10:00');
    const [estValue, setEstValue] = useState('10:00');

    const [deadDate, setDeadDate] = useState(new Date());
    const [deadValue, setDeadValue] = useState('10:00');

    function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbwZypY2mP4EDBz-o3zxT3R2sHy8m78TPgrpiFomFaHZNJgsYq0cN54fUtVQ5Zdw6dP7Gw/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    
    return <> 
      
      <div className="flex flex-row shrink gap-5 mb-2">
        <form className="form flex flex-col basis-1/2  mb-2 gap-2" onSubmit={(e) => Submit(e)}>
          <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="Received_Date" />  
          <TimePicker onChange={setValue} value={value} />
          <input placeholder="Task Subject" name="Received_Time" type="text" />
          <input placeholder="Issue ID" name="Task_Subject" type="number" />
          <input placeholder="Est Hour" name="Hours_Estimation_Approx." type="number" />
          <ReactDatePicker selected={estDate} onChange={(date) => setEstDate(date)} name="Estimated_Deadline_Date" />  
          <TimePicker onChange={setEstValue} value={estValue} name="" />
          <input placeholder="Task_Priority_Level" name="Task_Priority_Level" type="number" />
          <input placeholder="Complexity Level" name="Complexity Level" type="text" />
          <ReactDatePicker selected={deadDate} onChange={(date) => setDeadDate(date)} name="Estimated_Deadline_Date" />  
          <TimePicker onChange={setDeadValue} value={deadValue} name="" />
          <input placeholder="Task Status" name="Task Status" type="text" />
          <input placeholder="Assigned FTE" name="Assigned FTE" type="number" />
          <input placeholder="Task allocation To" name="Task allocation To" type="text" />
          <input placeholder="Task reallocation To" name="Task reallocation To" type="text" />
          <input placeholder="If assigned to multiple users" name="If assigned to multiple users" type="text" />
          <input placeholder="Hours Spent" name="Hours Spent" type="number" />
          <input placeholder="Comments" name="Comments" type="text" />
          <input placeholder="Task QA'ed by" name="Task QA'ed by" type="text" />
          <input placeholder="If QA'ed multiple users" name="If QA'ed multiple users" type="text" />
          <input placeholder="Hours Spent" name="Hours Spent" type="number" />
          <input placeholder="Comments" name="Comments" type="text" />
          <input placeholder="Non Production Hours" name="Non Production Hours" type="text" />
          <input placeholder="Notes" name="Notes" type="text" />
          <input name="Name" type="submit" />
        </form>
        <div>
            <h1>Welcome</h1>
        </div>
      </div>
    </>
}
export default GoogleApi;