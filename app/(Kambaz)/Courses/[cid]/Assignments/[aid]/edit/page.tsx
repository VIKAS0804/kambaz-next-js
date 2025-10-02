export default function EditAssignment({ params }: { params: { cid: string; aid: string } }) {
    return (
      <div>
        <h1>{params.cid} — Edit {params.aid}</h1>
        <form style={{ display: "grid", gap: 12 }}>
          <div>
            <label htmlFor="name">Assignment Name</label><br/>
            <input id="name" defaultValue="Assignment 1" />
          </div>
          <div>
            <label htmlFor="desc">Description</label><br/>
            <textarea id="desc" rows={4} defaultValue="Write a short essay about HTML elements." />
          </div>
          <div>
            <label htmlFor="pts">Points</label><br/>
            <input id="pts" type="number" defaultValue={100} />
          </div>
          <div>
            <label htmlFor="group">Assignment Group</label><br/>
            <select id="group" defaultValue="assignments">
              <option value="assignments">Assignments</option>
              <option value="quizzes">Quizzes</option>
              <option value="exams">Exams</option>
              <option value="project">Project</option>
            </select>
          </div>
          <div>
            <label htmlFor="display">Display Grade</label><br/>
            <select id="display" defaultValue="percentage">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="complete">Complete/Incomplete</option>
            </select>
          </div>
          <div>
            <label htmlFor="subtype">Submission Type</label><br/>
            <select id="subtype" defaultValue="online">
              <option value="online">Online</option>
              <option value="onpaper">On Paper</option>
              <option value="external">External Tool</option>
            </select>
          </div>
          <fieldset style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <legend>Online Entry Options</legend>
            <label><input type="checkbox" defaultChecked /> Text Entry</label><br/>
            <label><input type="checkbox" /> Website URL</label><br/>
            <label><input type="checkbox" defaultChecked /> Media Recordings</label><br/>
            <label><input type="checkbox" /> File Uploads</label>
          </fieldset>
          <div>
            <label htmlFor="assignTo">Assign to</label><br/>
            <input id="assignTo" defaultValue="Everyone" />
          </div>
          <div>
            <label htmlFor="due">Due</label><br/>
            <input id="due" type="date" defaultValue="2025-10-15" />
          </div>
          <div>
            <label htmlFor="from">Available from</label><br/>
            <input id="from" type="date" defaultValue="2025-10-01" />
          </div>
          <div>
            <label htmlFor="until">Until</label><br/>
            <input id="until" type="date" defaultValue="2025-10-31" />
          </div>
          <div><button type="submit">Save</button></div>
        </form>
      </div>
    );
  }
  