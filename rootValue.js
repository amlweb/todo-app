module.exports = {
    tasks: () => {
        return ['task1', 'task2']
    },
    createTask: (args) => {
        const taskTitle = args.title;
        
        return taskTitle;
    }
}