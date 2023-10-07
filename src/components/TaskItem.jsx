const TaskItem = ({task,key}) => {
    return (
        <tr key={key}>
            <th scope="col">{task.name}</th>
            <th scope="col">{task.status}</th>
        </tr>
    );
}

export default TaskItem;