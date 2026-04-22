import { useState } from "react";


const Reportcard = () => {
    // 1. Initialize state with your imported data
    const [students, setStudents] = useState(initialData);

    function submitHandler(event) {
        event.preventDefault();

        // 2. Capture form data
        const name = event.target.name.value;
        const marks = event.target.marks.value;

        // 3. Create a new object
        const newStudent = { name, marks };

        // 4. Update state using the spread operator to keep previous data
        setStudents([...students, newStudent]);

        // 5. Optional: Clear the form
        event.target.reset();
    }

    return (
        <div>
            <h2>Report Card</h2>

            <form onSubmit={submitHandler}>
                <input placeholder="Name" name="name" required />
                <input placeholder="Marks" name="marks" type="number" required />
                <button type="submit">Add</button>
            </form>

            <hr />

            {/* 6. Map through the 'students' state, not the raw import */}
            {students.map((student, index) => (
                <div key={index} style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Marks:</strong> {student.marks}</p>
                </div>
            ))}
        </div>
    );
};

export default Reportcard;