import React, { useState } from "react";
import TaskItem from "./TaskItem";

let savedTasks = [
    { name: "todo 1", status: "active" },
    { name: "todo 2", status: "completed" },
    { name: "todo 3", status: "pending" },
    { name: "todo 4", status: "archived" },
    { name: "todo 4", status: "active" },
];

let sortOrder = ["completed", "active"];

const Problem1 = () => {
    const [tasks, setTasks] = useState(savedTasks);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const [show, setShow] = useState("all");

    const handleClick = (val) => {
        setShow(val);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const reset = () => {
        setName("");
        setStatus("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([{ name, status }, ...tasks]);
        console.log("tasks", tasks);
        reset();
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        onSubmit={handleSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                value={status}
                                onChange={handleStatusChange}
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "all" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "active" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "completed" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show == "active" &&
                                tasks
                                    .filter((task) => task.status == "active")
                                    .map((task, key) => (
                                        <TaskItem task={task} key={key} />
                                    ))}
                            {show == "completed" &&
                                tasks
                                    .filter(
                                        (task) => task.status == "completed"
                                    )
                                    .map((task, key) => (
                                        <TaskItem task={task} key={key} />
                                    ))}
                            {show == "all" &&
                                tasks
                                    .sort(
                                        (a, b) =>
                                            sortOrder.indexOf(a.status) -
                                            sortOrder.indexOf(b.status)
                                    )
                                    .reverse()
                                    .map((task, key) => (
                                        <TaskItem task={task} key={key} />
                                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
