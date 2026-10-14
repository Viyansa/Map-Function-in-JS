const students = [...document.querySelectorAll(".student")];

const result = students.map(student => ({
    name: student.dataset.name,
    mark: student.dataset.mark
}));

console.log(result);